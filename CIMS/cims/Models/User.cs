using System;
using System.Collections.Generic;

namespace cims.Models;

public partial class User
{
    public int UserId { get; set; }

    public string Password { get; set; } = null!;

    public string Fname { get; set; } = null!;

    public string Lname { get; set; } = null!;

    public string MobNo { get; set; } = null!;

    public string Email { get; set; } = null!;

    public string Address { get; set; } = null!;

    public int AccId { get; set; }

    public string? Status { get; set; }

    public virtual Access Acc { get; set; } = null!;

    public virtual ICollection<MaterialRequest> MaterialRequests { get; set; } = new List<MaterialRequest>();

    public virtual ICollection<ProjectAllocation> ProjectAllocationPms { get; set; } = new List<ProjectAllocation>();

    public virtual ICollection<ProjectAllocation> ProjectAllocationSos { get; set; } = new List<ProjectAllocation>();

    public virtual ICollection<Report> Reports { get; set; } = new List<Report>();
}
