import { Module } from '@nestjs/common';
import { ServicioService } from './servicio.service';
import { ServicioController } from './servicio.controller';
import { DatabaseModule } from 'src/database/database.module';
import { ServicioProvider } from './providers/servicio.provider';
import { ClientModule } from 'src/client/client.module';
import { PlanModule } from 'src/plan/plan.module';

@Module({
  imports:[
    DatabaseModule,
    ClientModule,
    PlanModule
  ],
  controllers: [ServicioController],
  providers: [
    ServicioService, 
    ...ServicioProvider
  ],
})
export class ServicioModule {}
