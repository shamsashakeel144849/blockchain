document.write("<h1>Calculator</h1>");
var num1 = prompt("enter 1st number");
var num2 = prompt("enter 2nd number");
var operator = prompt("enter operator in +,-,*,/,%");
if(operator==='+') {
    document.write("your calculation is :"+parseInt(num1)+parseInt(num2));
}
 if(operator==='-') {
    document.write("your calculation is :"+parseInt(num1)-parseInt(num2));
 }
 if(operator==='*') {
  document.write("your calculation is :"+parseInt(num1)*parseInt(num2));
}
 if(operator==='/') {
document.write("your calculation is :"+parseInt(num1)/parseInt(num2));  
 }
 if(operator==='%') {
   document.write("your calculation is :"+parseInt(num1)%parseInt(num2));
}