describe("Withdrawal", function() {
  var withdrawal;

  beforeEach(function(){
    withdrawal = new Withdrawal(10, new Date(2018,0,29));
  });

  it("is created with an amount and a date", function(){
    expect(withdrawal.amount).toEqual(10);
    expect(withdrawal.date).toEqual(new Date(2018,0,29));
  });

  it("can add a balance attribute", function(){
    withdrawal.addBalance(10);
    expect(withdrawal.balance).toEqual(10);
  });
});
