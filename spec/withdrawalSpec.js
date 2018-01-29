describe("Withdrawal", function() {
  var withdrawal;

  beforeEach(function(){
    withdrawal = new Withdrawal(10, "29-1-2018");
  });

  it("is created with an amount and a date", function(){
    expect(withdrawal.amount).toEqual(10);
    expect(withdrawal.date).toEqual(Mon Jan 29 2018 00:00:00 GMT+0000 (GMT));
  });

  it("turns date string into date object", function(){
    expect(withdrawal.date).toEqual(jasmine.any(Date));
  });
});
