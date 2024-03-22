export interface Bunned {
  toasted: 0 | 1 | 2;
}

export interface Cheesed<T extends 1 | 2 | 3 | 4> {
  cheesed: T;
}

export interface Meated<T extends 1 | 2 | 3 | 4> {
  meated: T;
  cooked: 1 | 2 | 3;
  salted: 0 | 1 | 2;
}