import { Min, IsNumber, IsOptional } from 'class-validator';

export class WithPagination {
  @IsOptional()
  @IsNumber()
  @Min(0)
  start: number = 0;

  @IsOptional()
  @IsNumber()
  end: number = Infinity;
}
