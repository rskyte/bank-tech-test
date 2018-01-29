describe("Deposit", function() {
  var deposit;

  beforeEach(function(){
    deposit = new Deposit(10, new Date(2018,0,29));
  });

  it("is created with an amount and a date", function(){
    expect(deposit.amount).toEqual(10);
    expect(deposit.date).toEqual(new Date(2018,0,29));
  });

  it("can add a balance attribute", function(){
    deposit.addBalance(10);
    expect(deposit.balance).toEqual(10);
  });
});
