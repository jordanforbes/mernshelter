using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ValidateForm.Models;

namespace ValidateForm.Controllers
{
    public class HomeController : Controller
    {   
        [HttpGet("")]
        public IActionResult Index()
        {
            return View();
        }
        [HttpPost("process")]
        public IActionResult Process(User usr)
        {
            if(ModelState.IsValid)
            {
                return View("Results");
            }else{
                return View("Index");
            }
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
