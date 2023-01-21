import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength, IsEmail, Validate } from 'class-validator';
import { ContainOnlyNumbers } from '../common/validations/idValidation';

export class PatientDTO {
  @ApiProperty({ default: '75504959' })
  @IsString()
  @MaxLength(20, {
    message: 'El id debe ser menor o igual a 20 caracteres',
  })
  @Validate(ContainOnlyNumbers, {
    message: 'El id debe contener solo números',
  })
  id: string;

  @ApiProperty({ default: 'Williams' })
  @IsString()
  @MaxLength(255, {
    message: 'El firstName debe ser menor o igual a 255 caracteres',
  })
  firstName: string;

  @ApiProperty({ default: 'Galeano' })
  @IsString()
  @MaxLength(255, {
    message: 'El lastName debe ser menor o igual a 255 caracteres',
  })
  lasttName: string;

  @ApiProperty({ default: 'willyrhcp96@gmail.com' })
  @MaxLength(255, {
    message: 'El email debe ser menor o igual a 255 caracteres',
  })
  @IsEmail({}, { message: 'Email no válido' })
  email: string;

  @ApiProperty({ default: '979327473' })
  @IsString()
  @MaxLength(20, {
    message: 'El phone debe ser menor o igual a 20 caracteres',
  })
  phone: string;
}
