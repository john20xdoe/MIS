
namespace MIS.TimekeepingDB {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class DtrDialog extends Serenity.EntityDialog<DtrRow, any> {
        protected getFormKey() { return DtrForm.formKey; }
        protected getIdProperty() { return DtrRow.idProperty; }
        protected getLocalTextPrefix() { return DtrRow.localTextPrefix; }
        protected getService() { return DtrService.baseUrl; }

        protected form = new DtrForm(this.idPrefix);
    }
}