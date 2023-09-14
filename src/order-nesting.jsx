const order = (
  <>
    <DoubleDouble/>;
    <Fry>
      <Well></Well>
    </Fry>
    <CheeseFry>
      <Salt none/>
      <SlightlyLight/>
    </CheeseFry>

    <Coke>
      <Ice light/>
    </Coke>
    <SoftDrink>
      <Flavor Coke/>
    </SoftDrink>
    <SoftDrink>
      {["Coke","7-Up"].map(flavor =>
        <Flavor {...flavor}/>
      )}
    </SoftDrink>

    <DoubleDouble>
      <Lettuce extra/>
      <Cook medium-well/>
    </DoubleDouble>

    {/* @ts-expect-error - Veggie burger doesn't have meat, so you can't cook the meat well */}
    <VeggieBurger>
      <Cook well/>
    </VeggieBurger>
  </>
);