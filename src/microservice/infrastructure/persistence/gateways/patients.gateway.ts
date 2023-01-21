import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Patient } from '../entities/patient.entity';
import { PatientDTO } from '../dto/index';

@Injectable()
export class PatientsGateway {
  constructor(
    @InjectModel(Patient)
    private patientModel: typeof Patient,
  ) {}

  async createPatient(patient: PatientDTO): Promise<Patient> {
    return await this.patientModel.create({ ...patient });
  }

  async getUniquePatient(patient: PatientDTO): Promise<Patient> {
    return await this.patientModel.findOne({
      where: { ...patient },
    });
  }
}
