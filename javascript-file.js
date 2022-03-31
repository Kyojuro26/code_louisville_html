/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

function readuserinput() {
  var forminput= document.getElementById("username").value;
  console.log(forminput);
}

let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

let testEmails = ["notanemail.com", "workingexample@email.com", "another_working@somethingelse.org", "notworking@1.com"];

testEmails.forEach((address) => {
    console.log(regex.test(address))
});