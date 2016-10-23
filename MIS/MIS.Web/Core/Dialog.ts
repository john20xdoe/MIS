namespace MIS {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.maximizable()
    export class Dialog<TItem, TOptions> extends Serenity.EntityDialog<TItem, TOptions> {
        //protected getFormKey() { return ProductForm.formKey; }
        //protected getIdProperty() { return ProductRow.idProperty; }
        //protected getLocalTextPrefix() { return ProductRow.localTextPrefix; }
        //protected getNameProperty() { return ProductRow.nameProperty; }
        //protected getService() { return ProductService.baseUrl; }

        //protected form = new ProductForm(this.idPrefix);
        constructor() {
            super();
        }

        //protected afterLoadEntity(): void {
        //    super.afterLoadEntity();
        //    $('.vx label.error').attr('data-toggle', 'tooltip');
        //}
        
    }
}