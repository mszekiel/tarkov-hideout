import { Controller, Get, Req } from '@nestjs/common';
import { ItemService } from '../services/ItemService';
import { WithPagination } from 'src/types/WithPagination';

@Controller('hideout')
export class HideoutController {
  constructor(private readonly hideoutService: ItemService) {}

  @Get('recipes')
  getRecipes(@Req() request: WithPagination) {
    return this.hideoutService.getRecipes(request);
  }
}
