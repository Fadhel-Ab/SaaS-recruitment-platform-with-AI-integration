import {
  Body,
  Controller,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
  Patch,
} from '@nestjs/common';
import { Roles } from '../auth/decorators/roles.decorator.js';
import { FileInterceptor } from '@nestjs/platform-express';

import { ApplicationsService } from './applications.service.js';
import { CreateApplicationDto } from './dto/create-application.dto.js';
import { multerConfig } from '../common/multer.config.js';
import { UpdateApplicationStatusDto } from '../jobs/dto/update-application-status.dto.js';
import { UserRole } from '../generated/prisma/enums.js';

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

  @Patch(':id/status')
  @Roles(UserRole.MANAGER)
  updateStatus(
    @Param('id') id: string,
    @Body() dto: UpdateApplicationStatusDto,
  ) {
    return this.applicationsService.updateStatus(id, dto);
  }
}
