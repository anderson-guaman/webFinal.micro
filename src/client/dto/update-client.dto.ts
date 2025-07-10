import { PartialType } from '@nestjs/mapped-types';
import { CreateClientDto } from './create-client.dto';
import { IsInt } from 'class-validator';

export class UpdateClientDto extends PartialType(CreateClientDto) {
    @IsInt()
    idCliente: number;
}
