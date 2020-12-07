using Business.Abstract;
using Entities.Concrete;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private IUserService _userService;

        public UsersController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpGet("getall")]
        public IActionResult GetList()
        {
            Response.Headers.Add("Content-Type", "application/json");
            var result = _userService.GetList();
            return Ok(result);
        }

        [HttpPost("add")]
        public IActionResult Add(User user)
        {
            Response.Headers.Add("Content-Type", "application/json");
            _userService.Add(user);
            return Ok("Kullanıcı Eklenmiştir");
        }
        [HttpGet("test")]
        public IActionResult aa(User user)
        {
            return Ok("Kullanıcı Eklenmiştir");
        }
    }
}
