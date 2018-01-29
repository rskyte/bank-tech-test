function Deposit(amount, date = new Date()) {
  this.amount = amount;
  this.date = date;
  this.balance;
};

Deposit.prototype.addBalance = function(num) {
  this.balance = num;
};
