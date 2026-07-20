import { Injectable } from '@nestjs/common';
import { promises as fs } from 'fs';
import { PDFParse } from 'pdf-parse';
import { join } from 'path';

@Injectable()
export class ResumeParserService {
  async extractText(filePath: string): Promise<string> {

    const buffer = await fs.readFile(filePath);

    const parser = new PDFParse({ data: buffer });

    try {
      const result = await parser.getText();
      return result.text;
    } finally {
      await parser.destroy();
    }
  }
}