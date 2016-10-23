
namespace MIS.TimekeepingDB.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("TimekeepingDB.Dtr")]
    [BasedOnRow(typeof(Entities.DtrRow))]
    public class DtrForm
    {
        public DateTime DtrDate { get; set; }
        public Int32 DtrEmployeeId { get; set; }
        public DateTime DtrIn { get; set; }
        public DateTime DtrOut { get; set; }
        public Int32 ShiftCode { get; set; }
        public DateTime InsertDate { get; set; }
        public Int32 InsertUserId { get; set; }
        public DateTime UpdateDate { get; set; }
        public Int32 UpdateUserId { get; set; }
        public Int16 IsActive { get; set; }
    }
}