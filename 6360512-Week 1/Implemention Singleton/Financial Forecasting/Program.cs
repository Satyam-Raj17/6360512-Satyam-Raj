
using System;

namespace FinancialForecasting
{
    public class FinancialForecast
    {
        public static double CalculateFutureValue(double pv, double rate, int years)
        {
            if (years == 0)
                return pv;
            return CalculateFutureValue(pv, rate, years - 1) * (1 + rate);
        }

        public static void Main()
        {
            double pv = 1000;
            double rate = 0.05;
            int years = 5;

            double fv = CalculateFutureValue(pv, rate, years);
            Console.WriteLine($"Future value after {years} years: {fv:F2}");
        }
    }
}
