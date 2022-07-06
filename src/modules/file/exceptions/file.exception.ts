import { BaseException } from '../../../common/exceptions/base.exception';
import { HttpStatus } from '@nestjs/common';

export class FileNotExistException extends BaseException {
  constructor() {
    super(
      'The file does not exist',
      'file_does_not_exist',
      HttpStatus.NOT_FOUND,
    );
  }
}

export class FileAlreadyExistsException extends BaseException {
  constructor() {
    super(
      'The file already exists. Please use another uuid or leave it for creating automatically.',
      'file_already_exists',
      HttpStatus.BAD_REQUEST,
    );
  }
}
