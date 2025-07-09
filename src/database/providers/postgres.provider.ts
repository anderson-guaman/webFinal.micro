

import { Client } from 'src/client/entities/client.entity';
import { Factura } from 'src/factura/entities/factura.entity';
import { Plan } from 'src/plan/entities/plan.entity';
import { Servicio } from 'src/servicio/entities/servicio.entity';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { DataSource } from 'typeorm';

export const PostgresProvider = [
  {
    provide: 'POSTGRES_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        ssl: process.env.STAGE === 'prod',
        extra: {
          ssl: process.env.STAGE === 'prod'
            ? { rejectUnauthorized: false }
            : null,
        },
        type: 'postgres',
        host: process.env.DB_HOST,
        port: +process.env.DB_PORT!,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        entities: [
          Client,
          Servicio,
          Plan,
          Factura,
          Usuario
        ],
        synchronize: process.env.STAGE == 'dev',
      });

      return dataSource.initialize();
    },
  },
  
];
