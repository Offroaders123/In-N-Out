export type Condiment<T extends string> =
  | T
  | `Very Light ${T}`
  | `Light ${T}`
  | `Extra ${T}`
  | `Double Extra ${T}`
  | null;

export type Spread = Condiment<"Spread">;

export type Lettuce = Condiment<"Lettuce">;

export type Tomato = Condiment<"Tomato">;

export type Onion = Condiment<"Onion">;

export type GrilledOnion = Condiment<"Grilled Onion">;

export type Pickle = Condiment<"Pickle">;

export type FriedMustard = Condiment<"Fried Mustard">;

export type WholeGrilledOnion = Condiment<"Whole Grilled Onion">;

export type RawOnion = Condiment<"Raw Onion">;

export type RawChoppedOnion = Condiment<"Raw Chopped Onion">;

export type Chilies = Condiment<"Chilies">;