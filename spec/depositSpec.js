describe("Deposit", function() {
  var deposit;

  beforeEach(function(){
    deposit = new Deposit(10, "29-1-2018");
  });

  it("is created with an amount and a date", function(){
    expect(deposit.amount).toEqual(10);
    expect(deposit.date).toEqual("29-1-2018");
  });
});
