describe("AccountLog", function() {
  var accountLog;

  beforeEach(function() {
    accountLog = new AccountLog();
  });

  it("can add deposits", function() {
    var deposit = 'deposit';
    accountLog.addDeposit(deposit);
    expect(accountLog.deposits[0]).toEqual('deposit');
  });

  it("can add withdrawals", function() {
    var withdrawal = 'withdrawal';
    accountLog.addWithdrawal(withdrawal);
    expect(accountLog.withdrawals[0]).toEqual('withdrawal');
  });

  it("can create deposits", function() {
    expect(accountLog.makeDeposit(3)).toEqual(jasmine.any(Deposit));
  });

  it("can create withdrawals", function() {
    expect(accountLog.makeWithdrawal(3)).toEqual(jasmine.any(Withdrawal));
  });

  it("asks printer to print a bank statement", function() {
    var printer = jasmine.createSpyObj('myPrinter', ['printStatement']);
    accountLog.printStatement(printer);
    expect(printer.printStatement).toHaveBeenCalled();
  });

  it("orders transactions by date", function() {
    var laterDeposit = accountLog.makeDeposit(3)
    var earlierDeposit = accountLog.makeDeposit(3, new Date(2018,0,26))
    expect(accountLog.orderTransactions()).toEqual([earlierDeposit, laterDeposit])
  })
});
