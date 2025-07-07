import { Inject, Injectable } from '@nestjs/common';
import { CreatePlanDto } from './dto/create-plan.dto';
import { UpdatePlanDto } from './dto/update-plan.dto';
import { Repository } from 'typeorm';
import { Plan } from './entities/plan.entity';

@Injectable()
export class PlanService {
  constructor(
    @Inject('PLAN_REPOSITORY')
    private planRepository: Repository<Plan>,
  ){}

  async create(createPlanDto: CreatePlanDto) {
    try {
      const plan = this.planRepository.create(createPlanDto);
      return await this.planRepository.save(plan);
    } catch (error) {
      throw error;
    }
  }

  findAll() {
    try {
      return this.planRepository.find();
    } catch (error) {
      throw error;
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} plan`;
  }

  update(id: number, updatePlanDto: UpdatePlanDto) {
    return `This action updates a #${id} plan`;
  }

  remove(id: number) {
    return `This action removes a #${id} plan`;
  }
}
