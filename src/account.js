DEFAULT_BALANCE = 0

function Account() {
  this.balance = DEFAULT_BALANCE
}

Account.prototype.deposit = function(amount, date) {
  var deposit = new Deposit(amount, date)
  this.applyTransaction(deposit, "deposit")
}

Account.prototype.withdraw = function(amount, date) {
  var withdrawal = new Withdrawal(amount, date)
  this.applyTransaction(withdrawal, "withdraw")
}

Account.prototype.applyTransaction = function(transaction, type) {
  var amount = type == "deposit" ? transaction.amount : -transaction.amount
  this.balance += amount
}
