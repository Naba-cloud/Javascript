//1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name
var firstName,lastName;
firstName=prompt("ENTER FIRST NAME ");
lastName=prompt(" Enter Last Name");
var fullName;
fullName=firstName + " " + lastName;
document.write("<br> <br> Welcome "+"\t"+ fullName);
 
//Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser
var phonemodel;
phonemodel=prompt("Enter Model Number");
document.write("<br> <br> Length of string is "+ phonemodel.length);
//Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser .

var name="Pakistani";
index=name.length-2;
document.write("<br> <br> String :" +name);
document.write("<br> <br> index of 'n' "+index);
//Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.
var value="Hello World";
var lastindex=value.length-2;
document.write("<br> <br> String : " +value);
document.write("<br> <br> Last index of 'l' : " +lastindex);
//Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.
document.write("<br> <br> STRING:"+name);
var characterthirdindex=name[3];
document.write("<br> <br> Character at index 3 is " +characterthirdindex);
//Repeat Q1 using string concat() method.
var firstName,lastName;
firstName=prompt("ENTER FIRST NAME ");
lastName=prompt(" Enter Last Name");
var fullName;
fullName.concat(firstName,lastName);
document.write("<br> <br> Welcome "+"\t"+ fullName);
//Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.
var city="Hyderabad";
document.write("<br> <br> City : "+city);

document.write("<br> <br> After Replacement :"+city.replace("Hyder","Islam"));

//8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.
var message="Ali and Sami are best friends. They play cricket and football together.";
for(i=0;i<message.length;i++)
{
    message=message.replace("and","&");
}

document.write("<br>" +message);

//9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser.
var str="472";
document.write("<br> <br> Value "+str);
document.write("<br> <br> Type "+typeof(str));
document.write("<br> <br> Value "+parseInt(str) +"<br> Type:" +typeof(parseInt(str)));
//Write a program that takes user input. Convert and show the input in capital letters.

var peanuts="peanuts";
document.write("<br> <br> User Input : " +peanuts);
document.write("<br> Upper case : "+peanuts.toUpperCase());

//Write a program that takes user input. Convert and show the input in title case.
var programmingLanguage=prompt("ENTER SOMETHING");
document.write("<br> <br> USER INPUT:" +programmingLanguage);
document.write("<br> <br> Titlescript : "+programmingLanguage.replace(programmingLanguage[0],programmingLanguage[0].toUpperCase()));

//Write a program that converts the variable num to string.
var num = 35.36 ;
var str=num.toString();
document.write("<br> <br>"+str.replace(".",""));
//Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. For character codes of 
var input=prompt("ENTER USERNAME");
for(i=0;i<input.length;i++)
{
    if(input.charCodeAt(i)==33 || input.charCodeAt(i)==44||input.charCodeAt(i)==46 ||input.charCodeAt(i)==64)
{
    alert("Enter valid username");
}
}

//task 14.
A = ["cake", "apple pie", "cookie", "chips", "patties"];
var bakery=prompt("Enter bakery product")

    if(bakery=="cake"||bakery=="Cake"||bakery=="Cake"||bakery=="caKe")
    {
        document.write(bakery+"is available"+"@ index "+[0]+"in our bakery");
        
    }
    if(bakery=="cookie"||bakery=="Cookie"||bakery=="COOKIE"||bakery=="coOkIE")
    {
        document.write(bakery+"is available"+"@ index "+[1]+"in our bakery");
        
    } if(bakery=="apple pie"||bakery=="APPLE PIE"||bakery=="Apple Pie"||bakery=="ApplE PIe")
    {
        document.write(bakery+"is available"+"@ index "+[2]+"in our bakery");
        
    }
    if(bakery=="chips"||bakery=="Chips"||bakery=="CHIPS"||bakery=="chIPs")
    {
        document.write(bakery+"is available"+"@ index "+[3]+"in our bakery");
        
    }
    if(bakery=="pastry"||bakery=="Pastry"||bakery=="PASTRY"||bakery=="pAsTry")
    {
        document.write(bakery+"is available"+"@ index "+[4]+"in our bakery");
        
    }
    else{
        document.write("we Are Sorry"+bakery+"is "+"not avaialable".bold() +  "in our bakery");
    }


//task-15

var password;
password=prompt("Enter Password");
var j=password.length;
k=password.charCodeAt(48);
l=password.charCodeAt(65);
m=password.charCodeAt(97);
if(j==6)
{
    for(i=0;i<password.length;i++)
    {
        for(k=0;k<9;k++)
        {
         if(password[0]==k[i])
         {
             alert("Enter valid password password cannot be start with a number");
             
            }
            break;
            
        }
       
        for(l=0,m=0,k=0;l<25,m<25,k<9;l++,m++,k++)
        {
           if(password[i]!=l[i]&&password[i]!=m[i]&&password[i]!=k[i])
           alert("invalid password");
            break;
            
        }

    break;
        
    }
    
}
else{
    alert("Inavlid Password password must contain letter and numbers and only 6 characters yout password cannor start with a number");
}




//task16
var university = "University of Karachi";
var arr=[];

arr=university.split('');
for(i=0;i<arr.length;i++)
{
document.write("<br>",arr[i]);
}

//task 17
var usrnme=prompt("Enter  Name  To Find lastindex");
document.write("<br> <br> Usr Input :" +usrnme);
var a=usrnme.charAt(usrnme.length-1);
document.write("<br> <br> Last character of input " +a);
//task 18
var str="The quick brown fox jumps over the lazy dog";
var array1=[];
 array1=str.split(' ');
count=0;
for(i=0;i<array1.length;i++)
{
   if(array1[i]=="The"||array1[i]=="the")
   {
       count=count+1;
   }
}
document.write(count);



