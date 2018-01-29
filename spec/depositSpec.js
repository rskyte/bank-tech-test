describe("Deposit", function() {
  var deposit;

  beforeEach(function(){
    deposit = new Deposit(10, "29-1-2018");
  });

  it("is created with an amount and a date", function(){
    expect(deposit.amount).toEqual(10);
    expect(deposit.date).toEqual(Mon Jan 29 2018 00:00:00 GMT+0000 (GMT));
  });

  it("turns date string into date object", function(){
    expect(deposit.date).toEqual(jasmine.any(Date));
  });
});
