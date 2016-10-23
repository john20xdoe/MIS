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
            export declare const DtrId: string;
            export declare const DtrDate: string;
            export declare const DtrEmployeeId: string;
            export declare const DtrIn: string;
            export declare const DtrOut: string;
            export declare const ShiftCode: string;
            export declare const InsertDate: string;
            export declare const InsertUserId: string;
            export declare const UpdateDate: string;
            export declare const UpdateUserId: string;
            export declare const IsActive: string;
        }

        ['DtrId', 'DtrDate', 'DtrEmployeeId', 'DtrIn', 'DtrOut', 'ShiftCode', 'InsertDate', 'InsertUserId', 'UpdateDate', 'UpdateUserId', 'IsActive'].forEach(x => (<any>Fields)[x] = x);
    }
}

