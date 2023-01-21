import { HttpStatus } from '@nestjs/common';

export class ResponseDTO<T> {
  constructor(
    public readonly data?: T,
    public readonly code?: HttpStatus | string,
    public readonly message?: string,
    public readonly error?: any,
  ) {}
}
