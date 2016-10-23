
namespace MIS.Common
{
    public class DashboardPageModel : LandingPageBase
    {
        public int OpenOrders { get; set; }
        public int ClosedOrderPercent { get; set; }
        public int CustomerCount { get; set; }
        public int ProductCount { get; set; }
    }
}