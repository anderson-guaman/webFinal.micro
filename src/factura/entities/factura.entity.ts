import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Servicio } from "../../servicio/entities/servicio.entity";

@Entity()
export class Factura {
  @PrimaryGeneratedColumn()
  idFactura: number;

  @Column({ type: 'date' })
  fechaEmision: Date;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  monto: number;

  @Column({ type: 'date', nullable: true })
  fechaPago: Date | null;

  @ManyToOne(
    () => Servicio, 
    servicio => servicio.facturas, 
    { nullable: false,eager: true  })
  servicio: Servicio;
}