import { PartialType } from '@nestjs/mapped-types';
import { IsDateString } from 'class-validator';


export class UpdateFacturaDto {
    @IsDateString()
    fechaPago: Date;
}
