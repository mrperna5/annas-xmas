export interface Secret {
    id: number;
    password: string;
    inputPass: string;
    message: string;
    validPassword?: boolean;
    passwordCounter: number;
}