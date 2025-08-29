pub struct Lettuceable {
    lettuce: Topping,
}

pub struct Tomatoeable {
    tomato: Topping,
}

pub struct Spreadable {
    spread: Topping,
}

pub struct Chilliable {
    chillies: Topping,
}

pub struct GrilledOnionable {
    grilled_onion: Topping,
}

pub enum Topping {
    Regular,
    Light,
    ExtraLight,
    Well,
    ExtraWell,
}

pub struct Onionable {
    onion: Topping,
}

pub struct WholeGrilledOnionable {
    whole_grilled_onion: Topping,
}

pub struct RawOnionable {
    raw_onion: Topping,
}

pub struct RawChoppedOnionable {
    raw_chopped_onion: Topping,
}

pub struct ChoppedOnionable {
    chopped_onion: Topping,
}
