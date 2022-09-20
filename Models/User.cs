using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;

namespace BasicUserCrud.Models
{
    public class User : Resource
    {
        public int Id { get; set; }
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public MobileNumber Mobile { get; set; } = new MobileNumber { CountryCode = "", Number =""};
        public string Role { get; set; } = string.Empty;
        public string Client { get; set; } = string.Empty;
        public string IsActive { get; set; } = string.Empty;
    }

    [Keyless, NotMapped]
    public class MobileNumber
    {
        public string CountryCode { get; set; } = string.Empty;
        public string Number { get; set; } = string.Empty;
    }
}
