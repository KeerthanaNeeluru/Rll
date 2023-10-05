using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UserDetailsApi.Data;
using UserDetailsApi.Models;

namespace UserDetailsApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductDetailsController : Controller
    {
        private readonly DataContext _context;
        public ProductDetailsController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<ProductDetails>>> getProduct()
        {
            return Ok(await _context.ProductDetailss.ToListAsync());
        }


        [HttpPost]
        public async Task<ActionResult<List<ProductDetails>>> CreateProduct(ProductDetails prod)
        {
            _context.ProductDetailss.Add(prod);
            await _context.SaveChangesAsync();
            return Ok(await _context.ProductDetailss.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<List<ProductDetails>>> UpdateProduct(ProductDetails prod)
        {
            var dbprod = await _context.ProductDetailss.FindAsync(prod.ProductId);
            if (dbprod == null)
            {
                return BadRequest("Product not found");
            }
            dbprod.ProductId = prod.ProductId;
            dbprod.ProductUrl = prod.ProductUrl;
            dbprod.ProductName = prod.ProductName;

            dbprod.ProductDescription = prod.ProductDescription;

            dbprod.ProductInStock = prod.ProductInStock;

            dbprod.ProductPrice = prod.ProductPrice;
            await _context.SaveChangesAsync();

            return (await _context.ProductDetailss.ToListAsync());
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<ProductDetails>>> DeleteProduct(int id)
        {
            var dbprod = await _context.ProductDetailss.FindAsync(id);
            if (dbprod == null)
            {
                return BadRequest("Product not found");

            }

            _context.ProductDetailss.Remove(dbprod);
            await _context.SaveChangesAsync();

            return Ok(await _context.ProductDetailss.ToListAsync());
        }


        /* public IActionResult Index()
         {
             return View();
         }*/
    }
}
