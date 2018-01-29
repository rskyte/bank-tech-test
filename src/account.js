DEFAULT_BALANCE = 0;

function Account(accountLog = new AccountLog()) {
  this.balance = DEFAULT_BALANCE;
  this.accountLog = accountLog;
};

Account.prototype.deposit = function(amount) {
  var deposit = this.accountLog.makeDeposit(amount);
  this.applyTransaction(deposit);
};

Account.prototype.withdraw = function(amount) {
  var withdrawal = this.accountLog.makeWithdrawal(amount);
  this.applyTransaction(withdrawal);
};

Account.prototype.applyTransaction = function(transaction) {
  var amount = (transaction.type == "credit" ? transaction.amount : -transaction.amount);
  this.balance += amount;
  transaction.addBalance(this.balance);
};

Account.prototype.printStatement = function() {
  this.accountLog.printStatement();
};
