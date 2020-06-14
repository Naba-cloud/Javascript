var number;
alert("Enter Number Or Character to check whether the given input is uppercase letter or lowercase letter");
var numb=prompt("Enter n for number and s for string")

if(numb=="n" || numb=="N")
 {   
number=+prompt("Enter Number")

if(number>=65||number>=90)
{
    document.write("Upper Case Letter");

}
else if(number>=97 || number>=122)
{
    document.write("Lower Case Letter");
}
 }
 
 else if(numb=="s"|| numb=="S")
 {
    number=prompt("Enter Character");
    if(number<="A"||number<="Z")
    {
        document.write("Uppercase ltter");

    }
    else if(number<="a" || number <="z")
    {
        document.write("Lowercase letter");
    }
 }

// Question 2Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.
var number1,number2;
number1=+prompt("Enter First Number");
number2=+prompt("Enter Second Number");
if(number1>number2)
{
    document.write("<br><br><br><br> Number1 is larger");
}
else if(number2>number1)
{
    document.write("<br><br><br><br> Number 2 is larger than number 1")
}
else if(number1==number2)
{
    document.write("Both Numbers Are Equal");
}
//3. Write a program that takes input a number from user & state whether the number is positive, negative or zero.
alert("ENTER A NUMBER TO CHECK WHETHER A NUMBER IS POSITIVE , NEGATIVE OR ZERO");
var number3=+prompt("Enter a number");
if(number3>0)
{
    document.write("<br><br> Positive");
}
else if(number3<0)
{
    document.write("<br> <br> Negative");
}
else if(number==0)
{
    document.write("<br> <br> Number is 0")
}
//Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise
alert("ENTER A CHARACTER");
var char=prompt("Enter character");
var len=char.length=1;
if(char.length==1)
{

if (char=='a'|| char=='e' || char=='i' || char=='o' || char=='u')
{
    console.log(true);
}
else{
    console.log(false);
}
}
else
{
    console.log("ENTER ONLY ONE CHARACTER");
}
//Write a program that a. Store correct password in a JS variable.
////b. Asks user to enter his/her password
//c. Validate the two passwords:
//i. Check if user has entered password. If not, then
//give message “ Please enter your password”
//ii. Check if both passwords are same. If they are
//same, show message “Correct! The password you
//entered matches the original password”. Show
//“Incorrect password” otherwise.
var passWord="romancaliph";

if( userPassword=prompt("Enter Password"))
{
    if(passWord==userPassword)
    {
        alert("“Correct! The password you entered matches the original password");
    }
    else 
    {
        alert("Incorrect password” otherwise");
    }
}
else{
    alert("please enter your password");
}
//6. This if/else statement does not work. Try to fix it:
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}
else
{
greeting = "Good evening";
}

//7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements
var time;
time=+prompt("Enter Time");
if(time>=0000 && time<1200)
{
    console.log("Good Morning!");
}
else if(time>=1200 && time<1700)
{
    console.log("Good After Noon!");

}
else if(time>=1700 && time<2100)
{
    console.log("Good Evening");
}
else if(time>=2100 && time<=2359)
{
    console.log("Good Night!");
}