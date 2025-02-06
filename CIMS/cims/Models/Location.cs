using System;
using System.Collections.Generic;

namespace cims.Models;

public partial class Location
{
    public int LocId { get; set; }

    public string LocName { get; set; } = null!;

    public string LocAdd { get; set; } = null!;

    public string LocCity { get; set; } = null!;

    public virtual ICollection<Project> Projects { get; set; } = new List<Project>();
}
