import { HttpException } from '@nestjs/common';

export class BaseException extends HttpException {
  constructor(message?: string, code?: string, statusCode?: number) {
    super({ code, message }, statusCode || 400);
  }
}
