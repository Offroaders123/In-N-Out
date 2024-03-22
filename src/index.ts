export interface Bunned {
  toasted: 0 | 1 | 2;
}

export interface Cheesed<T extends 1 | 2 | 3 | 4> {
  cheese: T;
}

export interface Meated<T extends 1 | 2 | 3 | 4> {
  meat: T;
  cooked: 1 | 2 | 3;
  salted: 0 | 1 | 2;
}

export interface Lettuced {
  lettuce: 0 | 1 | 2 | 3 | 4 | 5;
}

export interface Tomatoed {
  tomato: 0 | 1 | 2 | 3 | 4 | 5;
}

export interface Spread {
  spread: 0 | 1 | 2 | 3 | 4 | 5;
}