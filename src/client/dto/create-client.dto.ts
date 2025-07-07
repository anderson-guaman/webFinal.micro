import { IsInt, IsString, Length } from "class-validator"

export class CreateClientDto {
     @IsInt()
    idCliente: number

    @IsString()
    nombre: string

    @IsString()
    direccion: string

    @IsString()
    @Length(10, 10)
    telefono: string

    @IsString()
    @Length(10, 10)
    identificacion: string

    @IsString()
    correo: string
}
