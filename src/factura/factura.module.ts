import { Module } from '@nestjs/common';
import { FacturaService } from './factura.service';
import { FacturaController } from './factura.controller';
import { DatabaseModule } from 'src/database/database.module';
import { ServicioModule } from 'src/servicio/servicio.module';
import { FacturaProvider } from './providers/factura.provider';

@Module({
  imports:[
    DatabaseModule,
    ServicioModule
  ],
  controllers: [FacturaController],
  providers: [
    FacturaService,
    ...FacturaProvider
  ],
})
export class FacturaModule {}
