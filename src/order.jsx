const order = (
  <>
    <DoubleDouble/>;
    <Fry cook="well"/>
    <CheeseFry salt={false} cook="slightly-light"/>

    <Coke ice="light"/>
    <SoftDrink flavor="Coke"/>
    <SoftDrink flavors={["Coke","7-Up"]}/>

    <DoubleDouble lettuce="extra" cook="medium-well"/>

    {/* @ts-expect-error - Veggie burger doesn't have meat, so you can't cook the meat well */}
    <VeggieBurger cook="well"/>
  </>
);