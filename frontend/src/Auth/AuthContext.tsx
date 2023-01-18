import { createContext } from "react";

type AuthContextType = {
    user: { username: string } | null;
    login(username: string, password: string, remember?: boolean): Promise<void>;
}
export const AuthContext = createContext<AuthContextType>(null!);