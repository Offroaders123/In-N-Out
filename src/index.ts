export enum Toast {
  Regular = "Regular",
  Light = "Light",
  Extra = "Extra"
}

export interface Bunnable<T extends Toast = Toast.Regular> {
  toasted: T;
}

export enum Cheese {
  One = 1,
  Two = 2,
  Three = 3,
  Four = 4
}

export interface Cheesable<T extends Cheese> {
  cheese: T;
}

export enum Meat {
  One = 1,
  Two = 2,
  Three = 3,
  Four = 4
}

export enum Cook {
  Regular = "Regular",
  Well = "Well",
  ExtraWell = "ExtraWell"
}

export interface Meatable<T extends Meat> {
  meat: T;
  cooked: Cook;
  salted: Topping;
}

export interface Lettuced {
  lettuce: Topping;
}

export interface Tomatoed {
  tomato: Topping;
}

export interface Spreaded {
  spread: Topping;
}

export interface Chillied {
  chillies: Topping;
}

export interface GrilledOnioned {
  grilledOnion: Topping;
}

export type Topping = 0 | 1 | 2 | 3 | 4 | 5;

export interface DoubleDouble extends Bunnable, Cheesable<2 | 3 | 4>, Meatable<2 | 3 | 4>, Lettuced, Tomatoed, Spreaded, Partial<Chillied>, Partial<GrilledOnioned>, Partial<Onioned>, Partial<WholeGrilledOnioned>, Partial<RawOnioned>, Partial<RawChoppedOnioned>, Partial<ChoppedOnioned> {}

export interface Onioned {
  onion: Topping;
}

export interface WholeGrilledOnioned {
  wholeGrilledOnion: Topping;
}

export interface RawOnioned {
  rawOnion: Topping;
}

export interface RawChoppedOnioned {
  rawChoppedOnion: Topping;
}

export interface ChoppedOnioned {
  choppedOnion: Topping;
}