using Microsoft.AspNetCore.Mvc;

namespace Walawren_Grappnel_Website.Controllers
{
    [Route("api/[controller]")]
    public class AuthenticationController : Controller
    {
        [HttpGet("[action]")]
        public AuthConfig Config(){
            return new AuthConfig
            {
                Issuer = "https://dev-522314.oktapreview.com/oauth2/auseltor5uXFhRfVk0h7",
                Url = "https://dev-522314.oktapreview.com",
                redirect_uri = "http://localhost:5000/implicit/callback",
                client_id = "0oaeao1do8N2qYPUP0h7"
            };
        }
    }

    public class AuthConfig
    {
        public string Issuer { get; set; }
        public string Url { get; set; }
        public string redirect_uri { get; set; }
        public string client_id { get; set; }
    }
}
