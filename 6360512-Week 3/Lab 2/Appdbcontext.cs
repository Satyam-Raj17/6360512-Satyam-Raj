using Microsoft.EntityFrameworkCore;

public class AppDbContext : DbContext
{
    public DbSet<Product> Products { get; set; }
    public DbSet<Category> Categories { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        // Connect to LocalDB v11.0 and create RetailStoreDB if it doesn't exist
        optionsBuilder.UseSqlServer(@"Server=(localdb)\v11.0;Database=RetailStoreDB;Trusted_Connection=True;");
    }
}
