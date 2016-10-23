
using System.Collections.Generic;

namespace MIS.Common
{
    public abstract class LandingPageBase
    {
        public ContextSidebarModel ContextSidebar { get; set; }
    }


    /// <summary>
    /// This class is a ViewModel for data to be shown in the right-side sidebar. It only contains a title and a content container (containing a List of string).
    /// To use, just populate the two properties.</para>
    /// <para>
    /// Don't forget to put the line <code>@{Html.RenderPartial(MVC.Views.Common.ContextSidebar.SidebarPartial,Model.ContextSidebar); }</code> in your razor View.
    /// </para>
    /// </summary>
    public class ContextSidebarModel
    {
        public string SidebarTitle { get; set; }
        /// <summary>
        /// You can use some basic HTML code here as this area is rendered using ASP MVC Razor's @Html.Raw() function
        /// </summary>
        public List<string> SidebarContent { get; set; }
        //TODO Add generics to support any content type, like IEnumerable for hitory or ust plain text for other modules?

        public ContextSidebarModel()
        {
            this.SidebarTitle = Texts.Site.ContextSidebar.DefaultTitle;
            this.SidebarContent = new List<string>() { Texts.Site.ContextSidebar.DefaultContent };
        }
    }
}