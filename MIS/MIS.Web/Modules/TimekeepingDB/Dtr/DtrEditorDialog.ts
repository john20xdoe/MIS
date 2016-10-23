
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace MIS.TimekeepingDB {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class DtrEditorDialog extends Common.GridEditorDialog<DtrRow> {
        protected getFormKey() { return DtrForm.formKey; }
                protected getLocalTextPrefix() { return DtrRow.localTextPrefix; }
        protected form = new DtrForm(this.idPrefix);
    }
}