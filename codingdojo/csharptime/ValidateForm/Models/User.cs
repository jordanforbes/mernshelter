using System.ComponentModel.DataAnnotations;

namespace ValidateForm.Models
{
    public class User
    {
        [Required]       
        [MinLength(1, ErrorMessage="First Name must not be blank")]
        public string FirstName {get;set;}
        
        [Required]     
        [MinLength(1, ErrorMessage="Last Name must be not blank")]
        public string LastName {get;set;}

        [Required]
        [Range(0,100)]
        public int Age {get;set;}

        [Required]
        [MinLength(7, ErrorMessage="password must be 7 characters")]
        public string Password {get;set;} 
    }
}   