describe("Printer", function(){
  var printer;

  beforeEach(function() {
    printer = new Printer();
  });

  it("can format transactions", function() {
    var transaction = { date: new Date(2018,0,29), amount: 10, balance: 10 };
    expect(printer.formatTransaction(transaction)).toEqual("29/01/2018 ||  || 10.00 || 10.00\n");
  });
});
