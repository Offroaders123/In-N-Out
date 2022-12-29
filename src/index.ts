// export type Onion = RegularOnion | GrilledOnion | RawOnion | WholeGrilledOnion | RawChoppedOnion | ChoppedOnion;

export type RawOnion = Condiment<"Raw Onion">;
export type RawChoppedOnion = Condiment<"Raw Chopped Onion">;

// export type RegularOnion = "Onion";
export type ChoppedOnion = Condiment<"Chopped Onion">;

export type WholeGrilledOnion = Condiment<"Whole Grilled Onion">;
// export type GrilledOnion = "Grilled Onion";

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

export type Condiment<T extends string> = boolean | T | `Very Light ${T}` | `Light ${T}` | `Extra ${T}` | `Double Extra ${T}`;

export type Spread = Condiment<"Spread">;

export type Lettuce = Condiment<"Lettuce">;

export type Tomato = Condiment<"Tomato">;

export type Onion = Condiment<"Onion">;

export type GrilledOnion = Condiment<"Grilled Onion">;

export interface Burger {
  spread: Spread;
  lettuce: Lettuce;
  tomato: Tomato;
  onion: Onion;
  grilledOnion: GrilledOnion;
}

export class DoubleDouble implements Burger {
  spread = true;
  lettuce = true;
  tomato = true;
  onion = false;
  grilledOnion = false;

  constructor({ spread, lettuce, tomato, onion, grilledOnion }: Partial<Burger> = {}) {}
}

new DoubleDouble({ onion: true });