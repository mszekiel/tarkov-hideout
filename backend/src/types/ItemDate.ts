export class ItemDate {
  private date: Date;
  constructor([hours = 0, minutes = 0, seconds = 0]: number[]) {
    this.date = new Date(0, 0, 0, hours, minutes, seconds, 0);
  }

  getItemString() {
    const hours = this.date.getHours();
    const minutes = this.date.getMinutes();
    const seconds = this.date.getSeconds();
    const parseValue = (value: number) => ('0' + value).slice(-2);

    return [
      hours ? `${parseValue(hours)}:` : '',
      minutes ? `${parseValue(minutes)}:` : '',
      parseValue(seconds),
    ].join('');
  }
}
