import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { PatientsGateway } from '../../infrastructure/persistence/gateways/patients.gateway';

@Injectable()
export class UniquePatientInterceptor implements NestInterceptor {
  constructor(private readonly cardGateway: PatientsGateway) {}

  async intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Promise<Observable<any>> {
    const body = context.switchToHttp().getRequest().body;

    const patient = await this.cardGateway.getUniquePatient({ ...body });

    if (patient) {
      return of({ data: null, error: 'Patient already exists' });
    }

    return next.handle();
  }
}
