export interface Bunned {
  toasted: 0 | 1 | 2;
}

export interface Cheesed<T extends 1 | 2 | 3 | 4> {
  cheese: T;
}

export interface Meated<T extends 1 | 2 | 3 | 4> {
  meat: T;
  cooked: 1 | 2 | 3;
  salted: 0 | 1 | 2 | 3 | 4 | 5;
}

export interface Lettuced {
  lettuce: 0 | 1 | 2 | 3 | 4 | 5;
}

export interface Tomatoed {
  tomato: 0 | 1 | 2 | 3 | 4 | 5;
}

export interface Spreaded {
  spread: 0 | 1 | 2 | 3 | 4 | 5;
}

export interface Chillied {
  chillies: 0 | 1 | 2 | 3 | 4 | 5;
}

export interface GrilledOnioned {
  grilledOnion: 0 | 1 | 2 | 3 | 4 | 5;
}

export interface DoubleDouble extends Bunned, Cheesed<2 | 3 | 4>, Meated<2 | 3 | 4>, Lettuced, Tomatoed, Spreaded, Partial<Chillied>, Partial<GrilledOnioned> {}

// const myBurger: DoubleDouble = {

// };

const myBurger2 = DoubleDouble();
console.log(myBurger2);

function DoubleDouble(props: Partial<DoubleDouble> = {}): DoubleDouble {
  return { toasted: 1, cheese: 2, meat: 2, cooked: 1, salted: 3, lettuce: 3, tomato: 3, spread: 3, ...props };
}