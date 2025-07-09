import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { DatabaseModule } from 'src/database/database.module';
import { UsuarioProvider } from './providers/usuario.provider';

@Module({
  imports:[
    DatabaseModule
  ],
  controllers: [UsuarioController],
  providers: [
    UsuarioService,
    ...UsuarioProvider
  ],
  exports:[
    UsuarioService
  ]
})
export class UsuarioModule {}
