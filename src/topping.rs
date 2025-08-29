export interface Lettuceable {
  lettuce: Topping;
}

export interface Tomatoeable {
  tomato: Topping;
}

export interface Spreadable {
  spread: Topping;
}

export interface Chilliable {
  chillies: Topping;
}

export interface GrilledOnionable {
  grilledOnion: Topping;
}

export enum Topping {
  Regular = "Regular",
  Light = "Light",
  ExtraLight = "ExtraLight",
  Well = "Well",
  ExtraWell = "ExtraWell"
}

export interface Onionable {
  onion: Topping;
}

export interface WholeGrilledOnionable {
  wholeGrilledOnion: Topping;
}

export interface RawOnionable {
  rawOnion: Topping;
}

export interface RawChoppedOnionable {
  rawChoppedOnion: Topping;
}

export interface ChoppedOnionable {
  choppedOnion: Topping;
}