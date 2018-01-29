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

AccountLog.prototype.makeDeposit = function(amount, dateAsString) {
  var deposit = new Deposit(amount, dateAsString);
  this.addDeposit(deposit);
  return deposit;
};

AccountLog.prototype.makeWithdrawal = function(amount, dateAsString) {
  var withdrawal = new Withdrawal(amount, dateAsString);
  this.addWithdrawal(withdrawal);
  return withdrawal;
};

AccountLog.prototype.printStatement = function(printer = new Printer()) {
  var orderedTransactions = this.orderTransactions();
  printer.printStatement(orderedTransactions)
};

AccountLog.prototype.orderTransactions = function() {
  var transactions = this.deposits.concat(this.withdrawals);
  transactions.sort(function(a, b) {
    var dateA = a.date, dateB = b.date;
    return dateA - dateB;
  });
  return transactions
};
