import { Body, Controller, Get, Post } from '@nestjs/common';
import { Login } from 'src/application/useCases/Login/login';
import { CreateUser } from 'src/application/useCases/User/createUser';
import { CreateUserDTO } from '../dtos/User/createUserDTO';
import { LoginDTO } from '../dtos/User/loginDTO';

@Controller("user")
export class UserController {
    constructor(
        private readonly createUser: CreateUser,
        private readonly login: Login,
    ) { }

    @Post()
    async create(@Body() user: CreateUserDTO) {
        await this.createUser.execute(user);
    }

    @Get("login")
    async loginUser(@Body() loginData: LoginDTO) {
        const { username, password } = loginData;
        const { user } = await this.login.execute({ username, password });

        return user;
    }

}
