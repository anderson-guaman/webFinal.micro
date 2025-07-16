import { IsDate, IsString } from 'class-validator';

export class IConsultaReporte{
    @IsString()
    fechaInicio: string;

    @IsString()
    fechaFin: string;
}