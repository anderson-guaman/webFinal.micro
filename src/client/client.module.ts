import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { DatabaseModule } from 'src/database/database.module';
import { ClientProvider } from './providers/client.provider';

@Module({
  imports:[
    DatabaseModule
  ],
  controllers: [ClientController],
  providers: [
    ClientService,
    ...ClientProvider
  ],
  exports:[...ClientProvider]
})
export class ClientModule {}
