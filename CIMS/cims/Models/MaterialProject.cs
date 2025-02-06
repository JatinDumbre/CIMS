using System;
using System.Collections.Generic;

namespace cims.Models;

public partial class MaterialProject
{
    public int MpId { get; set; }

    public int? MatId { get; set; }

    public int PjId { get; set; }

    public float? Quantity { get; set; }

    public virtual Material? Mat { get; set; }

    public virtual Project Pj { get; set; } = null!;
}
