import { Body, Controller, Get, Post, UseGuards, Request, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger/dist/decorators/api-bearer.decorator';
import { InvalidPassword } from 'src/application/useCases/errors/InvalidPassword';
import { UserNotFound } from 'src/application/useCases/errors/userNotFound';
import { CreateUser } from 'src/application/useCases/User/createUser';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/jwtAuth.guard';
import { AuthUserResponse, CreateUserDTO } from '../dtos/User/createUserDTO';
import { LoginDTO, LoginResponse } from '../dtos/User/loginDTO';
import { ApiResponse } from '@nestjs/swagger/dist/decorators/api-response.decorator';


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

    @ApiResponse({ type: LoginResponse })
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
    @ApiBearerAuth()
    @ApiResponse({ type: AuthUserResponse })
    @Get("auth")
    async authenticate(@Request() request: { user: { username: string, id: string } }) {
        return {
            user: request.user,
        }
    }

}
