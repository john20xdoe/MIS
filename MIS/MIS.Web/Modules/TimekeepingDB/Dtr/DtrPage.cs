

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "TimekeepingDB/Dtr", typeof(MIS.TimekeepingDB.Pages.DtrController))]

namespace MIS.TimekeepingDB.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("TimekeepingDB/Dtr"), Route("{action=index}")]
    public class DtrController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/TimekeepingDB/Dtr/DtrIndex.cshtml");
        }
    }
}