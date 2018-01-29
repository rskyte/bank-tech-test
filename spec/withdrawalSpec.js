describe("Withdrawal", function() {
  var withdrawal;

  beforeEach(function(){
    withdrawal = new Withdrawal(10, "29-1-2018");
  });

  it("is created with an amount and a date", function(){
    expect(withdrawal.amount).toEqual(10);
    expect(withdrawal.date).toEqual("29-1-2018");
  });
});
