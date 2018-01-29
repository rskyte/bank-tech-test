DEFAULT_BALANCE = 0;

function Account(accountLog = new AccountLog()) {
  this.balance = DEFAULT_BALANCE;
  this.accountLog = accountLog;
};

Account.prototype.deposit = function(amount, dateAsString) {
  var deposit = this.accountLog.makeDeposit(amount, dateAsString);
  this.applyTransaction(deposit, "deposit");
};

Account.prototype.withdraw = function(amount, dateAsString) {
  var withdrawal = this.accountLog.makeWithdrawal(amount, dateAsString);
  this.applyTransaction(withdrawal, "withdraw");
};

Account.prototype.applyTransaction = function(transaction, type) {
  var amount = (type == "deposit" ? transaction.amount : -transaction.amount);
  this.balance += amount;
  transaction.addBalance(this.balance)
};
