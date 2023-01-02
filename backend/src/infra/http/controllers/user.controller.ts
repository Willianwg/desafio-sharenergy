import { Body, Controller, Get, Post } from '@nestjs/common';
import { Login } from 'src/application/useCases/Login/login';
import { CreateUser } from 'src/application/useCases/User/createUser';
import { AuthService } from 'src/auth/auth.service';
import { CreateUserDTO } from '../dtos/User/createUserDTO';
import { LoginDTO } from '../dtos/User/loginDTO';

@Controller("user")
export class UserController {
    constructor(
        private readonly createUser: CreateUser,
        private readonly authentication: AuthService,
    ) { }

    @Post()
    async create(@Body() user: CreateUserDTO) {
        await this.createUser.execute(user);
    }

    @Post("login")
    async loginUser(@Body() loginData: LoginDTO) {
        const { username, password } = loginData;
        const { access_token } = await this.authentication.login( username, password );

        return {
            access_token
        };
    }

}
