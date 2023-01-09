import { ApiProperty } from "@nestjs/swagger/dist/decorators/api-property.decorator";

export class UpdateClientDTO {
    @ApiProperty()
    name?: string;

    @ApiProperty()
    email?: string;

    @ApiProperty()
    phone?: string;

    @ApiProperty()
    document?: string;

    @ApiProperty()
    address?: string;
}