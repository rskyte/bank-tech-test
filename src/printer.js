function Printer() {}

Printer.prototype.printStatement = function(transactions) {
  console.log("date || credit || debit || balance\n")
  for(var i = 0;i < transactions.length;i++) {
    console.log(this.formatTransaction(transactions[i]))
  }
}

Printer.prototype.formatTransaction = function(transaction) {
  var credit;
  var debit;
  var date = transaction.date.toLocaleDateString();
  var balance = transaction.balance.toFixed(2);
  if(transaction.type == "credit") {
    credit = transaction.amount.toFixed(2);
    debit = '';
  } else {
    credit = '';
    debit = transaction.amount.toFixed(2);
  };
  var formattedString = date + " || " + credit + " || " + debit + " || " + balance + "\n";
  return formattedString;
};
