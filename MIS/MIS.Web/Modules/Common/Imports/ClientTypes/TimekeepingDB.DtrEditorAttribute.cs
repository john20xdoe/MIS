using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace MIS.TimekeepingDB
{
    public partial class DtrEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "MIS.TimekeepingDB.DtrEditor";

        public DtrEditorAttribute()
            : base(Key)
        {
        }
    }
}

