import type { Topping } from "./Topping.js";

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