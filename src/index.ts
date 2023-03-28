import { Spread, Lettuce, Tomato, Onion, GrilledOnion } from "./condiments.js";

export type Drink = SmallSoftDrink | MediumSoftDrink | LargeSoftDrink | ExtraLargeSoftDrink | Milk | RegularHotCocoa | LargeHotCocoa | RegularShake | LargeShake | ExtraLargeShake;

export type SmallSoftDrink = `Small ${SoftDrink}`;
export type MediumSoftDrink = `Medium ${SoftDrink}`;
export type LargeSoftDrink = `Large ${SoftDrink}`;
export type ExtraLargeSoftDrink = `Extra Large ${SoftDrink}`;

export type SoftDrink = Coke | DietCoke | SevenUp | DrPepper | RootBeer | IcedTea | PinkLemonade | LemonadeZeroSugar;

export type Coke = "Coke";
export type DietCoke = "Diet Coke";
export type SevenUp = "7-Up";
export type DrPepper = "Dr Pepper";
export type RootBeer = "Root Beer";
export type IcedTea = "Iced Tea";
export type PinkLemonade = "Pink Lemonade";
export type LemonadeZeroSugar = "Lemonade Zero Sugar";

export type Milk = "Milk";

export type RegularHotCocoa = `Regular ${HotCocoa}`;
export type LargeHotCocoa = `Large ${HotCocoa}`;

export type HotCocoa = "Hot Cocoa";

export type RegularShake = `Regular ${Shake}`;
export type LargeShake = `Large ${Shake}`;
export type ExtraLargeShake = `Extra Large ${Shake}`;

export type Shake = ChocolateShake | StrawberryShake | VanillaShake | NeapolitanShake;

export type ChocolateShake = "Chocolate Shake";
export type StrawberryShake = "Strawberry Shake";
export type VanillaShake = "Vanilla Shake";
export type NeapolitanShake = "Neapolitan Shake";

export interface Burger {
  spread: Spread;
  lettuce: Lettuce;
  tomato: Tomato;
  onion: Onion;
  grilledOnion: GrilledOnion;
}

export class DoubleDouble implements Burger {
  spread = "Spread" as const;
  lettuce = "Lettuce" as const;
  tomato = "Tomato" as const;
  onion = "Onion" as const;
  grilledOnion = "Grilled Onion" as const;

  constructor({ spread, lettuce, tomato, onion, grilledOnion }: Partial<Burger> = {}) {}
}

new DoubleDouble({ onion: "Onion" });