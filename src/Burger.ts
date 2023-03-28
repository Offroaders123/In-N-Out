import { Condiment } from "./Condiment.js";

export class Burger {
  #tomato: Condiment = true;

  set tomato(value: Condiment) {
    this.#tomato = value;
  }

  get tomato() {
    return this.#tomato;
  }
}

export default Burger;

const myBurger = new Burger();
myBurger.tomato = true;

export type Condiments = (
  | "Spread"
  | "Lettuce"
  | "Tomato"
  | "Onion"
  | "Grilled Onion"
  | "Pickle"
  | "Fried Mustard"
  | "Whole Grilled Onion"
  | "Raw Onion"
  | "Raw Chopped Onion"
  | "Chilies"
  | "Salt"
);