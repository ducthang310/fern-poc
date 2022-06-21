import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus, Logger
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: any, host: ArgumentsHost): void {
    const { httpAdapter } = this.httpAdapterHost;

    const ctx = host.switchToHttp();

    const httpStatus =
      exception instanceof HttpException ||
      typeof exception.getStatus === 'function'
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    let errorResponse;
    switch (true) {
      case exception instanceof HttpException ||
        typeof exception.getResponse === 'function':
        errorResponse = exception.getResponse();
        break;
      case exception && exception.message:
        errorResponse = { message: exception.message };
        break;
      default:
        errorResponse = exception;
    }

    if (httpStatus === 500) {
      Logger.error(exception);
    }

    const responseBody = {
      statusCode: httpStatus,
      error: errorResponse,
      timestamp: new Date().toISOString(),
      path: httpAdapter.getRequestUrl(ctx.getRequest()),
    };

    httpAdapter.reply(ctx.getResponse(), responseBody, httpStatus);
  }
}
