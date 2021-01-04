var timezone = prompt("please enter your time");
if(timezone>=0000 && timezone<1200){
    alert("Good morning!");
}
else if(timezone>=1200 && timezone<1700){
    alert("Good afternoon!");
}
else if(timezone>=1700 && timezone<2100){
    alert("Good evening!");
}
else {
    alert("Good night!");
}