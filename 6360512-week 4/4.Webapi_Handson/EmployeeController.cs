using Microsoft.AspNetCore.Mvc;
using EmployeeApiDemo.Models;
using System.Collections.Generic;
using System.Linq;

namespace EmployeeApiDemo.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeeController : ControllerBase
    {
        // Static hardcoded employee list
        private static List<Employee> employees = new List<Employee>
        {
            new Employee { Id = 1, Name = "John", Salary = 50000 },
            new Employee { Id = 2, Name = "Alice", Salary = 60000 },
            new Employee { Id = 3, Name = "Bob", Salary = 70000 }
        };

        // ✅ PUT: Update Employee
        [HttpPut("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public ActionResult<Employee> UpdateEmployee(int id, [FromBody] Employee updatedEmp)
        {
            if (id <= 0)
            {
                return BadRequest("Invalid employee id");
            }

            var existingEmp = employees.FirstOrDefault(e => e.Id == id);
            if (existingEmp == null)
            {
                return BadRequest("Invalid employee id");
            }

            // Update employee fields
            existingEmp.Name = updatedEmp.Name;
            existingEmp.Salary = updatedEmp.Salary;

            return Ok(existingEmp);
        }

        // ✅ GET: To verify the employee list
        [HttpGet]
        public ActionResult<List<Employee>> GetAll()
        {
            return Ok(employees);
        }
    }
}
