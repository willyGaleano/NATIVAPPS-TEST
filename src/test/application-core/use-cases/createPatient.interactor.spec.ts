import { Test } from '@nestjs/testing';
import { CreatePatientInteractor } from '../../../microservice/application-core/patients/use-cases/createPatient.interactor';
import { PatientsGateway } from '../../../microservice/infrastructure/persistence/gateways/patients.gateway';
import { PatientDTO } from '../../../microservice/infrastructure/persistence/dto/index';

describe('CreatePatientInteractor', () => {
  let createPatientInteractor: CreatePatientInteractor;
  const payload = {
    id: '75504959',
    firstName: 'Williams',
    lasttName: 'Galeano',
    email: 'willyrhcp96@gmail.com',
    phone: '979327473',
  } as PatientDTO;
  const gatewayCard = {
    create: async () => payload,
  };

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [PatientsGateway, CreatePatientInteractor],
    })
      .overrideProvider(PatientsGateway)
      .useValue(gatewayCard)
      .compile();

    createPatientInteractor = moduleRef.get<CreatePatientInteractor>(
      CreatePatientInteractor,
    );
  });

  describe('create patient interactor', () => {
    it('should return error', async () => {
      const response = await createPatientInteractor.execute(payload);
      expect(response.data).toEqual(null);
    });
  });
});
