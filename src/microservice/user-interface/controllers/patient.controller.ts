import {
  BadRequestException,
  Body,
  Controller,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreatePatientInteractor } from '../../application-core/patients/use-cases/createPatient.interactor';
import { PatientDTO } from '../../infrastructure/persistence/dto/index';
import { UniquePatientInterceptor } from '../interceptors/uniquePatient.interceptor';

@ApiTags('Patients')
@Controller('patient')
export class PatientController {
  constructor(
    private readonly createPatientInteractor: CreatePatientInteractor,
  ) {}

  @Post('create')
  @UseInterceptors(UniquePatientInterceptor)
  async createPatient(@Body() body: PatientDTO): Promise<any> {
    const response = await this.createPatientInteractor.execute(body);

    if (response.error) {
      throw new BadRequestException(response);
    }
    return response;
  }
}
