import { Module } from '@nestjs/common';
import { PlanService } from './plan.service';
import { PlanController } from './plan.controller';
import { DatabaseModule } from 'src/database/database.module';
import { PlanProvider } from './providers/servicio.provider';

@Module({
  imports:[DatabaseModule],
  controllers: [PlanController],
  providers: [
    PlanService,
    ...PlanProvider
  ],
  exports:[...PlanProvider]
})
export class PlanModule {}
