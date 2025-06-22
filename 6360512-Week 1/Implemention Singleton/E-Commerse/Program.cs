using System;

public class P
{
    public int Id { get; set; }
    public string N { get; set; }
    public string C { get; set; }

    public P(int id, string n, string c)
    {
        Id = id;
        N = n;
        C = c;
    }
}

public class Program
{
    public static void Main()
    {
        P[] pArr = {
            new P(1, "Laptop", "Electronics"),
            new P(2, "Shoes", "Apparel"),
            new P(3, "Phone", "Electronics"),
            new P(4, "Tablet", "Electronics")
        };

        Array.Sort(pArr, (a, b) => a.N.CompareTo(b.N));

        var l = LSearch(pArr, "Phone");
        Console.WriteLine(l != null ? "Linear: " + l.N : "Not Found (Linear)");

        var b = BSearch(pArr, "Phone");
        Console.WriteLine(b != null ? "Binary: " + b.N : "Not Found (Binary)");
    }

    public static P LSearch(P[] a, string n)
    {
        foreach (var x in a)
            if (x.N.Equals(n, StringComparison.OrdinalIgnoreCase))
                return x;
        return null;
    }

    public static P BSearch(P[] a, string n)
    {
        int l = 0, r = a.Length - 1;
        while (l <= r)
        {
            int m = (l + r) / 2;
            int c = string.Compare(a[m].N, n, StringComparison.OrdinalIgnoreCase);
            if (c == 0) return a[m];
            else if (c < 0) l = m + 1;
            else r = m - 1;
        }
        return null;
    }
}
