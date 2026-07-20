import { Injectable } from '@nestjs/common';
import { join } from 'path';

@Injectable()
export class StorageService {
  getResumePath(fileName: string) {
    return join(process.cwd(), 'uploads', 'cvs', fileName);
  }

  getResumeUrl(fileName: string) {
    return `/uploads/cvs/${fileName}`;
  }
}
