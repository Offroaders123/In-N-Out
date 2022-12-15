export type Onion = RegularOnion | GrilledOnion | RawOnion | WholeGrilledOnion | RawChoppedOnion | ChoppedOnion;

export type RawOnion = "Raw Onion";
export type RawChoppedOnion = "Raw Chopped Onion";

export type RegularOnion = "Onion";
export type ChoppedOnion = "Chopped Onion";

export type WholeGrilledOnion = "Whole Grilled Onion";
export type GrilledOnion = "Grilled Onion";

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