export enum Cheese {
  One = 1,
  Two = 2,
  Three = 3,
  Four = 4
}

export interface Cheesable<T extends Cheese> {
  cheese: T;
}