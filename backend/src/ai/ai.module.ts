import { Module } from '@nestjs/common';
import { AiController } from './ai.controller.js';
import { AiService } from './ai.service.js';
import { OpenAIService } from './openai.service.js';
import { ResumeParserService } from './resume-parser.service.js';

@Module({
  controllers: [AiController],
  providers: [AiService, OpenAIService, ResumeParserService],
  exports: [AiService],
})
export class AiModule {}
