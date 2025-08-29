export enum Toasted {
  Regular = "Regular",
  Light = "Light",
  Extra = "Extra"
}

export interface Bunnable<T extends Toasted> {
  toasted: T;
}