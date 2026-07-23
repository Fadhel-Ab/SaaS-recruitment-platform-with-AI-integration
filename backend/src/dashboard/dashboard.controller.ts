import { Controller, Get } from '@nestjs/common';
import { CurrentUser } from '../auth/decorators/current-user.decorator.js';
import type { CurrentUserData } from '../auth/interfaces/current-user.interface.js';
import { DashboardService } from './dashboard.service.js';

@Controller('dashboard')
export class DashboardController {
  constructor(readonly dashboardService: DashboardService) {}

  @Get()
  getSummary(
    @CurrentUser()
    user: CurrentUserData,
  ) {
    return this.dashboardService.getSummary(user.id);
  }
}
