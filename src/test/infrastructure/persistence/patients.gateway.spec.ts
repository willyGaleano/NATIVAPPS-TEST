import { Test } from '@nestjs/testing';
import { PatientsGateway } from '../../../microservice/infrastructure/persistence/gateways/patients.gateway';
import { Patient } from '../../../microservice/infrastructure/persistence/entities/patient.entity';
import { PatientDTO } from '../../../microservice/infrastructure/persistence/dto/index';
describe('PatientsGateway', () => {
  let patientsGateway: PatientsGateway;
  const payload = {
    id: '75504959',
    firstName: 'Williams',
    lasttName: 'Galeano',
    email: 'willyrhcp96@gmail.com',
    phone: '979327473',
  } as PatientDTO;

  function mockRepository(dto: any) {
    this.data = dto;
    this.create = () => {
      return this.data;
    };
  }

  class MockModel {
    static createPatient = async () => null;
  }

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        PatientsGateway,
        {
          provide: PatientsGateway,
          useValue: MockModel,
        },
        {
          provide: typeof Patient,
          useValue: mockRepository,
        },
      ],
      imports: [],
    }).compile();

    patientsGateway = module.get<PatientsGateway>(PatientsGateway);
  });

  describe('create', () => {
    it('should create and return a patient in the database', async () => {
      const response = await patientsGateway.createPatient(payload);
      expect(response).not.toBe({});
    });
  });
});
