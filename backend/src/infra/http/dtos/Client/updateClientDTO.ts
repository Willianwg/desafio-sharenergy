import { ApiProperty } from "@nestjs/swagger/dist/decorators/api-property.decorator";
import { IsOptional, IsString } from "class-validator";

export class UpdateClientDTO {
    @ApiProperty()
    @IsOptional()
    @IsString()
    name?: string | undefined;

    @ApiProperty()
    @IsOptional()
    @IsString()
    email?: string | undefined

    @ApiProperty()
    @IsOptional()
    @IsString()
    phone?: string | undefined

    @ApiProperty()
    @IsOptional()
    @IsString()
    document?: string | undefined

    @ApiProperty()
    @IsOptional()
    @IsString()
    address?: string | undefined;
}