describe("AccountLog", function() {
  var accountLog;

  beforeEach(function() {
    accountLog = new AccountLog();
  });

  it("can add deposits", function() {
    var deposit = 'deposit'
    accountLog.addDeposit(deposit);
    expect(accountLog.deposits[0]).toEqual('deposit');
  });

  it("can add withdrawals", function() {
    var withdrawal = 'withdrawal'
    accountLog.addWithdrawal(withdrawal);
    expect(accountLog.withdrawals[0]).toEqual('withdrawal');
  });
})
