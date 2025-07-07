import { IsInt, IsString } from "class-validator";

export class CreateServicioDto {
    @IsString()
    nombre: string;

    @IsString()
    estado: string;

    @IsInt()
    clienteId: number;

}
