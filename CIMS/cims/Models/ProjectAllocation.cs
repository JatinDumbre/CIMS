using System;
using System.Collections.Generic;

namespace cims.Models;

public partial class ProjectAllocation
{
    public int PaId { get; set; }

    public int PId { get; set; }

    public int? PmId { get; set; }

    public int? SoId { get; set; }

    public virtual Project PIdNavigation { get; set; } = null!;

    public virtual User? Pm { get; set; }

    public virtual User? So { get; set; }
}
