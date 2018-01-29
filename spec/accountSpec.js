describe("Account", function() {
  var account;
  var accountLog;
  var transaction;

  beforeEach(function() {
    creditTransaction = function(amount, dateAsString) { return { "amount": amount,
                                                            addBalance: function(){},
                                                            "type": "credit" } };
    debitTransaction = function(amount, dateAsString) { return { "amount": amount,
                                                                  addBalance: function(){},
                                                                  "type": "debit" } };
    accountLog = { makeDeposit: creditTransaction,
                   makeWithdrawal: debitTransaction,
                   printStatement: function(){} };
    jasmine.createSpy("accountLog", "printStatement");
    account = new Account(accountLog);
  });

  it("should have a balance which begins at 0", function() {
    expect(account.balance).toEqual(0);
  });

  it("can make deposits", function() {
    account.deposit(3);
    expect(account.balance).toEqual(3);
  });

  it("can make withdrawals", function() {
    account.deposit(5);
    account.withdraw(2);
    expect(account.balance).toEqual(3);
  });

  it("calls print statement on accountLog", function() {
    spyOn(accountLog, ['printStatement'])
    account.printStatement();
    expect(accountLog.printStatement).toHaveBeenCalled();
  });
});
