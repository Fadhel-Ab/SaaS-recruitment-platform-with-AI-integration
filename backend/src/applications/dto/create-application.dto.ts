import { IsEmail, IsNotEmpty, IsUrl } from 'class-validator';

export class CreateApplicationDto {
  @IsNotEmpty()
  fullName: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  phone: string;

  @IsUrl()
  resumeFileName: string;
}
