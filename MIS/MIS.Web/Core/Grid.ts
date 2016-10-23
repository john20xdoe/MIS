namespace MIS {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class Grid<TItem, TOptions> extends Serenity.EntityGrid<TItem, TOptions> {       
        constructor(container: JQuery) {
            super(container);
        }
        //protected getColumnsKey() { return "Northwind.Product"; }
        //protected getDialogType() { return <any>ProductDialog; }
        //protected getIdProperty() { return ProductRow.idProperty; }
        //protected getLocalTextPrefix() { return ProductRow.localTextPrefix; }
        //protected getService() { return ProductService.baseUrl; }


        //constructor(container: JQuery, options?: TOptions);
        //protected addButtonClick(): void;
        //protected createEntityDialog(itemType: string, callback?: (dlg: Widget<any>) => void): Widget<any>;
        //protected getDialogOptions(): any;
        //protected getDialogOptionsFor(itemType: string): any;
        //protected getDialogType(): {
        //    new (...args: any[]): Widget<any>;
        //};
        //protected getDialogTypeFor(itemType: string): {
        //    new (...args: any[]): Widget<any>;
        //};
        //protected getDisplayName(): string;
        //protected getItemName(): string;
        //protected getEntityType(): string;
        //protected getService(): string;
        //protected initDialog(dialog: Widget<any>): void;
        //protected initEntityDialog(itemType: string, dialog: Widget<any>): void;
        //protected newRefreshButton(noText?: boolean): ToolButton;
   }
}