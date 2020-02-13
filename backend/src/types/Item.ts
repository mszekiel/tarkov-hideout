export class Item implements ItemInterface {
  name: string;
  price?: number = 0;
  icon?: string = '';
  constructor(name: string) {
    this.name = name;
  }

  setData(data: { price?: number; icon?: string }) {
    Object.assign(this, data);
    return this;
  }
}

export interface ItemInterface {
  name: string;
  price?: number;
  slots?: number;
  diff24h?: number;
  diff7days?: number;
  icon?: string;
  link?: string;
  reference?: string;
}
