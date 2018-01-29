function AccountLog() {
  this.deposits = []
  this.withdrawals = []
}

AccountLog.prototype.addDeposit = function(deposit) {
  this.deposits.push(deposit)
}

AccountLog.prototype.addWithdrawal = function(withdrawal) {
  this.withdrawals.push(withdrawal)
}
