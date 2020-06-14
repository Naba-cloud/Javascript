//1. Declare an empty array using JS literal notation to store student names in future.
var students=[];
//Declare an empty array using JS object notation to store student names in future.
var anotherstudent={};
//Declare and initialize a strings array
var names=["abc","saylani","welfare"];
//Declare and initialize a numbers array.
var numbers=[1,2,3,4,5,667,90,3456];
//Declare and initialize a boolean array.

var booleanarray=[true,false];
//6. Declare and initialize a mixed array
var mixedarray={
    gender:"female",
    phone:23,
    color:"yellow"


};
//7. Declare and Initialize an array and store available
//education qualifications in Pakistan (e.g. SSC, HSC, BCS,
//BS, BCOM, MS, M. Phil., PhD). Show the listed
//qualifications in your browser like:
var qualifications=[" SSC", "HSC", "BCS","BS", "BCOM", "MS", "M. Phil.", "PhD"];

document.write("<br><br> 1.".bold(),qualifications[0].bold());
document.write("<br><br> 2 .".bold(),qualifications[1].bold());
document.write("<br><br> 3 .".bold(),qualifications[2].bold());
document.write("<br><br> 4 .".bold(),qualifications[3].bold());
document.write("<br><br> 5 .".bold(),qualifications[4].bold());
document.write("<br><br> 6 .".bold(),qualifications[5].bold());
document.write("<br><br> 7 .".bold(),qualifications[6].bold());
document.write("<br><br> 8 .".bold(),qualifications[7].bold());

//Write a program to store 3 student names in an array.Take another array to store score of these three students.Assume that total marks are 500 for each student, displayhe scores & percentages of students like:
students=["Michael","John","Tony"];
var score=[320,230,480];
var totalmarks=500;
var percentage1=(score[0]/500)*100;
document.write("<br> <br> Score Of"+students[0]+"is"+score[0]+"."+"Percentage"+percentage1);

var percentage2=(score[1]/500)*100;
document.write("<br> <br> Score Of"+students[1]+"is"+score[1]+"."+"Percentage"+percentage2);

var percentage3=(score[2]/500)*100;
document.write("<br> <br> Score Of"+students[2]+"is"+score[2]+"."+"Percentage"+percentage3);

//Initialize an array with color names. Display the array elements in your browser.
//a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser
var colors=["Red" + " " + " " + "Green" + " " + "Yellow" + " " +"Pink"];
document.write("<br> <br>",colors);
alert("Which color you want to add at the begining of array");
var newcolor=prompt("Enter color")
colors.unshift(newcolor);
document.write("<br> <br> " + colors);
//Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser.
alert("Which Color you want to add at  the end of array");
var anothercolor=prompt("Enter Another color");
colors.push(anothercolor);
document.write("<br> <br>",colors);
//c. Add two more color to the beginning of the array.Display the updated array in your browser.d. Delete the first color in the array. Display the updated array in your browser.

alert("Now time to add two or more colors");
var color1=prompt("Enter first color to add at the beginning of array");
colors.unshift(color1);
document.write("<br> <br>" +colors);
var color2=prompt("Enter second color to add at the beginning of array");
colors.unshift(color2);
document.write("<br> <br>" +colors);
//Delete the last color in the array. Display the updated array in your browser.
colors.pop();
document.write("<br> <br>",colors);
// Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in yourbrowser

var i;
i=+prompt(" Enter which position you want to add color");
alert("Which color do you want to add");
colors[i]=prompt("Enter color");
document.write("<br> <br> <br> <br> ",colors);
//g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then
alert("Enter to delete array element from function");
var index=+prompt("Enter the index  where you want to delete array");
var colornumber=+prompt("Enter how many colors you want to delete");
if(colornumber==1 && index==0)
{
    colors.shift();
    document.write("<br> <br> <br> <br>"+colors);
}
else if(colornumber==1 && index==1)
{
   colors.splice(1,2);
}

else if(colornumber==1 && index==2)
{
    colors.splice(2,3)
}
else if(colornumber==1 && index==3)
{
    colors.splice(2,3)
}
else if(colornumber==1 && index==4)
{
    colors.splice(3,4)
}
else if(colornumber==1 && index==5)
{
    colors.splice(4,5);
}

//Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.
var scores=[380,230,280,120];
scores.sort();
document.write("<br> <br> "+scores);
//Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.
var cities=["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
var selectedcities=[];
selectedcities=cities[2];
document.write(selectedcities);
selectedcities=cities[3];
document.write(selectedcities);
//12. Write a program to create a single string from the below mentioned array:
var arr = ["This " +" is" + "my"+ "cat"];
arr.join(" ");
document.write(arr);
//Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)
var istarray=["keyboard","mouse","printer","monitor"];

for(i=0;i<4;i++)
{
    document.write("<br> <br>" +istarray[i]);
}
//Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last InFirst Out)
var newarr=["keyboard","mouse","printer","monitor"];
for(i=3;i>=0;i--)
{
    document.write("<br> <br>" +newarr[i]);
}
//Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. Display the following dropdown/select menu in your browser using document.write() method:

document.write("<br> <br> <select><option>Apple</option><option>Samsung</option><option>Motorola</option><option>Nokia</option><option>Haier</option><option>Sony</option>Manufacturers</select>");