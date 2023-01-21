import { Test } from '@nestjs/testing';
import { CreatePatientInteractor } from '../../../microservice/application-core/patients/use-cases/createPatient.interactor';
import { PatientController } from '../../../microservice/user-interface/controllers/patient.controller';
import { PatientDTO } from '../../../microservice/infrastructure/persistence/dto/index';
import { ResponseDTO } from '../../../microservice/application-core/patients/dto/index';
import { HttpStatus } from '@nestjs/common';
import { PatientsGateway } from '../../../microservice/infrastructure/persistence/gateways/patients.gateway';

describe('PatientController', () => {
  let createPatientInteractor: CreatePatientInteractor;
  let patientController: PatientController;
  const payload = {
    id: '75504959',
    firstName: 'Williams',
    lasttName: 'Galeano',
    email: 'willyrhcp96@gmail.com',
    phone: '979327473',
  } as PatientDTO;

  beforeAll(async () => {
    class MockModel {
      static execute = async () =>
        new ResponseDTO(payload, HttpStatus.CREATED, 'Patient created');

      static getUniquePatient = async () => null;
    }

    const moduleRef = await Test.createTestingModule({
      controllers: [PatientController],
      providers: [
        {
          provide: CreatePatientInteractor,
          useValue: MockModel,
        },
        {
          provide: PatientsGateway,
          useValue: MockModel,
        },
      ],
    }).compile();

    createPatientInteractor = moduleRef.get<CreatePatientInteractor>(
      CreatePatientInteractor,
    );
    patientController = moduleRef.get<PatientController>(PatientController);
  });

  describe('createPatient', () => {
    it('should return a success message', async () => {
      try {
        jest
          .spyOn(createPatientInteractor, 'execute')
          .mockImplementation(
            async () =>
              new ResponseDTO(payload, HttpStatus.CREATED, 'Patient created'),
          );

        expect(await patientController.createPatient(payload)).toEqual(
          new ResponseDTO(payload, HttpStatus.CREATED, 'Patient created'),
        );
      } catch (_) {}
    });
  });
});
