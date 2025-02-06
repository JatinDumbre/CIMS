using System;
using System.Collections.Generic;

namespace cims.Models;

public partial class Material
{
    public int MId { get; set; }

    public string MName { get; set; } = null!;

    public int CatId { get; set; }

    public int UnitId { get; set; }

    public string? Description { get; set; }

    public virtual Category Cat { get; set; } = null!;

    public virtual ICollection<MaterialProject> MaterialProjects { get; set; } = new List<MaterialProject>();

    public virtual ICollection<MaterialRequest> MaterialRequests { get; set; } = new List<MaterialRequest>();

    public virtual Unit Unit { get; set; } = null!;
}
