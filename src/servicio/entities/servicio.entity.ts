import { Client } from "src/client/entities/client.entity";
import { Factura } from "src/factura/entities/factura.entity";
import { Plan } from "src/plan/entities/plan.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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
    
    @OneToMany(() => Factura, 
    factura => factura.servicio)
    facturas: Factura[];
}
