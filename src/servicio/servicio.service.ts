import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateServicioDto } from './dto/create-servicio.dto';
import { UpdateServicioDto } from './dto/update-servicio.dto';
import { Repository } from 'typeorm';
import { Servicio } from './entities/servicio.entity';
import { Client } from 'src/client/entities/client.entity';

@Injectable()
export class ServicioService {

  constructor(
    @Inject('SERVICIO_REPOSITORY')
    private servicioRepository: Repository<Servicio>,
    @Inject('CLIENT_REPOSITORY')
    private clientRepository: Repository<Client>,
  ) { }
  
  async create(createServicioDto: CreateServicioDto) {
    try {
      const cliente = await this.clientRepository.findOne({
        where: { idCliente: createServicioDto.clienteId }
      });
      if (!cliente) {
        throw new NotFoundException('Cliente no encontrado');
      }
      const servicio = this.servicioRepository.create({
        nombre: createServicioDto.nombre,
        estado: createServicioDto.estado,
        cliente: cliente,
      });
      return await this.servicioRepository.save(servicio);
    } catch (error) {
      throw error;
    }
  }

  async findAll() {
    try {
      // return `This action returns all servicio`;
      return await this.servicioRepository.find()
    } catch (error) {
      throw error;
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} servicio`;
  }

  update(id: number, updateServicioDto: UpdateServicioDto) {
    return `This action updates a #${id} servicio`;
  }

  remove(id: number) {
    return `This action removes a #${id} servicio`;
  }
}
