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

export interface Lettuceable {
  lettuce: Topping;
}

export interface Tomatoeable {
  tomato: Topping;
}

export interface Spreadable {
  spread: Topping;
}

export interface Chilliable {
  chillies: Topping;
}

export interface GrilledOnionable {
  grilledOnion: Topping;
}

export type Topping = 0 | 1 | 2 | 3 | 4 | 5;

export interface DoubleDouble extends Bunnable, Cheesable<2 | 3 | 4>, Meatable<2 | 3 | 4>, Lettuceable, Tomatoeable, Spreadable, Partial<Chilliable>, Partial<GrilledOnionable>, Partial<Onionable>, Partial<WholeGrilledOnionable>, Partial<RawOnionable>, Partial<RawChoppedOnionable>, Partial<ChoppedOnionable> {}

export interface Onionable {
  onion: Topping;
}

export interface WholeGrilledOnionable {
  wholeGrilledOnion: Topping;
}

export interface RawOnionable {
  rawOnion: Topping;
}

export interface RawChoppedOnionable {
  rawChoppedOnion: Topping;
}

export interface ChoppedOnionable {
  choppedOnion: Topping;
}