using FluentMigrator;
using System;

namespace MIS.Migrations.TimekeepingDB
{
    [Migration(20160730115100)]
    public class TimekeepingDB_20160730_115100_DTRTable : Migration
    {
        public override void Up()
        {
            Create.Schema("timekeeping");

            Create.Table("DTR").InSchema("timekeeping")
                .WithColumn("DTRId").AsInt64()
                    .Identity().PrimaryKey().NotNullable()
                .WithColumn("DTR_Date").AsDate()
                    .NotNullable()
                .WithColumn("DTR_EmployeeId").AsInt32().NotNullable()
                .WithColumn("DTR_In").AsDateTime().Nullable()
                .WithColumn("DTR_Out").AsDateTime().Nullable()
                .WithColumn("ShiftCode").AsInt32().Nullable()
                
                .WithColumn("InsertDate").AsDateTime().NotNullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1);

            Create.Index("DTRDate_User").
                OnTable("DTR").InSchema("timekeeping")
                .OnColumn("DTR_Date").Descending()
                .OnColumn("DTR_EmployeeId").Ascending()
                    .WithOptions().Unique();
        }

        public override void Down()
        {

        }
    }
}