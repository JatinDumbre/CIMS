using cims.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace cims.Controllers
{
    [Route("transaction/[controller]")]
    [ApiController]
    public class ReportController : ControllerBase
    {
        private readonly P03CimsContext _context;

        public ReportController(P03CimsContext context)
        {
            _context = context;
        }

        [HttpGet("generate-report/{projectId}")]
        public async Task<IActionResult> GenerateReport(int projectId)
        {
            // Find Project and related information
            var project = await _context.Projects
                .Include(p => p.Loc) // Assuming Location is associated with Project
                .FirstOrDefaultAsync(p => p.ProjectId == projectId);

            if (project == null)
            {
                return NotFound("Project not found");
            }

            // Get ProjectAllocation to find PmId
            var projectAllocation = await _context.ProjectAllocations
                .Include(pa => pa.Pm)  // Include PM (Project Manager)
                .Include(pa => pa.So)  // Include SO (Site Officer)
                .FirstOrDefaultAsync(pa => pa.PId == projectId);

            if (projectAllocation == null || projectAllocation.Pm == null)
            {
                return NotFound("Project Allocation or Project Manager not found");
            }

            // Retrieve materials requested for this project
            var materialRequests = await _context.MaterialRequests
                .Include(mr => mr.MIdNavigation) // Include Material
                .Include(mr => mr.Status) // Include Status
                // .Include(mr=>mr.Cate)
                .Where(mr => mr.ProjectId == projectId)
                .ToListAsync();

            var materials = await _context.Materials
                .Include(m => m.Unit)
                .Include(m => m.Cat)
                .ToListAsync();
            // Create the report data
            var reportData = new List<object>();

            foreach (var materialRequest in materialRequests)
            {
                var material = materialRequest.MIdNavigation;
                var status = materialRequest.Status?.StatusName;
                var unitName = material.Unit?.UnitName; // Get unitName from Unit
                var categoryName = material.Cat?.CatName; // Get categoryName from Category
                var pmName = projectAllocation.Pm?.Fname; // Get PM name
                var soName = projectAllocation.So?.Fname; // Get SO name

                reportData.Add(new
                {
                    ProjectName = project.ProjectName,
                    LocationName = project.Loc.LocName,
                    MaterialName = material.MName,
                    UnitName = unitName,
                    Quantity = materialRequest.ReqQty,
                    Status = status,
                    PmName = pmName,
                    SoName = soName,
                    CategoryName = categoryName
                });
            }

            // Retrieve the user with AccId = 3 (e.g., Admin or other roles)
            var user = await _context.Users
                .FirstOrDefaultAsync(u => u.AccId == 3);

            if (user == null)
            {
                return NotFound("User with AccId = 3 not found");
            }

            // Proceed to create the report using the correct user ID (AccId = 3 user)
            var report = new Report
            {
                ProjId = projectId,
                GenBy = user.UserId, // Use the user with AccId = 3
                RepDate = DateOnly.FromDateTime(DateTime.UtcNow)
            };

            _context.Reports.Add(report);
            await _context.SaveChangesAsync();

            return Ok(reportData); // Return the generated report data as JSON
        }
    }
}

