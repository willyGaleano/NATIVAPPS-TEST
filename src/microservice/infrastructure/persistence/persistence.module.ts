import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Patient } from './entities/patient.entity';
import { PatientsGateway } from './gateways/patients.gateway';
const services = [PatientsGateway];

@Module({
  imports: [SequelizeModule.forFeature([Patient])],
  providers: services,
  exports: services,
})
export class PersistenceModule {}
