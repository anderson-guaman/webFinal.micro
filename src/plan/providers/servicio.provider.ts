
import { DataSource } from "typeorm";
import { Plan } from '../entities/plan.entity';

export const PlanProvider = [
    {
        provide:'PLAN_REPOSITORY',
        useFactory: (dataSource:DataSource) => dataSource.getRepository(Plan),
        inject: ['POSTGRES_SOURCE'],
    },
];