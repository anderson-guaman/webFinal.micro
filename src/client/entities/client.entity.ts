import { Servicio } from "src/servicio/entities/servicio.entity";
import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Client {
    @PrimaryGeneratedColumn()
    idCliente: number

    @Column({ length: 50 })
    nombre: string

    @Column({ type: 'varchar', length: 200 })
    direccion: string

    @Column({ type: 'varchar', length: 10 })
    telefono: string

    @Column({ type: 'varchar', length: 10, unique: true })
    identificacion: string

    @Column({ type: 'varchar', length: 100, unique: true })
    correo: string

    @OneToMany(
        () => Servicio, 
        servicio => servicio.cliente)
    servicios: Servicio[];
}
