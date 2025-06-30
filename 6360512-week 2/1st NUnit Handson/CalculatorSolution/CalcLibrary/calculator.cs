namespace CalcLibrary
{
    public interface ICalculator
    {
        double Add(double a, double b);
    }

    public class Calculator : ICalculator
    {
        public double Add(double a, double b) => a + b;
    }
}