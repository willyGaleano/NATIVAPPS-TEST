import { Injectable, HttpStatus } from '@nestjs/common';
import { PatientsGateway } from '../../../infrastructure/persistence/gateways/patients.gateway';
import { ResponseDTO } from '../dto/index';
import { PatientDTO } from '../../../infrastructure/persistence/dto/index';

@Injectable()
export class CreatePatientInteractor {
  constructor(private readonly cardGateway: PatientsGateway) {}

  async execute(patient: PatientDTO): Promise<ResponseDTO<PatientDTO>> {
    try {
      const patientCreated = await this.cardGateway.createPatient(patient);
      return new ResponseDTO(
        patientCreated,
        HttpStatus.CREATED,
        'Patient created',
      );
    } catch (error) {
      return new ResponseDTO(
        null,
        HttpStatus.INTERNAL_SERVER_ERROR,
        error.message,
        error,
      );
    }
  }
}
