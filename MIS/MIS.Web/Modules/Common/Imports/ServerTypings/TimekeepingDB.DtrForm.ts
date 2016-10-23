

namespace MIS.TimekeepingDB {
    export class DtrForm extends Serenity.PrefixedContext {
        static formKey = 'TimekeepingDB.Dtr';
    }

    export interface DtrForm {
        DtrDate: Serenity.DateEditor;
        DtrEmployeeId: Serenity.IntegerEditor;
        DtrIn: Serenity.DateEditor;
        DtrOut: Serenity.DateEditor;
        ShiftCode: Serenity.IntegerEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        IsActive: Serenity.IntegerEditor;
    }

    [['DtrId', () => Serenity.IntegerEditor], ['DtrDate', () => Serenity.DateEditor], ['DtrEmployeeId', () => Serenity.IntegerEditor], ['DtrIn', () => Serenity.DateEditor], ['DtrOut', () => Serenity.DateEditor], ['ShiftCode', () => Serenity.IntegerEditor], ['InsertDate', () => Serenity.DateEditor], ['InsertUserId', () => Serenity.IntegerEditor], ['UpdateDate', () => Serenity.DateEditor], ['UpdateUserId', () => Serenity.IntegerEditor], ['IsActive', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(DtrForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}