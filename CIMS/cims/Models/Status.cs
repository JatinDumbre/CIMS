using System;
using System.Collections.Generic;

namespace cims.Models;

public partial class Status
{
    public int Idstatus { get; set; }

    public string StatusName { get; set; } = null!;

    public virtual ICollection<MaterialRequest> MaterialRequests { get; set; } = new List<MaterialRequest>();
}
