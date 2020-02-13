import { Item } from 'src/types/Item';
import { Expose, Exclude } from 'class-transformer';
import { OutputItem } from 'src/types/OutputItem';

@Exclude()
export class ItemFacade implements OutputItem {
  @Expose()
  price: number;
  @Expose()
  name: string;
  @Expose()
  icon: string;
  @Expose()
  amount: number;
}
