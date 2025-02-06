using cims.DTO;
using cims.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace cims.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RequestController : ControllerBase
    {
        private readonly P03CimsContext _context;

        public RequestController(P03CimsContext context) { 
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllRequest()
        {
            var requests = await _context.MaterialRequests
                .Include(m => m.MIdNavigation)  // Load Material Name
                .Include(m => m.Project)        // Load Project Name
                .Include(m => m.ReqByNavigation) // Load Requested By User
                .Include(m => m.Status)         // Load Status
                .Select(r => new
                {
                    r.ReqId,
                    MaterialName = r.MIdNavigation.MName,  // Show Material Name instead of ID
                    r.ReqQty,
                    r.ReqDate,
                    RequestedBy = r.ReqByNavigation.Fname, // Assuming 'Fname' stores user's first name
                    ProjectName = r.Project.ProjectName,   // Show Project Name instead of ID
                    StatusName = r.Status != null ? r.Status.StatusName : "Pending"
                })
                .ToListAsync();

            return Ok(requests);
        }

        [HttpPost]
        public async Task<IActionResult> CreateRequest([FromBody] MaterialRequestDto requestDto)
        {
            if (string.IsNullOrEmpty(requestDto.MaterialName) || requestDto.ReqQty <= 0)
            {
                return BadRequest("Invalid input data");
            }

            // Find Material ID based on Material Name
            var material = await _context.Materials
                .FirstOrDefaultAsync(m => m.MName == requestDto.MaterialName);
            if (material == null)
            {
                return NotFound("Material not found");
            }

            // Find Project ID based on Project Name
            var project = await _context.Projects
                .FirstOrDefaultAsync(p => p.ProjectName == requestDto.ProjectName);
            if (project == null)
            {
                return NotFound("Project not found");
            }

            // Find Project Manager ID (PmId) from ProjectAllocation table
            var projectAllocation = await _context.ProjectAllocations
                .FirstOrDefaultAsync(pa => pa.PId == project.ProjectId);
            if (projectAllocation == null || projectAllocation.PmId == null)
            {
                return NotFound("Project Manager not assigned for this project");
            }

            // Create a new Material Request
            var newRequest = new MaterialRequest
            {
                MId = material.MId,
                ReqQty = requestDto.ReqQty,
                ReqBy = projectAllocation.PmId.Value, // Assign Project Manager ID as requester
                ReqDate = DateOnly.FromDateTime(DateTime.UtcNow), // Use current date
                ProjectId = project.ProjectId,
                StatusId = 1 // Default status is pending (null)
            };

            _context.MaterialRequests.Add(newRequest);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetAllRequest), new { id = newRequest.ReqId }, newRequest);
        }

        [HttpGet("getByProject/{projectId}")]
        public IActionResult GetRequestsByProject(int projectId)
        {
            var siteOperatorId = _context.ProjectAllocations
                                         .Where(pa => pa.PId == projectId)
                                         .Select(pa => pa.SoId)
                                         .FirstOrDefault();

            if (siteOperatorId == null)
            {
                return NotFound("No Site Operator assigned to this project.");
            }

            var requests = _context.MaterialRequests
                                   .Include(m => m.MIdNavigation)
                                   .Include(m => m.Project)
                                   .Include(m => m.ReqByNavigation)
                                   .Include(m => m.Status)
                                   .Where(m => m.ProjectId == projectId)
                                   .ToList();

            return Ok(requests);
        }
        [HttpPut("updateStatus/{requestId}")]
        public async Task<IActionResult> UpdateRequestStatus(int requestId, [FromBody] string statusName)
        {
            // Find the Material Request
            var request = await _context.MaterialRequests
                .Include(m => m.Status)
                .FirstOrDefaultAsync(m => m.ReqId == requestId);

            if (request == null)
            {
                return NotFound(new { message = "Material request not found." });
            }

            // Find the Status by name
            var status = await _context.Statuses.FirstOrDefaultAsync(s => s.StatusName == statusName);
            if (status == null)
            {
                return BadRequest(new { message = "Invalid status name." });
            }

            // Update the status
            request.StatusId = status.Idstatus;
            await _context.SaveChangesAsync();

            // Return the updated object
            return Ok(new
            {
                message = "Status updated successfully.",
                updatedRequest = new
                {
                    request.ReqId,
                    request.StatusId,
                    StatusName = status.StatusName
                }
            });
        }


    }
}
