using System.ComponentModel.DataAnnotations;
using System.Security.Cryptography;
using System.Text;

namespace BasicUserCrud.Models
{
    public class User : Resource
    {
        [Required]
        public int Id { get; set; }
        [Required]
        [StringLength(100)]
        public string FirstName { get; set; }
        [Required]
        [StringLength(100)]
        public string LastName { get; set; }
        [Required]
        [StringLength(150)]
        [EmailAddress]
        public string Email { get; set; }
        [Required]
        [StringLength(50)]
        public string Password { get; set; }
        [StringLength(3)]
        [RegularExpression(@"^[0-9]*$")]
        public string CountryCode { get; set; }
        [StringLength(20)]
        [RegularExpression(@"^[0-9]*$")]
        public string Number { get; set; }
        [Required]
        [StringLength(100)]
        public string Role { get; set; }
        [Required]
        [StringLength(100)]
        public string Client { get; set; }
        [Required]
        public string IsActive { get; set; }

        public static string HasPassword(string password)
        {
            var sha = SHA256.Create();
            var hashedPassword = sha.ComputeHash(Encoding.Default.GetBytes(password));

            return Convert.ToBase64String(hashedPassword);
        }
    }
}
