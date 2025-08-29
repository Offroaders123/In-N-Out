use crate::topping::Topping;

pub enum Meat {
    One = 1,
    Two = 2,
    Three = 3,
    Four = 4,
}

pub enum Cooked {
    Regular,
    Well,
    ExtraWell,
}

pub struct Meatable {
    meat: Meat,
    cooked: Cooked,
    salted: Topping,
}
