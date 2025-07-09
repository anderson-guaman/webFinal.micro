import { Inject, Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuarioService {

  constructor(
    @Inject('USUARIO_REPOSITORY')
    private usuarioRepository: Repository<Usuario>
  ) { }

  async create(createUsuarioDto: CreateUsuarioDto) {
    try {
      const { username, password, role } = createUsuarioDto;
      const user = this.usuarioRepository.create({
        username,
        password,
        role
      })
      return await this.usuarioRepository.save(user);
    } catch (error) {
      throw error;
    }
  }

  findAll() {
    try {

      return `This action returns all usuario`;
    } catch (error) {
      throw error;
    }
  }

  findOne(id: number) {
    try {
      const user = this.usuarioRepository.findBy({ id: id })
      return user;
    } catch (error) {
      throw error;
    }
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `This action updates a #${id} usuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }

  async buscarPorNombreUsuario(username: string) {
    try {
      const user = await this.usuarioRepository.findOneBy({ username  })
      console.log(user)
      return user;
    } catch (error) {
      throw error;
    }
  }
}
