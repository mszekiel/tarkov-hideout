class ItemDate extends Date {
  constructor(hours: number, minutes: number, seconds: number) {
    super(0, 0, 0, hours, minutes, seconds, 0);
  }
}

export default ItemDate;
