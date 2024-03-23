export interface Bunned {
  toasted: 0 | 1 | 2;
}

export interface Cheesed<T extends 1 | 2 | 3 | 4> {
  cheese: T;
}

export interface Meated<T extends 1 | 2 | 3 | 4> {
  meat: T;
  cooked: 1 | 2 | 3;
  salted: ToppingLevel;
}

export type Topping<K extends [keyof ToppingMap, true?] = [keyof ToppingMap]> = K[1] extends true ? Partial<Pick<ToppingMap, K[0]>> : Pick<ToppingMap, K[0]>;

export interface ToppingMap {
  lettuce: ToppingLevel;
  tomato: ToppingLevel;
  spread: ToppingLevel;
  chillies: ToppingLevel;
  grilledOnion: ToppingLevel;
  onion: ToppingLevel;
  wholeGrilledOnion: ToppingLevel;
  rawOnion: ToppingLevel;
  rawChoppedOnion: ToppingLevel;
  choppedOnion: ToppingLevel;
}

export type ToppingLevel = 0 | 1 | 2 | 3 | 4 | 5;

export interface DoubleDouble extends Bunned, Cheesed<2 | 3 | 4>, Meated<2 | 3 | 4>, Topping<["chillies", true]> {}

declare const hi: DoubleDouble;
hi.chillies

// export interface DoubleDouble extends Bunned, Cheesed<2 | 3 | 4>, Meated<2 | 3 | 4>, Lettuced, Tomatoed, Spreaded, Partial<Chillied>, Partial<GrilledOnioned>, Partial<Onioned>, Partial<WholeGrilledOnioned>, Partial<RawOnioned>, Partial<RawChoppedOnioned>, Partial<ChoppedOnioned> {}