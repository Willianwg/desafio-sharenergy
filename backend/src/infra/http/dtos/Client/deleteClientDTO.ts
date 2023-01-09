import { ApiProperty } from "@nestjs/swagger/dist/decorators/api-property.decorator";
import { IsNotEmpty, IsUUID } from "class-validator";

export class DeleteClientDTO {
    @ApiProperty()
    @IsNotEmpty()
    @IsUUID()
    clientId: string;
}