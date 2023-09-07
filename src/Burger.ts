export enum Meat {
  One = "one",
  Two = "two",
  Three = "three",
  Four = "four"
}

export enum Cheese {
  One = "one",
  Two = "two",
  Three = "three",
  Four = "four"
}

export enum Spread {
  ExtraLight = "extra-light",
  Light = "light",
  Regular = "regular",
  Extra = "extra",
  DoubleExtra = "double-extra"
}

export enum Lettuce {
  ExtraLight = "extra-light",
  Light = "light",
  Regular = "regular",
  Extra = "extra",
  DoubleExtra = "double-extra"
}

export enum Tomato {
  ExtraLight = "extra-light",
  Light = "light",
  Regular = "regular",
  Extra = "extra",
  DoubleExtra = "double-extra"
}

export interface VeggieLike {
  spread?: Spread;
  lettuce?: Lettuce;
  tomato?: Tomato;
}

export interface BurgerLike extends VeggieLike {
  meat: Meat;
}

export interface DoubleMeatLike extends BurgerLike {
  meat: Exclude<Meat,Meat.One>;
}

export interface CheeseburgerLike extends BurgerLike {
  cheese: Cheese;
}

export interface DoubleDoubleLike extends CheeseburgerLike {
  meat: Exclude<Meat,Meat.One>;
  cheese: Exclude<Cheese,Cheese.One>;
}