import { Condiment } from "./Condiment.js";

export class Burger {
  // #buns;
  // #meat;
  // #cheese;
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

export class Hamburger {}

export class Cheeseburger {}

export class DoubleDouble {}

export class Veggie {}

export class DoubleMeat {}

export class GrilledCheese {}

export class DoubleSingle {}

export class ThreeByThree {}

export class FourByFour {}

export class MeatPatty {}

export class FlyingDutchman {}