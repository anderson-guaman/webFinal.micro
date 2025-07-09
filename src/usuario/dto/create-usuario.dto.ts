import { IsIn, IsNotEmpty, IsString } from "class-validator";

export class CreateUsuarioDto {
    @IsString()
    @IsNotEmpty()
    username: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsIn(['admin', 'user'])  // limita a roles válidos
    role: string;
}
