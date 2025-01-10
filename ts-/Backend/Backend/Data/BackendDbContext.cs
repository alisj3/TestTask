using Backend.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace Backend.Data
{
    public class BackendDbContext : DbContext
    {
        public BackendDbContext(DbContextOptions dbContextOptions) : base(dbContextOptions)
        {

        }

        public DbSet<Products> Products { get; set; }
        public DbSet<Users> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            var products = new List<Products> 
            {
                new Products
                {
                    Id = Guid.Parse("e490797e-5f04-494d-a0af-81a3394f27af"),
                    Name = "Soap",
                    Description = "Very dense and accurate soap that will take care of your skin.",
                    Price = 500
                },

                new Products
                {
                    Id = Guid.Parse("59544af9-6b65-4eba-b439-41aca82cd090"),
                    Name = "Wooden Table",
                    Description = "Very dense and accurate table that will take care of your things.",
                    Price = 1000
                },
            };

            modelBuilder.Entity<Products>().HasData(products);
        }
    }
}
