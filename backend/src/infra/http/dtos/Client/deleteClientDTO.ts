import { IsNotEmpty, IsUUID } from "class-validator";

export class DeleteClientDTO {
    @IsNotEmpty()
    @IsUUID()
    clientId: string;
}