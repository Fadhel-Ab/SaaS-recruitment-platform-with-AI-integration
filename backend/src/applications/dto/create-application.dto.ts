import {
  IsEmail,
  IsNotEmpty,
} from 'class-validator';

export class CreateApplicationDto {

  @IsNotEmpty()
  fullName: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  phone: string;
}