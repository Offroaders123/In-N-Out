import type { Bunnable, Toasted } from "./Bunnable.js";
import type { Cheesable } from "./Cheesable.js";
import type { Meatable } from "./Meatable.js";
import type { Chilliable, ChoppedOnionable, GrilledOnionable, Lettuceable, Onionable, RawChoppedOnionable, RawOnionable, Spreadable, Tomatoeable, WholeGrilledOnionable } from "./Topping.js";

export interface DoubleDouble extends Bunnable<Toasted>, Cheesable<2 | 3 | 4>, Meatable<2 | 3 | 4>, Lettuceable, Tomatoeable, Spreadable, Partial<Chilliable>, Partial<GrilledOnionable>, Partial<Onionable>, Partial<WholeGrilledOnionable>, Partial<RawOnionable>, Partial<RawChoppedOnionable>, Partial<ChoppedOnionable> {}