import { inMemoryUserRepository } from "../../../../test/repositories/inMemory/userRepository";
import { Login } from "./login";
import { UserNotFound } from "../errors/userNotFound";
import { InvalidPassword } from "../errors/InvalidPassword";
import { User } from "../../entities/User";
import { PasswordAuth } from "../../helpers/passwordAuth";
import { makeUser } from "../../../../test/factories/UserFactory";

describe("Login", () => {
    it("should be able to login", async () => {
        const userRepository = new inMemoryUserRepository();
        const login = new Login(userRepository);

        const newUser = await makeUser({
            username: "desafiosharenergy",
            password: "sh@r3n3rgy",
            id: "test-id",
        });

        await userRepository.create(newUser);

        const { user } = await login.execute({
            username: "desafiosharenergy",
            password: "sh@r3n3rgy",
        })

        expect(user).toBeTruthy();
    })

    it("should not be able to login using wrong username", async () => {
        const userRepository = new inMemoryUserRepository();
        const login = new Login(userRepository);

        const newUser = await makeUser({
            username: "desafiosharenergy",
            password: "sh@r3n3rgy",
            id: "test-id",
        });

        await userRepository.create(newUser);


        expect(() => {
            return login.execute({
                username: "sharenergy",
                password: "sh@r3n3rgy",
            })
        }).rejects.toThrow(UserNotFound);

    })

    it("should not be able to login using wrong password", async () => {
        const userRepository = new inMemoryUserRepository();
        const login = new Login(userRepository);

        const newUser = await makeUser({
            username: "desafiosharenergy",
            password: "sh@r3n3rgy",
            id: "test-id",
        });

        await userRepository.create(newUser);

        expect(() => {
            return login.execute({
                username: "desafiosharenergy",
                password: "shar3n3rgy",
            })
        }).rejects.toThrow(InvalidPassword);
    })

})