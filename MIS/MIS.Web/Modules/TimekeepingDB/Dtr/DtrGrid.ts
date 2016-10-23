
namespace MIS.TimekeepingDB {
    
    @Serenity.Decorators.registerClass()
    export class DtrGrid extends Serenity.EntityGrid<DtrRow, any> {
        protected getColumnsKey() { return 'TimekeepingDB.Dtr'; }
        protected getDialogType() { return DtrDialog; }
        protected getIdProperty() { return DtrRow.idProperty; }
        protected getLocalTextPrefix() { return DtrRow.localTextPrefix; }
        protected getService() { return DtrService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}