
import { DataSource } from "typeorm";
import { Servicio } from "../entities/servicio.entity";



export const ServicioProvider = [
    {
        provide:'SERVICIO_REPOSITORY',
        useFactory: (dataSource:DataSource) => dataSource.getRepository(Servicio),
        inject: ['POSTGRES_SOURCE'],
    },
];