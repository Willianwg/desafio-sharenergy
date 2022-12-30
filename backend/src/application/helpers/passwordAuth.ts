import * as bcrypt from "bcryptjs";

export class PasswordAuth {
    static async compare(usedPassword: string, savedPassword: string) {
        const isValid = await bcrypt.compare(usedPassword, savedPassword);
        
        return isValid;
    }
}