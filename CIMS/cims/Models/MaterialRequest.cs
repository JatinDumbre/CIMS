using System;
using System.Collections.Generic;

namespace cims.Models;

public partial class MaterialRequest
{
    public int ReqId { get; set; }

    public int MId { get; set; }

    public float ReqQty { get; set; }

    public int ReqBy { get; set; }

    public DateOnly ReqDate { get; set; }

    public int ProjectId { get; set; }

    public int? StatusId { get; set; }

    public virtual Material MIdNavigation { get; set; } = null!;

    public virtual Project Project { get; set; } = null!;

    public virtual User ReqByNavigation { get; set; } = null!;

    public virtual Status? Status { get; set; }
}
