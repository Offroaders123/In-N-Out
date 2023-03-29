import { Condiment } from "./Condiment.js";

export type Buns = boolean | "no-toast" | "extra-toast";

export type Meat = 0 | 1 | 2 | 3 | 4;

export type Cheese = 0 | 1 | 2 | 3 | 4;

export class Burger {
  #buns: Buns = false;
  #meat: Meat = 0;
  #cheese: Cheese = 0;
  #spread: Condiment = false;
  #lettuce: Condiment = false;
  #tomato: Condiment = false;
  #onion: Condiment = false;
  #grilledOnion: Condiment = false;
  #pickle: Condiment = false;
  #friedMustard: Condiment = false;
  #wholeGrilledOnion: Condiment = false;
  #rawOnion: Condiment = false;
  #rawChoppedOnion: Condiment = false;
  #chilies: Condiment = false;
  #salt: Condiment = false;

  setBuns(value: Buns = true) {
    this.#buns = value;
    return this;
  }

  setMeat(value: Meat = 1) {
    this.#meat = value;
    return this;
  }

  setCheese(value: Cheese = 1) {
    this.#cheese = value;
    return this;
  }

  setSpread(value: Condiment = true) {
    this.#spread = value;
    return this;
  }

  setLettuce(value: Condiment = true) {
    this.#lettuce = value;
    return this;
  }

  setTomato(value: Condiment = true) {
    this.#tomato = value;
    return this;
  }

  setOnion(value: Condiment = true) {
    this.#onion = value;
    return this;
  }

  setGrilledOnion(value: Condiment = true) {
    this.#grilledOnion = value;
    return this;
  }

  setPickle(value: Condiment = true) {
    this.#pickle = value;
    return this;
  }

  setFriedMustard(value: Condiment = true) {
    this.#friedMustard = value;
    return this;
  }

  setWholeGrilledOnion(value: Condiment = true) {
    this.#wholeGrilledOnion = value;
    return this;
  }

  setRawOnion(value: Condiment = true) {
    this.#rawOnion = value;
    return this;
  }

  setRawChoppedOnion(value: Condiment = true) {
    this.#rawChoppedOnion = value;
    return this;
  }

  setChilies(value: Condiment = true) {
    this.#chilies = value;
    return this;
  }

  setSalt(value: Condiment = true) {
    this.#salt = value;
    return this;
  }
}

export class Hamburger extends Burger {
  setMeat(value: Extract<Meat, 1> = 1) {
    if (value !== 1){
      throw new TypeError("Hamburger must have a single patty.");
    }
    return this;
  }

  setCheese(value: Extract<Cheese, 0>) {
    if (value !== 0){
      throw new TypeError("Hamburger cannot have cheese.");
    }
    return this;
  }
}

export class Cheeseburger extends Burger {
  setMeat(value: Extract<Meat, 1> = 1) {
    if (value !== 1){
      throw new TypeError("Cheeseburger must have a single patty.");
    }
    return this;
  }

  setCheese(value: Exclude<Cheese, 0> = 1) {
    if (value < 1){
      throw new TypeError("Cheeseburger must have cheese.");
    }
    return this;
  }
}

export class DoubleDouble {}

export class Veggie {}

export class DoubleMeat {}

export class GrilledCheese {}

export class DoubleSingle {}

export class ThreeByThree {}

export class FourByFour {}

export class MeatPatty {}

export class FlyingDutchman {}