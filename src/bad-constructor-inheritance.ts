class SoftDrink {
  constructor(
    public readonly flavor: string,
    public readonly ice: boolean = true
  ) {}
}

class Coke extends SoftDrink {
  constructor(ice?: boolean) {
    super("coke",ice);
  }
}