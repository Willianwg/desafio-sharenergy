export declare class PasswordAuth {
    static compare(usedPassword: string, savedPassword: string): Promise<boolean>;
    static encrypt(password: string): Promise<string>;
}
