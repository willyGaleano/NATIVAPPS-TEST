import { Module } from '@nestjs/common';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';
import { CreatePatientInteractor } from './patients/use-cases/createPatient.interactor';

const services = [CreatePatientInteractor, InfrastructureModule];

@Module({
  imports: [InfrastructureModule],
  providers: services,
  exports: services,
})
export class ApplicationCoreModule {}
