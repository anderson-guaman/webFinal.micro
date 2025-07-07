import { IsDateString, IsNumber, IsOptional, IsInt } from "class-validator";

export class CreateFacturaDto {
  @IsDateString()
  fechaEmision: string;

  @IsNumber()
  monto: number;

  @IsOptional()
  @IsDateString()
  fechaPago?: string | null;

  @IsInt()
  servicioId: number;
}