import { Tomato } from "./condiments.js";

export class Burger {
  #tomato: Tomato = null;

  set tomato(value: Tomato) {
    this.#tomato = value;
  }

  get tomato() {
    return this.#tomato;
  }
}

export default Burger;

const myBurger = new Burger();
myBurger.tomato = "Tomato";