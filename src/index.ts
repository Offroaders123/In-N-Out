export interface Bunned {
  toasted: 0 | 1 | 2;
}

export interface Cheesed<T extends 1 | 2 | 3 | 4> {
  cheese: T;
}

export interface Meated<T extends 1 | 2 | 3 | 4> {
  meat: T;
  cooked: 1 | 2 | 3;
  salted: Topping;
}

export interface Lettuced {
  lettuce: Topping;
}

export interface Tomatoed {
  tomato: Topping;
}

export interface Spreaded {
  spread: Topping;
}

export interface Chillied {
  chillies: Topping;
}

export interface GrilledOnioned {
  grilledOnion: Topping;
}

export type Topping = 0 | 1 | 2 | 3 | 4 | 5;

export interface DoubleDouble extends Bunned, Cheesed<2 | 3 | 4>, Meated<2 | 3 | 4>, Lettuced, Tomatoed, Spreaded, Partial<Chillied>, Partial<GrilledOnioned>, Partial<Onioned>, Partial<WholeGrilledOnioned>, Partial<RawOnioned>, Partial<RawChoppedOnioned>, Partial<ChoppedOnioned> {}

export interface Onioned {
  onion: Topping;
}

export interface WholeGrilledOnioned {
  wholeGrilledOnion: Topping;
}

export interface RawOnioned {
  rawOnion: Topping;
}

export interface RawChoppedOnioned {
  rawChoppedOnion: Topping;
}

export interface ChoppedOnioned {
  choppedOnion: Topping;
}