import { Body, Controller, Get, Post } from '@nestjs/common';
import { Login } from 'src/application/useCases/Login/login';
import { CreateUser } from 'src/application/useCases/User/createUser';

@Controller("user")
export class AppController {
    constructor(
        private readonly createUser: CreateUser,
        private readonly login: Login,
    ) { }

    @Post()
    async create(@Body() user: { username: string, password: string }) {
        await this.createUser.execute(user);
    }

    @Get()
    async loginUser(@Body() user: { username: string, password: string }) {
        const { username, password } = user;
        await this.login.execute({ username, password });
    }

}
