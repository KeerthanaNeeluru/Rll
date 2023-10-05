using Microsoft.EntityFrameworkCore;
using UserDetailsApi.Models;

namespace UserDetailsApi.Data
{
    public class DataContext:DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }
        public DbSet<UserDetails> UserDetailss=>Set<UserDetails>();
        public DbSet<ProductDetails> ProductDetailss => Set<ProductDetails>();

    }
}
