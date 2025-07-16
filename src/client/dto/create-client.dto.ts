import { IsEmail, IsInt, IsNotEmpty, IsOptional, IsString, Length } from "class-validator"

export class CreateClientDto {
    @IsString()
    @IsNotEmpty({ message: 'El nombre es obligatorio' })
    @Length(2, 50, { message: 'El nombre debe tener entre 2 y 50 caracteres' })
    nombre: string;

    @IsString()
    @IsNotEmpty({ message: 'La dirección es obligatoria' })
    @Length(5, 100, { message: 'La dirección debe tener entre 5 y 100 caracteres' })
    direccion: string;

    @IsString()
    @IsNotEmpty({ message: 'El teléfono es obligatorio' })
    @Length(10, 10, { message: 'El teléfono debe tener exactamente 10 dígitos' })
    telefono: string;

    @IsString()
    @IsNotEmpty({ message: 'La identificación es obligatoria' })
    @Length(10, 10, { message: 'La identificación debe tener exactamente 10 dígitos' })
    identificacion: string;

    @IsString()
    @IsNotEmpty({ message: 'El correo es obligatorio' })
    @IsEmail({}, { message: 'El correo debe tener un formato válido' })
    correo: string;

    @IsOptional()
    fechaCreacion: Date
}
