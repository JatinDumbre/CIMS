using System;
using System.Collections.Generic;

namespace cims.Models;

public partial class Report
{
    public int RepId { get; set; }

    public int ProjId { get; set; }

    public int GenBy { get; set; }

    public DateOnly RepDate { get; set; }

    public virtual User GenByNavigation { get; set; } = null!;

    public virtual Project Proj { get; set; } = null!;
}
