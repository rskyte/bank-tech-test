DEFAULT_BALANCE = 0

function Account() {
  this.balance = DEFAULT_BALANCE
}

Account.prototype.deposit = function(amount, dateAsString) {
  this.balance += amount
}
