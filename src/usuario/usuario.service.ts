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
      const { userName, password, role } = createUsuarioDto;
      const user = this.usuarioRepository.create({
        username:userName,
        password,
        role
      })
      return await this.usuarioRepository.save(user);
    } catch (error) {
      throw error;
    }
  }

  async findAll() {
    try {
    const usuario = await this.usuarioRepository.find();
    return usuario.map((u)=>{
      return {
        userName: u.username,
        role: u.role,
      }
    })
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
