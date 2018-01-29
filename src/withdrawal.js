function Withdrawal(amount, dateAsString) {
  this.amount = amount;
  this.date = this.formatDate(dateAsString);
};

Withdrawal.prototype.formatDate = function(dateAsString) {
  var parts = dateAsString.split('-');
  var date = new Date(parts[2], parts[1] - 1, parts[0]);
  return date
}
