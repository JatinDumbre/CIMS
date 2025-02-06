using System;
using System.Collections.Generic;

namespace cims.Models;

public partial class UserArchive
{
    public int UserId { get; set; }

    public string Fname { get; set; } = null!;

    public string Lname { get; set; } = null!;

    public string MobNo { get; set; } = null!;

    public string Email { get; set; } = null!;

    public string Address { get; set; } = null!;

    public int AccId { get; set; }
}
