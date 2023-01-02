import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt/dist";
import { Login } from "src/application/useCases/Login/login";

@Injectable()
export class AuthService {
    constructor(
        private loginService: Login,
        private jwtService: JwtService
    ) { }

    async login(username: string, password: string) {
        const { user } = await this.loginService.execute({ username, password });
        const payload = {
            username: user.username,
            sub: user.id
        }

        return {
            access_token: this.jwtService.sign(payload),
        }
    }
}