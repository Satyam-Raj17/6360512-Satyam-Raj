using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace MyFirstWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        private static List<string> values = new List<string> { "value1", "value2" };

        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return Ok(values);
        }

        [HttpPost]
        public ActionResult AddValue([FromBody] string value)
        {
            if (string.IsNullOrEmpty(value))
                return BadRequest("Value cannot be empty");

            values.Add(value);
            return Ok("Value added successfully");
        }
    }
}
