import { Module } from '@nestjs/common';
import { ServicioService } from './servicio.service';
import { ServicioController } from './servicio.controller';
import { DatabaseModule } from 'src/database/database.module';
import { ServicioProvider } from './providers/servicio.provider';
import { ClientModule } from 'src/client/client.module';

@Module({
  imports:[
    DatabaseModule,
    ClientModule
  ],
  controllers: [ServicioController],
  providers: [
    ServicioService, 
    ...ServicioProvider
  ],
})
export class ServicioModule {}
