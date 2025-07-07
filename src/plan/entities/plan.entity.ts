import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Servicio } from "../../servicio/entities/servicio.entity";

@Entity()
export class Plan {
    @PrimaryGeneratedColumn()
    idPlan: number;

    @Column({ length: 100 })
    nombrePlan: string;

    @Column("decimal", { precision: 10, scale: 2 })
    precioMensual: number;

    @Column({ type: 'text' })
    caracteristicas: string;

    @OneToMany(
        () => Servicio,
        servicio => servicio.plan,
        { nullable: false }
    )
    servicios: Servicio[];
}