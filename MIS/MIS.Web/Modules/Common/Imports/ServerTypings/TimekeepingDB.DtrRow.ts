
namespace MIS.TimekeepingDB {
    export interface DtrRow {
        DtrId?: number;
        DtrDate?: string;
        DtrEmployeeId?: number;
        DtrIn?: string;
        DtrOut?: string;
        ShiftCode?: number;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        IsActive?: number;
    }

    export namespace DtrRow {
        export const idProperty = 'DtrId';
        export const localTextPrefix = 'TimekeepingDB.Dtr';

        export namespace Fields {
            export declare const DtrId;
            export declare const DtrDate;
            export declare const DtrEmployeeId;
            export declare const DtrIn;
            export declare const DtrOut;
            export declare const ShiftCode;
            export declare const InsertDate;
            export declare const InsertUserId;
            export declare const UpdateDate;
            export declare const UpdateUserId;
            export declare const IsActive;
        }

        ['DtrId', 'DtrDate', 'DtrEmployeeId', 'DtrIn', 'DtrOut', 'ShiftCode', 'InsertDate', 'InsertUserId', 'UpdateDate', 'UpdateUserId', 'IsActive'].forEach(x => (<any>Fields)[x] = x);
    }
}

