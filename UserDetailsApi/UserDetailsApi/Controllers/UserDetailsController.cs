using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UserDetailsApi.Data;
using UserDetailsApi.Models;

namespace UserDetailsApi.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class UserDetailsController : Controller
    {
        private readonly DataContext _context;
        public UserDetailsController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<UserDetails>>> getUsers()
        {
            return Ok(await _context.UserDetailss.ToListAsync());
        }

        [HttpPost]
        public async Task<ActionResult<List<UserDetails>>> CreateUser(UserDetails user)
        {
            _context.UserDetailss.Add(user);
            await _context.SaveChangesAsync();
            return Ok(await _context.UserDetailss.ToListAsync());
        }


        [HttpPut]
        public async Task<ActionResult<List<UserDetails>>> UpdateUser(UserDetails user)
        {
            var dbuser = await _context.UserDetailss.FindAsync(user.Id);
            if (dbuser == null)
            {
                return BadRequest("Hero not found");
            }
            dbuser.Id = user.Id;
            dbuser.UserName = user.UserName;
            dbuser.Email = user.Email;
            dbuser.Password = user.Password;
            dbuser.FirstName = user.FirstName;
            dbuser.LastName = user.LastName;
            dbuser.Email = user.Email;
            
            await _context.SaveChangesAsync();

            return (await _context.UserDetailss.ToListAsync());
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<UserDetails>>> DeleteUser(int id)
        {
            var dbuser = await _context.UserDetailss.FindAsync(id);
            if(dbuser == null)
            {
                return BadRequest("user not found");

            }

            _context.UserDetailss.Remove(dbuser);
            await _context.SaveChangesAsync();

            return Ok(await _context.UserDetailss.ToListAsync());
        }
       /* public IActionResult Index()
        {
            return View();
        }*/
    }
}
