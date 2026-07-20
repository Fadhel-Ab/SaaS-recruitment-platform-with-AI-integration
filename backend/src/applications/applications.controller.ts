import {
  Body,
  Controller,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

import { ApplicationsService } from './applications.service.js';
import { CreateApplicationDto } from './dto/create-application.dto.js';
import { multerConfig } from '../common/multer.config.js';

@Controller('applications')
export class ApplicationsController {
  constructor(private readonly applicationsService: ApplicationsService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('cvs', multerConfig))
  uploadCv(@UploadedFile() file: Express.Multer.File) {
    return {
      fileName: file.filename,
    };
  }

  @Post(':shareToken')
  apply(
    @Param('shareToken') shareToken: string,
    @Body() dto: CreateApplicationDto,
  ) {
    return this.applicationsService.apply(shareToken, dto);
  }
}
