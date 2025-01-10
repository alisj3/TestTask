using Backend.Data;
using Backend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly BackendDbContext _dbContext;

        public ProductsController(BackendDbContext dbContext)
        {
            this._dbContext = dbContext;
        }

        [HttpPost]
        public async Task<IActionResult> CreateProduct(Products product)
        {
            if (product == null)
                return BadRequest("Product cannot be null");

            product.Id = Guid.NewGuid();

            _dbContext.Products.Add(product);
            await _dbContext.SaveChangesAsync();

            return CreatedAtAction(nameof(GetProductById), new { id = product.Id }, product);
        }

        
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Products>>> GetProducts()
        {
            return await _dbContext.Products.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Products>> GetProductById(Guid id)
        {
            var product = await _dbContext.Products.FindAsync(id);

            if (product == null)
                return NotFound();

            return product;
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateProduct(Guid id, Products product)
        {
            if (id != product.Id)
                return BadRequest("Product ID mismatch");

            _dbContext.Entry(product).State = EntityState.Modified;

            try
            {
                await _dbContext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductExists(id))
                    return NotFound();
                else
                    throw;
            }

            return NoContent();
        }

        // **DELETE**: Delete product by ID
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProduct(Guid id)
        {
            var product = await _dbContext.Products.FindAsync(id);
            if (product == null)
                return NotFound();

            _dbContext.Products.Remove(product);
            await _dbContext.SaveChangesAsync();

            return NoContent();
        }

        // Helper method to check if product exists
        private bool ProductExists(Guid id)
        {
            return _dbContext.Products.Any(e => e.Id == id);
        }
    }
}