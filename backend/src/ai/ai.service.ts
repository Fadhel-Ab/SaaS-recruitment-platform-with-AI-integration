import { Injectable } from '@nestjs/common';
import { OpenAIService } from './openai.service.js';
import { PrismaService } from 'prisma/prisma.service.js';
import { ResumeParserService } from './resume-parser.service.js';
import { join } from 'path';
import { StorageService } from 'common/storage/storage.service.js';

@Injectable()
export class AiService {
  constructor(
    private prisma: PrismaService,
    private openAI: OpenAIService,
    private parser: ResumeParserService,
     private storageService: StorageService,
  ) {}

  async processApplication(applicationId: string) {
    const application = await this.prisma.application.findUnique({
      where: {
        id: applicationId,
      },
      include: {
        candidate: true,
        job: true,
      },
    });
    const filePath =
  this.storageService.getResumePath(
    application!.candidate.resumeFileName!,
  );

const resumeText =
  await this.parser.extractText(filePath);
  }
}
