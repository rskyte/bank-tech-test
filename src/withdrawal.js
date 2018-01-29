function Withdrawal(amount, date = new Date()) {
  this.amount = amount;
  this.date = date;
  this.balance;
};

Withdrawal.prototype.addBalance = function(num) {
  this.balance = num;
};
