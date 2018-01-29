function AccountLog() {
  this.deposits = [];
  this.withdrawals = [];
};

AccountLog.prototype.addDeposit = function(deposit) {
  this.deposits.push(deposit);
};

AccountLog.prototype.addWithdrawal = function(withdrawal) {
  this.withdrawals.push(withdrawal);
};

AccountLog.prototype.makeDeposit = function(amount, date) {
  var deposit = new Deposit(amount, date);
  this.addDeposit(deposit);
  return deposit;
};

AccountLog.prototype.makeWithdrawal = function(amount, date) {
  var withdrawal = new Withdrawal(amount, date);
  this.addWithdrawal(withdrawal);
  return withdrawal;
};
