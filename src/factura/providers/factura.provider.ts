
import { DataSource } from "typeorm";
import { Factura } from "../entities/factura.entity";




export const FacturaProvider = [
    {
        provide:'FACTURA_REPOSITORY',
        useFactory: (dataSource:DataSource) => dataSource.getRepository(Factura),
        inject: ['POSTGRES_SOURCE'],
    },
];