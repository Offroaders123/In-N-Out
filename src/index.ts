export enum Toasted {
  Regular = "Regular",
  Light = "Light",
  Extra = "Extra"
}

export interface Bunnable<T extends Toasted> {
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

export enum Cooked {
  Regular = "Regular",
  Well = "Well",
  ExtraWell = "ExtraWell"
}

export interface Meatable<T extends Meat> {
  meat: T;
  cooked: Cooked;
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

export enum Topping {
  Regular = "Regular",
  Light = "Light",
  ExtraLight = "ExtraLight",
  Well = "Well",
  ExtraWell = "ExtraWell"
}

export interface DoubleDouble extends Bunnable<Toasted>, Cheesable<2 | 3 | 4>, Meatable<2 | 3 | 4>, Lettuceable, Tomatoeable, Spreadable, Partial<Chilliable>, Partial<GrilledOnionable>, Partial<Onionable>, Partial<WholeGrilledOnionable>, Partial<RawOnionable>, Partial<RawChoppedOnionable>, Partial<ChoppedOnionable> {}

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