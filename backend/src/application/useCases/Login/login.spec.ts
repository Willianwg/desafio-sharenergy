import { inMemoryUserRepository } from "../../../../test/repositories/inMemory/userRepository";
import { CreateUser } from "../User/createUser"
import { Login } from "./login";
import { UserNotFound } from "../errors/userNotFound";
import { InvalidPassword } from "../errors/InvalidPassword";
import { User } from "../../entities/User";
import { PasswordAuth } from "../../helpers/passwordAuth";

describe("Login", () => {
    it("should be able to login", async () => {
        const userRepository = new inMemoryUserRepository();
        const createUser = new CreateUser(userRepository);
        const login = new Login(userRepository);

        const realPassword = "sh@r3n3rgy";
        const encryptedPassword = await PasswordAuth.encrypt(realPassword);

        const newUser = new User({
            username: "desafiosharenergy",
            password: encryptedPassword,
        }, "test-id");

        await userRepository.create(newUser);

        const { user } = await login.execute({
            username: "desafiosharenergy",
            password: "sh@r3n3rgy",
        })

        expect(user).toBeTruthy();
    })

    it("should not be able to login using wrong username", async () => {
        const userRepository = new inMemoryUserRepository();
        const createUser = new CreateUser(userRepository);
        const login = new Login(userRepository);

        await createUser.execute({
            username: "desafiosharenergy",
            password: "sh@r3n3rgy",
        })


        expect(() => {
            return login.execute({
                username: "sharenergy",
                password: "sh@r3n3rgy",
            })
        }).rejects.toThrow(UserNotFound);

    })

    it("should not be able to login using wrong password", async () => {
        const userRepository = new inMemoryUserRepository();
        const createUser = new CreateUser(userRepository);
        const login = new Login(userRepository);

        await createUser.execute({
            username: "desafiosharenergy",
            password: "sh@r3n3rgy",
        })

        expect(() => {
            return login.execute({
                username: "desafiosharenergy",
                password: "shar3n3rgy",
            })
        }).rejects.toThrow(InvalidPassword);
    })

})