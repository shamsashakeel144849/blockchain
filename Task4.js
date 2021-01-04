document.write("<h1>Marks sheet</h1>");
document.write("<br>");
var totalmarks = prompt("Total marks:");
var obtainedmarks = prompt("Marks obtained;");
 var m = ("Total marks:")
var n = ("Marks obtained:")
document.write(m+totalmarks);
document.write("<br>");
document.write(n+obtainedmarks);
document.write("<br>");
var percent = (obtainedmarks*100/totalmarks);
document.write("percentage:"+percent+"%");
document.write("<br>");
var a = ("Grades:");
var b = ("Remarks:");
if(percent>=80 && percent<=100){
    document.write(a+"A-one"+"<br>"+b+"Exellent");
}
else if(percent>=70 && percent<80){
    document.write(a+"A"+"<br>"+b+"Good");
}
else if(percent>=60 && percent<70){
    document.write(a+"B"+"<br>"+b+"You need to improve");
}
else{
    document.write(a+"Fail"+"<br>"+b+"Sorry");
}
