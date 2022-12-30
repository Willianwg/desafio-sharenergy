import { inMemoryUserRepository } from "../../../test/repositories/inMemory/userRepository";
import { CreateUser } from "./createUser"

describe("Create User", ()=>{
    it("should be able to create an user", async ()=>{
        const userRepository = new inMemoryUserRepository();
        const createUser = new CreateUser(userRepository);

        const { user } = await createUser.execute({
            username: "desafiosharenergy",
            password: "sh@r3n3rgy",
        })

        expect(user).toHaveProperty("id");
        expect(userRepository.users[0].password).toEqual("sh@r3n3rgy");
    })
})