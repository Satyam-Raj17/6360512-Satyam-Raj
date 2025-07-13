using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using JwtDemo.Models;
using System.Collections.Generic;
using System.Linq;

namespace JwtDemo.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize(Roles = "Admin,POC")]
    public class EmployeeController : ControllerBase
    {
        private static List<Employee> employees = new List<Employee>
        {
            new Employee { Id = 1, Name = "John", Salary = 50000 },
            new Employee { Id = 2, Name = "Alice", Salary = 60000 }
        };

        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(employees);
        }
    }
}
