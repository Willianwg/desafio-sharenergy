import { CreateUser } from 'src/application/useCases/User/createUser';
import { AuthService } from 'src/auth/auth.service';
import { CreateUserDTO } from '../dtos/User/createUserDTO';
import { LoginDTO } from '../dtos/User/loginDTO';
export declare class UserController {
    private readonly createUser;
    private readonly authentication;
    constructor(createUser: CreateUser, authentication: AuthService);
    create(user: CreateUserDTO): Promise<void>;
    loginUser(loginData: LoginDTO): Promise<{
        access_token: string;
    }>;
    authenticate(request: {
        user: {
            username: string;
            id: string;
        };
    }): Promise<{
        user: {
            username: string;
            id: string;
        };
    }>;
}
