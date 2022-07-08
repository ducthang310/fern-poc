import { writeFile } from 'fs/promises';
import * as path from 'path';

export class BaseSeeder {
  async createErrorFile(filePath: string, content: string): Promise<void> {
    const ext = path.extname(filePath);
    const timestamp = new Date().getTime();
    const errorFilePath = filePath.replace(ext, `-error-${timestamp}${ext}`);
    return writeFile(errorFilePath, content, 'utf-8');
  }
}