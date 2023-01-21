import { Module } from '@nestjs/common';
import { ApplicationCoreModule } from '../application-core/application-core.module';
import { PatientController } from './controllers/patient.controller';
@Module({
  imports: [ApplicationCoreModule],
  controllers: [PatientController],
})
export class UserInterfaceModule {}
