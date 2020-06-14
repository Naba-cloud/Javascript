//Question 1
var cityName=prompt("Enter City Name");
if(cityName=="Karachi" || cityName=="karachi")
{
    alert("Welcome to City Of Lights");
}
else
{
    alert("Hey Welcome to Beautiful World");
}

//Question 2
var gender;
gender=prompt("Enter Your Gender");
if(gender=="male")
{
    document.write("Good Mornig Sir");
}
else if(gender=="female");
{
    document.write("Good Morning M'aam");
}

//Question 3
var signalcolor;
signalcolor=prompt("Enter Signal Color");
if(signalcolor=="Red")
{
    document.write("<br><br> Must Stop");
}
else if(signalcolor=="Yellow")
{
    document.write("<br><br>Ready To Move");
}
else if(signalcolor=="Green")
{
    document.write("<br><br>Move Now");
}
//Question 4
var fuel=+prompt("Enter Fuel");
if(fuel<0.25)
{
    document.write("<br> Please refill the fuel in a car");
}
else{
    document.write("<br> Enough fuel for driving");
}
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
//yes in above alert box displaye
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

//nO IN ABOVE Alert box not displayed because If condition is not true
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
    alert("condition 2 is true");
    }
    if (++c < 14){
    alert("condition 3 is true");
    }
    if(c === 14){
    alert("condition 4 is true");
    }
    
// IN ABOVE Alert box  displayed for condition 2 and  4 because of condition is true
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
//alert displayed.
if (true){
    alert("True");
    }
    if (false){
    alert("False");
    }


    if("car" < "cat"){
        alert("car is smaller than cat");
        }
        
       document.write("<br> <h1>Marksheet</h1>");
      var sub1=+prompt("Enter Marks Of First Subject");
      var sub2=+prompt("Enter Marks Of Second Subject");
      var sub3=+prompt("Enter Marks of Third subject");
      var totalMarks=+prompt("Enter Total Marks");
      var percentage;
      percentage=((sub1+sub2+sub3)/totalMarks)*100;
      var Grade;
    var obtainedmarks=sub1+sub2+sub3;
      document.write("<br><br><br><br> Total Marks : "+totalMarks);
      document.write("<br><br> Obtained : "+obtainedmarks);
      document.write("<br><br> Percentage : "+percentage);
     if(percentage>=80)
     {
         Grade=" A-one: ";
         document.write("<br>",Grade);
         document.write("<br> Excellent");
     }
     else if(percentage>=70)
     {
        Grade=" A: ";
        document.write("<br>",Grade);
        document.write("<br> Good");
     }
     else if(percentage>=60)
     {
        Grade=" B: ";
        document.write("<br>",Grade);
        document.write("<br> You Need To Improve");
     }
 else if(percentage<60)
 {
    Grade=" F: ";
    document.write("<br>",Grade);
    document.write("<br> Sorry");
 }
 //Guess Game
 var secretNumber=5;
 var guessNumber=+prompt("Enter Number To Guess");
 if(guessNumber===secretNumber)
 {
     document.write("Bingo! Correct");
 }
 else if(guessNumber==secretNumber+1)
 {
    document.write("<br><br>Close enough to the correct answer");
 }
 //Number Divisible By 3
 var number;
 number=+prompt("Enter Number");
 if(number%3==0)
 {
     document.write("<br> Number you entered is divisible by 3")
 }
 else
 {
    document.write("<br> Number you entered is not divisible by 3")
 }
 //number input check even or odd
 var number1;
 number1=+prompt("Enter Number");
 if(number1%2==0)
 {
     document.write("<br><br> Even Number");
 }
 else if(number1%2!=0) 
 {
     document.write("<br> <br> odd number");
 }
 //Question 10
 //Write a program that takes temperature as input and shows a message based on following criteria
 var temperature;
 temperature=+prompt("Enter Temperature");
 if(temperature > 40)
 {
     document.write("<br> <br> “It is too hot outside. ");
 }
 else if(temperature >30)
 {
    document.write("<br> <br> “ The Weather today is Normal.");
 }
 else if(temperature>20)
 {
    document.write("<br> <br> “ Today’s Weather is cool.");
 }
 else if(temperature>10)
 {
    document.write("<br> <br> OMG! Today’s weather is so Cool.");
 }
 //Question 11
 //Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:
//a. First number
//b. Second number
//c. Operation (+, -, *, /, %)
//Compute & show the calculated result to user.
var firstNumber=+prompt("Enter First Number");
var secondNumber=+prompt("Enter Seconf Number ");
var Operation=prompt("enter operation to perform chooose from + - / * %");
if(Operation=="+")
{
   var sum=firstNumber+secondNumber;
   document.write("<br> <br> ",sum);

}
else if(Operation=="-")
{ 
    alert("Enter If you want to subtract first number from second number  or second from first number");
    var character=prompt("Enter character F for First number and S for second number")
    if(character=='F')
    {
    var difference=firstNumber-secondNumber;
    document.write("<br> <br> ",difference);
    }
    else if(character=='S')
    {
        var difference=secondNumber-firstNumber;
        document.write("<br> <br> ",difference);
    }

}
else if(Operation=="/")
{
    if(secondNumber==0)
    {
        document.write("<br><br <br>Infinity");
    }
    else
    {
    var division=firstNumber/secondNumber;
    document.write("<br> <br> ",division);
    }

}
else if(Operation=="*")
{
    var multiplication=firstNumber*secondNumber;
    document.write("<br> <br> ",multiplication);

}
else if(Operation=="%")
{  
    
    
    var remainder=firstNumber%secondNumber;
    document.write("<br> <br> ",remainder);
    

}