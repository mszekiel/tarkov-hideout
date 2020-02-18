import { Controller, Get, Req, Query } from '@nestjs/common';
import { HideoutService } from '../services/hideout.service';
import { WithPagination } from 'src/types/WithPagination';

@Controller('hideout')
export class HideoutController {
  constructor(private readonly hideoutService: HideoutService) {}

  @Get('recipes')
  getRecipes(@Query() query: WithPagination) {
    return this.hideoutService.getRecipes(query);
  }

  @Get('changelog')
  getChangelog() {
    return this.hideoutService.getChangelog();
  }
}
