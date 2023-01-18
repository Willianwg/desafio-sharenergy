import { JwtService } from "@nestjs/jwt/dist";
import { Login } from "src/application/useCases/Login/login";
export declare class AuthService {
    private loginService;
    private jwtService;
    constructor(loginService: Login, jwtService: JwtService);
    login(username: string, password: string): Promise<{
        access_token: string;
    }>;
}
