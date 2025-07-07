using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

class Program
{
    static async Task Main()
    {
        await using var db = new AppDbContext();

        Console.WriteLine("🔹 All Products:");
        var items = await db.Products.Include(p => p.Category).ToListAsync();

        foreach (var item in items)
        {
            Console.WriteLine($"{item.Name} - ₹{item.Price} - Category: {item.Category?.Name ?? "Unknown"}");
        }

        Console.WriteLine("\n🔹 Find Product by ID (1):");
        var selected = await db.Products.FindAsync(1);
        Console.WriteLine($"Found: {selected?.Name ?? "Not found"}");

        Console.WriteLine("\n🔹 First Product > ₹50000:");
        var expensive = await db.Products.FirstOrDefaultAsync(p => p.Price > 50000);
        Console.WriteLine($"Expensive: {expensive?.Name ?? "None"}");
    }
}
