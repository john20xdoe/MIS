

namespace MIS.TimekeepingDB.Entities
{
    using Newtonsoft.Json;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Timekeeping"), DisplayName("DTR"), InstanceName("DTR"), TwoLevelCached]
    [ReadPermission("Administration")]
    [ModifyPermission("Administration")]
    public sealed class DtrRow : Row, IIdRow
    {
        [DisplayName("Dtr Id"), Column("DTRId"), Identity]
        public Int64? DtrId
        {
            get { return Fields.DtrId[this]; }
            set { Fields.DtrId[this] = value; }
        }

        [DisplayName("Dtr Date"), Column("DTR_Date"), NotNull]
        public DateTime? DtrDate
        {
            get { return Fields.DtrDate[this]; }
            set { Fields.DtrDate[this] = value; }
        }

        [DisplayName("Dtr Employee Id"), Column("DTR_EmployeeId"), NotNull]
        public Int32? DtrEmployeeId
        {
            get { return Fields.DtrEmployeeId[this]; }
            set { Fields.DtrEmployeeId[this] = value; }
        }

        [DisplayName("Dtr In"), Column("DTR_In")]
        public DateTime? DtrIn
        {
            get { return Fields.DtrIn[this]; }
            set { Fields.DtrIn[this] = value; }
        }

        [DisplayName("Dtr Out"), Column("DTR_Out")]
        public DateTime? DtrOut
        {
            get { return Fields.DtrOut[this]; }
            set { Fields.DtrOut[this] = value; }
        }

        [DisplayName("Shift Code")]
        public Int32? ShiftCode
        {
            get { return Fields.ShiftCode[this]; }
            set { Fields.ShiftCode[this] = value; }
        }

        [DisplayName("Insert Date"), NotNull]
        public DateTime? InsertDate
        {
            get { return Fields.InsertDate[this]; }
            set { Fields.InsertDate[this] = value; }
        }

        [DisplayName("Insert User Id"), NotNull]
        public Int32? InsertUserId
        {
            get { return Fields.InsertUserId[this]; }
            set { Fields.InsertUserId[this] = value; }
        }

        [DisplayName("Update Date")]
        public DateTime? UpdateDate
        {
            get { return Fields.UpdateDate[this]; }
            set { Fields.UpdateDate[this] = value; }
        }

        [DisplayName("Update User Id")]
        public Int32? UpdateUserId
        {
            get { return Fields.UpdateUserId[this]; }
            set { Fields.UpdateUserId[this] = value; }
        }

        [DisplayName("Is Active"), NotNull]
        public Int16? IsActive
        {
            get { return Fields.IsActive[this]; }
            set { Fields.IsActive[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.DtrId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public DtrRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field DtrId;
            public DateTimeField DtrDate;
            public Int32Field DtrEmployeeId;
            public DateTimeField DtrIn;
            public DateTimeField DtrOut;
            public Int32Field ShiftCode;
            public DateTimeField InsertDate;
            public Int32Field InsertUserId;
            public DateTimeField UpdateDate;
            public Int32Field UpdateUserId;
            public Int16Field IsActive;

            public RowFields()
                : base("[timekeeping].[DTR]")
            {
                LocalTextPrefix = "TimekeepingDB.Dtr";
            }
        }
    }
}