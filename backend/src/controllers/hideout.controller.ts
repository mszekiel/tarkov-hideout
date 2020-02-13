import { Controller, Get, Req } from '@nestjs/common';
import { HideoutService } from '../services/hideout.service';
import { WithPagination } from 'src/types/WithPagination';

@Controller('hideout')
export class HideoutController {
  constructor(private readonly hideoutService: HideoutService) {}

  @Get('recipes')
  getRecipes(@Req() request: WithPagination) {
    return this.hideoutService.getRecipes(request);
  }
}
 