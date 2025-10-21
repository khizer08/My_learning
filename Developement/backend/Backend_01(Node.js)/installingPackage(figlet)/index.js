const figlet = require("figlet"); // for packages need not to add slash

figlet("huehueguegu", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});