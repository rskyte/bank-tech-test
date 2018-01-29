describe("Withdrawal", function() {
  var withdrawal;

  beforeEach(function(){
    withdrawal = new Withdrawal(10, "29-1-2018");
  });

  it("is created with an amount and a date", function(){
    expect(withdrawal.amount).toEqual(10);
    expect(withdrawal.date).toEqual(new Date(2018,0,29));
  });

  it("turns date string into date object", function(){
    expect(withdrawal.date).toEqual(jasmine.any(Date));
  });

  it("can add a balance attribute", function(){
    withdrawal.addBalance(10);
    expect(withdrawal.balance).toEqual(10);
  });
});
