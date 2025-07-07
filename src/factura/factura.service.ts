import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateFacturaDto } from './dto/create-factura.dto';
import { UpdateFacturaDto } from './dto/update-factura.dto';
import { Repository } from 'typeorm';
import { Factura } from './entities/factura.entity';
import { Servicio } from 'src/servicio/entities/servicio.entity';

@Injectable()
export class FacturaService {

  constructor(
    @Inject('FACTURA_REPOSITORY')
    private facturaRepository: Repository<Factura>,
    @Inject('SERVICIO_REPOSITORY')
    private servicioRepository: Repository<Servicio>,
  ) { }

  async create(createFacturaDto: CreateFacturaDto) {
    try {
      const servicio = await this.servicioRepository.findOne({
        where: { idServicio: createFacturaDto.servicioId }
      });
      if (!servicio) {
        throw new NotFoundException('Servicio no encontrado');
      }
      const factura = this.facturaRepository.create({
        fechaEmision: createFacturaDto.fechaEmision,
        monto: createFacturaDto.monto,
        fechaPago: createFacturaDto.fechaPago ?? null,
        servicio: servicio,
      });
      return await this.facturaRepository.save(factura);
    } catch (error) {
      throw error;
    }
  }

  findAll() {
    try {
      return this.facturaRepository.find();
    } catch (error) {
      throw error
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} factura`;
  }

  async update(id: number) {
    try {
      // const { fechaPago } = updateFacturaDto;
      const factura = await this.facturaRepository.findOne({ where: { idFactura: id } });
      if (!factura) {
        throw new NotFoundException('Factura no encontrada');
      }
      // if (!fechaPago) {
      //   throw new NotFoundException('No existe fecha de pago')
      // }
      factura.fechaPago = new Date();
      return await this.facturaRepository.save(factura);
    } catch (error) {
      throw error;
    }
  }

  remove(id: number) {
    return `This action removes a #${id} factura`;
  }
}
