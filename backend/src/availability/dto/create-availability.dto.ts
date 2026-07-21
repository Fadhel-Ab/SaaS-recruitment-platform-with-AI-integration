import { IsInt, IsString } from 'class-validator';

export class CreateAvailabilityDto {
  @IsInt()
  dayOfWeek: number;

  @IsString()
  startTime: string;

  @IsString()
  endTime: string;
}
