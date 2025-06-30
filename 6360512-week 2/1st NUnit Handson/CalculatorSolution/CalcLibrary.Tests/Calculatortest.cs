using NUnit.Framework;
using CalcLibrary;

namespace CalcLibrary.Tests
{
    [TestFixture] // 1. TestFixture attribute
    public class CalculatorTests
    {
        private ICalculator _calculator;

        [SetUp] // 2. Setup (initialize)
        public void Setup() => _calculator = new Calculator();

        [TearDown] // 3. Teardown (cleanup)
        public void Cleanup() => _calculator = null;

        // 4. Parameterized test with TestCase
        [TestCase(5, 7, 12)]
        [TestCase(-1, 1, 0)]
        public void Add_ValidInputs_ReturnsSum(double a, double b, double expected)
        {
            var result = _calculator.Add(a, b);
            Assert.That(result, Is.EqualTo(expected)); // 5. Assert.That
        }

        [Test]
        [Ignore("Pending implementation")] // 6. Ignore attribute
        public void Subtract_NotImplemented_ShouldBeIgnored() { }
    }
}