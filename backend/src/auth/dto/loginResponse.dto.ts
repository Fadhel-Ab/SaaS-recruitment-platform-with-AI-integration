import { UserRole } from '../../generated/prisma/enums.js';

export class LoginResponseDto {
  accessToken: string;

  user: {
    id: string;
    email: string;
    role: UserRole;
  };
}
