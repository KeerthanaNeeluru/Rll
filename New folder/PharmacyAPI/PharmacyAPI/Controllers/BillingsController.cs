using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PharmacyAPI.Context;
using PharmacyAPI.Models;

namespace PharmacyAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BillingsController : Controller
    {
        private readonly AppDbContext _context;
        public BillingsController(AppDbContext context)
        {
            _context = context;
        }
       
        [HttpGet]
        public async Task<ActionResult<List<Billing>>> getBills()
        {
            return Ok(await _context.Billings.ToListAsync());
        }
        [HttpPost]
        public async Task<ActionResult<List<Billing>>> CreateBill(Billing bill)
        {
            _context.Billings.Add(bill);
            await _context.SaveChangesAsync();
            return Ok(await _context.Billings.ToListAsync());
        }
        [HttpPut]
        public async Task<ActionResult<List<Billing>>> UpdateBills(Billing bill)
        {
            var dbbill = await _context.Billings.FindAsync(bill.OrderId);
            if (dbbill == null)
            {
                return BadRequest("Hero not found");
            }
            dbbill.OrderId = bill.OrderId;
            dbbill.Address = bill.Address;
            dbbill.Pincode = bill.Pincode;

            dbbill.PhoneNumber = bill.PhoneNumber;

            dbbill.Status = bill.Status;

            
            await _context.SaveChangesAsync();

            return (await _context.Billings.ToListAsync());
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Billing>>> DeleteProduct(int id)
        {
            var dbbill = await _context.Billings.FindAsync(id);
            if (dbbill == null)
            {
                return BadRequest("Order not found");

            }

            _context.Billings.Remove(dbbill);
            await _context.SaveChangesAsync();

            return Ok(await _context.Billings.ToListAsync());
        }
        /* public IActionResult Index()
         {
             return View();
         }*/
    }
}
