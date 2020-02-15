import { Min, IsNumber, IsOptional, Max } from 'class-validator';
import { Transform } from 'class-transformer';
import { recipes } from 'src/assets/RecipeList';

export class WithPagination {
  @Transform(start => parseInt(start))
  @IsOptional()
  @IsNumber()
  @Min(0)
  start: number = 0;

  @Transform(limit => parseInt(limit))
  @IsOptional()
  @IsNumber()
  limit: number = 10;
}
