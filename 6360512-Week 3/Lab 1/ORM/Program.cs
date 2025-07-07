using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

class Program
{
    static async Task Main()
    {
        await using var db = new AppDbContext();

        Console.WriteLine("🔹 All Products:");
        var allProducts = await db.Products
            .Include(prod => prod.Category)
            .ToListAsync();

        foreach (var item in allProducts)
        {
            var categoryName = item.Category?.Name ?? "None";
            Console.WriteLine($"{item.Name} - ₹{item.Price} - Category: {categoryName}");
        }

        Console.WriteLine("\n🔹 Find Product by ID (1):");
        var selectedProduct = await db.Products.FindAsync(1);
        Console.WriteLine($"Found: {(selectedProduct == null ? "Not found" : selectedProduct.Name)}");

        Console.WriteLine("\n🔹 First Product > ₹50000:");
        var highPriced = await db.Products
            .Where(p => p.Price > 50000)
            .FirstOrDefaultAsync();

        Console.WriteLine($"Expensive: {highPriced?.Name ?? "None"}");
    }
}
