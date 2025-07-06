import { Module } from '@nestjs/common';
// import { DatabaseService } from './database.service';
// import { DatabaseController } from './database.controller';
import { PostgresProvider } from './providers/postgres.provider';

@Module({
  controllers: [],
  providers: [
    ...PostgresProvider
  ],
  exports: [...PostgresProvider],
})
export class DatabaseModule {}
