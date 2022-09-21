using Microsoft.EntityFrameworkCore;

namespace BasicUserCrud.Data
{
    public class BasicUserCrudContext : DbContext
    {
        public BasicUserCrudContext(DbContextOptions<BasicUserCrudContext> options)
            : base(options)
        {
        }

        public DbSet<BasicUserCrud.Models.User> Users { get; set; } = default!;
    }
}
