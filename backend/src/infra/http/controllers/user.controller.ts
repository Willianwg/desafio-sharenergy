import { Body, Controller, Get, Post, UseGuards, Request, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InvalidPassword } from 'src/application/useCases/errors/InvalidPassword';
import { UserNotFound } from 'src/application/useCases/errors/userNotFound';
import { CreateUser } from 'src/application/useCases/User/createUser';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/jwtAuth.guard';
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
        try {
            const { username, password } = loginData;
            const { access_token } = await this.authentication.login(username, password);

            return {
                access_token
            };
        } catch (err: any) {
            if (err.message === new UserNotFound().message) {
                throw new NotFoundException();
            } else if (err.message === new InvalidPassword().message) {
                throw new UnauthorizedException();
            }
        }
    }

    @UseGuards(JwtAuthGuard)
    @Get("auth")
    async authenticate(@Request() request: { user: { username: string, id: string } }) {
        return {
            user: request.user,
        }
    }

}
