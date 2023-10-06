using System.ComponentModel.DataAnnotations;

namespace PharmacyAPI.Models
{
    public class Billing
    {
        [Key]
        public int OrderId {  get; set; }
        [Required]
        public string Address {  get; set; }
        [Required]
        public string Pincode {  get; set; }
        [Required]
        public string PhoneNumber { get; set; } = string.Empty;
        public string Status { get; set; } = "Not Delivered";
        

    }
}
