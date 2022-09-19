namespace BasicUserCrud.Models
{
    public class User : Resource
    {
        public int Id { get; set; }
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string PhoneNumber { get; set; } = string.Empty;
        public string Role { get; set; } = string.Empty;
        public string Client { get; set; } = string.Empty;
        public bool IsActive { get; set; } = true;

    }
}
