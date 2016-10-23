
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace MIS.TimekeepingDB {
    
    @Serenity.Decorators.registerClass()
    export class DtrEditor extends Common.GridEditorBase<DtrRow> {
        protected getColumnsKey() { return 'TimekeepingDB.Dtr'; }
        protected getDialogType() { return DtrEditorDialog; }
                protected getLocalTextPrefix() { return DtrRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}