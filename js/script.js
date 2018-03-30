var a = prompt("Enter a numerical value for 'a'.");
  alert("Your numerical value 'a' is equal to: " + a + ".");
  console.log (a);
var b = prompt("Enter a numerical value for 'b'.");
  alert("Your numerical value 'b' is equal to: " + b + ".");
  console.log (b);
alert("Let's do some math and see how much is (a * a ) - (2* a * b) - (b * b), al right?");
var myValue = ((a * a ) - (2* a * b) - (b * b));
document.write("The result of the operation is:" + myValue + ". ");
console.log(myValue);
  if (myValue > 0) {
    document.write("The result of the operation is a positive number equal to :" + myValue + ". ");
    console.log(myValue);
  }
  else if (myValue < 0) {
    document.write("The result of the operation is a negative number equal to :" + myValue + ". ");
    console.log(myValue);
  }
  else if (myValue == 0 ) {
    document.write("The result of the operation is equal to: zero.");
  }
