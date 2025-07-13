using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System;
using System.IO;

namespace WebAPI.Filters
{
    public class CustomExceptionFilter : IExceptionFilter
    {
        public void OnException(ExceptionContext context)
        {
            string message = $"[{DateTime.Now}] Exception: {context.Exception.Message}\n";
            File.AppendAllText("exceptions.log", message);

            context.Result = new ObjectResult(new
            {
                Error = "Internal Server Error",
                Details = context.Exception.Message
            })
            {
                StatusCode = 500
            };
        }
    }
}
