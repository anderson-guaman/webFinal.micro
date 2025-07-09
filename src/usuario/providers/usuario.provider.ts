
import { DataSource } from "typeorm";
import { Usuario } from "../entities/usuario.entity";
// import { Servicio } from "../entities/servicio.entity";

export const UsuarioProvider = [
    {
        provide:'USUARIO_REPOSITORY',
        useFactory: (dataSource:DataSource) => dataSource.getRepository(Usuario),
        inject: ['POSTGRES_SOURCE'],
    },
];