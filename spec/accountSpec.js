describe("Account", function() {
  var account;
  var accountLog;
  var transaction;

  beforeEach(function() {
    transaction = function(amount, dateAsString) { return { 'amount': amount,
                                                            addBalance: function(){} } }
    accountLog = { makeDeposit: transaction, makeWithdrawal: transaction }
    account = new Account(accountLog);
  });

  it("should have a balance which begins at 0", function() {
    expect(account.balance).toEqual(0);
  });

  it("can make deposits", function() {
    account.deposit(3, "19-2-2017");
    expect(account.balance).toEqual(3);
  })

  it("can make withdrawals", function() {
    account.deposit(5, "19-2-2017");
    account.withdraw(2, "19-2-2017");
    expect(account.balance).toEqual(3);
  });
});
