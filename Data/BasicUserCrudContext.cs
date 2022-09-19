using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using BasicUserCrud.Models;

namespace BasicUserCrud.Data
{
    public class BasicUserCrudContext : DbContext
    {
        public BasicUserCrudContext (DbContextOptions<BasicUserCrudContext> options)
            : base(options)
        {
        }

        public DbSet<BasicUserCrud.Models.User> User { get; set; } = default!;
    }
}
