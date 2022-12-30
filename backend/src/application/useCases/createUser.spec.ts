import { inMemoryUserRepository } from "../../../test/repositories/inMemory/userRepository";
import { CreateUser } from "./createUser"
import { PasswordAuth } from "../helpers/passwordAuth";

describe("Create User", ()=>{
    it("should be able to create an user", async ()=>{
        const userRepository = new inMemoryUserRepository();
        const createUser = new CreateUser(userRepository);

        const { user } = await createUser.execute({
            username: "desafiosharenergy",
            password: "sh@r3n3rgy",
        })

        const isPasswordValid = await PasswordAuth.compare("sh@r3n3rgy", user.password);

        expect(user).toHaveProperty("id");
        expect(user.password === "sh@r3n3rgy").toBeFalsy();
        expect(isPasswordValid).toBeTruthy();

    })
})