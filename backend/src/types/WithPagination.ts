import { Min, IsNumber, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';

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
