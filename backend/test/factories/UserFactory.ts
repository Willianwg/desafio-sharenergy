import { PasswordAuth } from "../../src/application/helpers/passwordAuth";
import { User } from "../../src/application/entities/User";

type TestUserProps = {
    username: string;
    password: string;
    id: string;
}

export async function makeUser(user: TestUserProps){
    const realPassword = user.password;
    const encryptedPassword = await PasswordAuth.encrypt(realPassword);

    return new User({
        username: user.username,
        password: encryptedPassword,
    }, "test-id");
}