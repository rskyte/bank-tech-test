describe("Account", function() {
  var account;

  beforeEach(function() {
    account = new Account();
  });

  it("should have a balance which begins at 0", function() {
    expect(account.balance).toEqual(0);
  });

  it("can make deposits", function() {
    account.deposit(3, "19-2-2017");
    expect(account.balance).toEqual(3);
  })


});
