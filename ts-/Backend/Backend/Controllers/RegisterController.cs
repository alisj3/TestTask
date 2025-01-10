using Backend.Data;
using Backend.Models;
using Backend.Requests;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.AspNetCore.Identity.Data;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegisterController : ControllerBase
    {
        private readonly BackendDbContext dbContext;

        public RegisterController(BackendDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] Users model)
        {
            if (ModelState.IsValid)
            {
                var existingUser = await dbContext.Users
                    .FirstOrDefaultAsync(u => u.Email == model.Email || u.Phone == model.Phone);

                if (existingUser != null)
                    return BadRequest("User with this email or phone already exists.");

                var hashedPassword = BCrypt.Net.BCrypt.HashPassword(model.Password);
                var user = new Users
                {
                    Id = Guid.NewGuid(),
                    Email = model.Email,
                    Phone = model.Phone,
                    FirstName = model.FirstName,
                    LastName = model.LastName,
                    Password = hashedPassword
                };

                dbContext.Users.Add(user);
                await dbContext.SaveChangesAsync();

                return Ok(new
                {
                    message = "Registration successful",
                    token = GenerateJwtToken(user.Id)
                });

            }

            return BadRequest("Invalid registration data.");
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] Requests.LoginRequest model)
        {
            var user = await dbContext.Users
                .FirstOrDefaultAsync(u => u.Email == model.Email);

            if (user == null || !BCrypt.Net.BCrypt.Verify(model.Password, user.Password))
                return Unauthorized("Invalid email or password.");

            var token = GenerateJwtToken(user.Id);
            return Ok(new { token });
        }


        [HttpGet("profile")]
        public async Task<IActionResult> GetProfile()
        {
            var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            if (userId == null)
                return Unauthorized("Not authenticated.");

            var user = await dbContext.Users
                .FirstOrDefaultAsync(u => u.Id.ToString() == userId);

            if (user == null)
                return NotFound("User not found.");

            return Ok(new
            {
                Email = user.Email,
                Phone = user.Phone,
                FirstName = user.FirstName,
                LastName = user.LastName
            });
        }


        private string GenerateJwtToken(Guid userId)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.UTF8.GetBytes("XyCttswTx_XpAaIKyoWN_Ya3MSFGusPkWmdoU9eN7wg");
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[]
                {
            new Claim(ClaimTypes.NameIdentifier, userId.ToString())
        }),
                Expires = DateTime.UtcNow.AddHours(1),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }


    }
}
