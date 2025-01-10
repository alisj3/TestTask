using System.ComponentModel.DataAnnotations;

namespace Backend.Models
{
    public class Products
    {
        [Key]
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int Price { get; set; }
    }
}
