var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "Bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  runSearch();
});

var runSearch = function() {
  inquirer.prompt({
    name: "action",
    type: "list",
    message: "What ID of the product they would like to buy",
    choices: ["1", "2",
      "3", "4", "5", "6", "7", "8", "9", "10"]
  }).then(function(answer) {

    switch (answer.action) {
      case "1":
        artistSearch();
        break;

      case "2":
        multiSearch();
        break;

      case "3":
        rangeSearch();
        break;

        case "4":
        rangeSearch();
        break;

        case "5":
        rangeSearch();
        break;

        case "6":
        rangeSearch();
        break;

        case "7":
        rangeSearch();
        break;

        case "8":
        rangeSearch();
        break;

        case "9":
        rangeSearch();
        break;

      case "10":
        songSearch();
        break;
    }
  });
};

var artistSearch = function() {
  inquirer.prompt({
    name: "stock",
    type: "input",
    message: "Ask how many units of the product they would like to buy"
  }).then(function(answer) {
    var query = "SELECT item_id, product_name, stock_quantity FROM products WHERE ?";
    connection.query(query, { artist: answer.artist }, function(err, res) {
      for (var i = 0; i < res.length; i++) {
        console.log("Item ID: " + res[i].item_id + " || Product Name: " + res[i].product_name + " || Stock_quantity: " + res[i].product_name);
      }
      runSearch();
    });
  });
};

