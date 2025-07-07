import { IsString, IsNumber } from "class-validator";

export class CreatePlanDto {
  @IsString()
  nombrePlan: string;

  @IsNumber()
  precioMensual: number;

  @IsString()
  caracteristicas: string;
}