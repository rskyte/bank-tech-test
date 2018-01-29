function Deposit(amount, date = new Date()) {
  this.amount = amount;
  this.date = date;
  this.balance;
  this.type = "credit"
};

Deposit.prototype.addBalance = function(num) {
  this.balance = num;
};
