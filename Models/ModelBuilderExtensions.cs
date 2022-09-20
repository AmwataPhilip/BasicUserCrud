using Microsoft.EntityFrameworkCore;

namespace BasicUserCrud.Models
{
    public static class ModelBuilderExtensions
    {
        public static void Seed(this ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().HasData(
                  new User
                  {
                      Id = 1,
                      FirstName = "Orville",
                      LastName = "Cheak",
                      Email = "ocheak0@nbcnews.com",
                      Client = "Riffpedia",
                      Role = "Construction Expeditor",
                      IsActive = "Disabled",
                      Mobile = new MobileNumber { CountryCode = "27", Number = "219 186 5149" }

                  },
                    new User
                    {
                        Id = 2,
                        FirstName = "Dee dee",
                        LastName = "Wooddisse",
                        Email = "dwooddisse1@gnu.org",
                        Client = "Vinder",
                        Role = "Supervisor",
                        IsActive = "Active",
                        Mobile = new MobileNumber { CountryCode = "354", Number = " 247 457 7892" }

                    },
                    new User
                    {
                        Id = 3,
                        FirstName = "Keelia",
                        LastName = "Martynov",
                        Email = "kmartynov2@shutterfly.com",
                        Client = "Thoughtstorm",
                        Role = "Architect",
                        IsActive = "Active",
                        Mobile = new MobileNumber { CountryCode = "55", Number = "677 538 1281" }

                    },
                    new User
                    {
                        Id = 4,
                        FirstName = "Maryann",
                        LastName = "Lamputt",
                        Email = "mlamputt3@mayoclinic.com",
                        Client = "Quinu",
                        Role = "Architect",
                        IsActive = "Disabled",
                        Mobile = new MobileNumber { CountryCode = "20", Number = "231 771 2006" }

                    },
                    new User
                    {
                        Id = 5,
                        FirstName = "Delmar",
                        LastName = "Adolf",
                        Email = "dadolf4@163.com",
                        Client = "Ntag",
                        Role = "Estimator",
                        IsActive = "Active",
                        Mobile = new MobileNumber { CountryCode = "7", Number = "630 691 7341" }

                    });
        }
    }
}
