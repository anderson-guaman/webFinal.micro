import { Client } from "src/client/entities/client.entity";
import { Plan } from "src/plan/entities/plan.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Servicio {
    @PrimaryGeneratedColumn()
    idServicio: number;

    @Column({ length: 100 })
    nombre: string;

    @Column({ length: 20 })
    estado: string;

    @ManyToOne(
        () => Client, client => client.servicios,
        { eager: true }
    )
    cliente: Client;

    @ManyToOne(
        () => Plan, 
        plan => plan.servicios, 
        { eager: true }
    )
    plan: Plan;
}
