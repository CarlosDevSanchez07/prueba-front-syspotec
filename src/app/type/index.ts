export enum Status {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE"
}

export interface dataInput {
    _id?: string;
    description: string;
    breed?: any;
    status: Status;
    createdAt?: string;
}