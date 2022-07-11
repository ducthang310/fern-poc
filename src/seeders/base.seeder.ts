import { writeFile } from 'fs/promises';
import * as path from 'path';
import { readFileSync } from 'fs';

export class BaseSeeder {
  async createErrorFile(fileName: string, content: string): Promise<void> {
    const filePath = `./databases/seed-data/${fileName}`;
    const ext = path.extname(filePath);
    const timestamp = new Date().getTime();
    const errorFilePath = filePath.replace(ext, `-error-${timestamp}${ext}`);
    return writeFile(errorFilePath, content, 'utf-8');
  }

  async getData(fileName: string): Promise<any> {
    const filePath = `./databases/seed-data/${fileName}`;
    let data: any;
    let errorMessage = "There's no items on the file";
    try {
      data = readFileSync(filePath, 'utf8');
      data = JSON.parse(data);
    } catch (e) {
      errorMessage = e.toString();
    }
    if (!data) {
      await this.createErrorFile(fileName, errorMessage);
      return;
    }
    return data;
  }
}