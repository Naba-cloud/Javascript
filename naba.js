//1. Declare and initialize an empty multidimensional array. (Array of arrays)
//Assignment Array
var multidimensionalarray=[[],[],[],[]];
//Declare and initialize a multidimensional array representing the following matrix:
var matrix=[[0,1,2,3],[1,0,1,2],[2,1,0,1]];
  for(j=0;j<3;j++)
    {
        console.log(" "+matrix[j]);
    }
//3. Write a program to print numeric counting from 1 to 10.
for(i=1;i<=10;i++)
{
    console.log(i);
}
//Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.
var tableno,length;
alert("Input table  Number");
tableno=+prompt("Enter Table Number");
alert("Input length");
length=+prompt("ENTER LENGTH OF TABLE");
for(i=1;i<=length;i++)
{
    document.write("<br> <br>"+ tableno ,"*" ,i + "="+tableno*i);
}
//5. Write a program to print items of the following array using for loop: fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]

var fruits=["apple","banana","mango","Orange","Strawberry"];
for(i=0;i<fruits.length;i++)
{
    document.write("<br> <br> Element at index "+i+" is " +fruits[i],"<br> <br>");
}

//Generate the following series in your browser. See example output.
document.write("Counting <br> <br> ".bold());
for(i=1;i<=15;i++)
{
 document.write("  "+i);

}
document.write("<br> <br>  Reverse Counting <br> <br> ".bold());
for(j=10;j>=1;j--)
{
    document.write(" "+j);
}
document.write("<br> <br> Even <br> <br> ".bold());
for(i=0;i<=20;i++)
{
    if(i%2==0)
    {
    document.write(" ",i);
    }

}
document.write("<br> <br> Odd <br> <br> ".bold());
for(i=0;i<=20;i++)
{
    if(i%2!=0)
    {
    document.write(" ",i);
    }

}
document.write("<br> <br> Series <br> <br> ".bold());
for(i=2;i<=20;i++)
{
    if(i%2==0)
    {
    document.write(" ",i+"k");
    }

}
//You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. ching, prompt the user whether the given item is found in the list or not. Example:
A=["cake","apple pie","cookie","chips","patties"];
var order=prompt("Welcome to ABC BAKERY SIR/MAAM,What you want to order");
if(order=="cake"||order=="Cake")
{
    document.write("<br> <br> cake is available at index "+ " "+ [0] +" in our bakery");
}
else if(order=="apple pie"||order=="Apple pie")
{
    document.write(" <br> <br> Apple Pie is available at index "+ " "+ [1] +" in our bakery");
}
else if(order=="cookie"||order=="Cookie")
{
    document.write("<br> <br> Cookie is available at index "+ " "+ [2] +" in our bakery");
}
else if(order=="chips"||order=="Chips")
{
    document.write("<br> <br> Chips is available at index "+ " "+ [3] +" in our bakery");
}
else if(order=="patties"||order=="Patties")
{
    document.write("Patties is available at index "+ " "+ [4] +" in our bakery");
}
else{
    document.write("<br> <br> We are sorry "+order+"is not available in our bakery");
}

//8.Write a program to identify the largest number in the given array.
var B= [24, 53, 78, 91,12];
var max=B[0]
for(var i=0;i<=B.length;i++)
{
    if(B[i]>max)
    {
       max=B[i];
       
    }
  
   
    else
    {
        continue;
    }
    
   
}
document.write("<br> <br>largest number in an array "+max);

//Write a program to identify the smallest number in the given array.

var C= [24, 53, 78, 91,12];
var min=C[0]
for(var i=0;i<=B.length;i++)
{
    if(B[i]<min)
    {
       min=B[i];
       
    }
  
   
    else
    {
        continue;
    }
    
   
}
document.write("<br> <br> Minimum element in array <br><br>"+min);
//Write a program to print multiples of 5 ranging 1 to 100.
document.write("<br> <br> Multiples of 5 <br>");
for (i=1;i<=100;i++)
{
    if(i%5==0)
    {
        document.write("  "+ i);
    }
}
