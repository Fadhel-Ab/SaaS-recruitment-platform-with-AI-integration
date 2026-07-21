import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateAvailabilityDto } from './dto/create-availability.dto.js';
@Injectable()
export class AvailabilityService {
  constructor(private prisma: PrismaService) {}

  create(managerId: string, dto: CreateAvailabilityDto) {
    return this.prisma.availability.create({
      data: {
        managerId,

        dayOfWeek: dto.dayOfWeek,

        startTime: dto.startTime,

        endTime: dto.endTime,
      },
    });
  }

  findMine(managerId: string) {
    return this.prisma.availability.findMany({
      where: {
        managerId,
      },
    });
  }
}
