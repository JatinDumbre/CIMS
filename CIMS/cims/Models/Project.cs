using System;
using System.Collections.Generic;

namespace cims.Models;

public partial class Project
{
    public int ProjectId { get; set; }

    public string ProjectName { get; set; } = null!;

    public int LocId { get; set; }

    public virtual Location Loc { get; set; } = null!;

    public virtual ICollection<MaterialProject> MaterialProjects { get; set; } = new List<MaterialProject>();

    public virtual ICollection<MaterialRequest> MaterialRequests { get; set; } = new List<MaterialRequest>();

    public virtual ICollection<ProjectAllocation> ProjectAllocations { get; set; } = new List<ProjectAllocation>();

    public virtual ICollection<Report> Reports { get; set; } = new List<Report>();
}
