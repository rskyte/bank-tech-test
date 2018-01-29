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
    account.deposit(3);
    expect(account.balance).toEqual(3);
  })

  it("can make withdrawals", function() {
    account.deposit(5);
    account.withdraw(2);
    expect(account.balance).toEqual(3);
  });
});
