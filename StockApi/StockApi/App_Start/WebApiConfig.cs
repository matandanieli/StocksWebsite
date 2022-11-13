using System.Web.Http;
using System.Web.Http.Cors;

namespace StockApi
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            string origin = "http://localhost:3000";
            EnableCorsAttribute cors = new EnableCorsAttribute(origin, "*", "GET");
            config.EnableCors(cors);

            // Web API configuration and services
            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{name}",
                defaults: new { name = RouteParameter.Optional }
            );
        }
    }
}
