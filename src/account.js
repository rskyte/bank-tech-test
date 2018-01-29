DEFAULT_BALANCE = 0;

function Account(accountLog = new AccountLog()) {
  this.balance = DEFAULT_BALANCE;
  this.accountLog = accountLog;
};

Account.prototype.deposit = function(amount, date) {
  var deposit = new Deposit(amount, date);
  this.accountLog.addDeposit(deposit);
  this.applyTransaction(deposit, "deposit");
};

Account.prototype.withdraw = function(amount, date) {
  var withdrawal = new Withdrawal(amount, date);
  this.accountLog.addWithdrawal(withdrawal);
  this.applyTransaction(withdrawal, "withdraw");
};

Account.prototype.applyTransaction = function(transaction, type) {
  var amount = type == "deposit" ? transaction.amount : -transaction.amount;
  this.balance += amount;
};
