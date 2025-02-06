using System;
using System.Collections.Generic;

namespace cims.Models;

public partial class Access
{
    public int AccId { get; set; }

    public string AccessType { get; set; } = null!;

    public virtual ICollection<User> Users { get; set; } = new List<User>();
}
