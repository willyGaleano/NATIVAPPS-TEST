import {
  isNumber,
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'containOnlyNumbers', async: false })
export class ContainOnlyNumbers implements ValidatorConstraintInterface {
  validate(id: string, args: ValidationArguments) {
    return isNumber(Number(id));
  }

  defaultMessage(args: ValidationArguments) {
    return '($value) no contiene solo números';
  }
}
