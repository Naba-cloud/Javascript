//task 1
var number=3.45214;
var roundnumber=Math.round(number);
var floorvalue=Math.floor(number);
var ceilvalue=Math.ceil(number);
document.write("<br> <br> number :" +number);
document.write("<br> <br> Round off value :" +roundnumber);
document.write("<br> <br> floor value :" +floorvalue);
document.write("<br> <br> Round off value :" +ceilvalue);

//task2
var number1=-2.673;
var roundnumber=Math.round(number1);
var floorvalue=Math.floor(number1);
var ceilvalue=Math.ceil(number1);
document.write("<br> <br> number :" +number1);
document.write("<br> <br> Round off value :" +roundnumber);
document.write("<br> <br> floor value :" +floorvalue);
document.write("<br> <br> Round off value :" +ceilvalue);

//task 3
var input=+prompt("Enter Number")
var absolutevalue=Math.abs(input);
document.write("<br> <br> absolute value is "+absolutevalue);

//task 4
var dice=Math.random();
var impnum=(dice*6)+1;
var final=Math.floor(impnum);
document.write("<br> <br> random dice value "+final);
//task 5
var coin=Math.random();
var toss=((coin*2)+1);
var finalvalue=Math.floor(toss);
if(finalvalue==1)
{
document.write("<br> <br>"+finalvalue+"<br> <br> random coin value : tails <br>");
}
else if(finalvalue==2)
{
 document.write("<br> <br>"+finalvalue+ "<br> <br> random coin value : heads");   
}
//task 6
var generate=Math.random();
generate=((generate*100)+1);
var fval=Math.floor(generate);
document.write("<br> <br> random number between 1 and 100 is : "+fval);
//task 7
// var weight=+prompt("Enter weight");

var a =prompt("enter your weight")
var b =parseFloat(a);
 
document.write(b+"kilograms");



//task 8
var val=8;
var gen=+prompt("Enter number")
if(gen===val)
{
   alert(" Congratulations");
}
else{
    alert(" Try Again !");
}

