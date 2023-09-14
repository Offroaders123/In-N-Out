const order = [];

order.push(new DoubleDouble());
order.push(new Fry({ cook: "well" }));
order.push(new CheeseFry({ salt: false, cook: "slightly-light" }));

order.push(new Coke({ ice: "light" }));
order.push(new SoftDrink({ flavor: "Coke" }));
order.push(new SoftDrink({ flavors: ["Coke","7-Up"] }));

order.push(new DoubleDouble({ lettuce: "extra", cook: "medium-well" }));

// @ts-expect-error - Veggie burger doesn't have meat, so you can't cook the meat well
order.push(new VeggieBurger({ cook: "well" }));