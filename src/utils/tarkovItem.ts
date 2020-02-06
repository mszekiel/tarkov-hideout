export class TarkovItem {
  constructor(object: TarkovItem) {
    object && Object.assign(this, object);
  }
  name: string;
  price: number;
  slots: number;
  diff24h: number;
  diff7days: number;
  icon: string;
  link: string;
  reference: string;

  getIcon = async () => {
    return this.icon;
  };
}
