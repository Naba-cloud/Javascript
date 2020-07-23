//task 1
/*function displaydate()
{
    var now=Date();
    document.write(now);
}
displaydate();*/
//task 2
/*function greetUser()
{
    var firstName=prompt('Enter First Name');
    var lastName=prompt('Enter Last Name');
    var fullName=firstName+lastName;
    alert("HEY WHAT'S UP "+fullName);
}
greetUser();*/
//task 3
/*function sum()
{
var a=+prompt('Enter Fist Number');
var b=+prompt('Enter Second Number');
var sum=a+b;
alert(sum);
}
sum();*/
//task 4
/*function calculator()
{
    var a=+prompt("Enter No");
    var b=+prompt("Enter another number");
    var operator=prompt("enter operation to perform");
    if(operator=='+')
    {
        var sum=a+b;
        alert(sum);
    }
    else if(operator=='-')
    {
        var diff=a-b;
        alert(diff);
    }
    else if(operator=='*')
    {
        var mul=a*b;
        alert(mul);
    }
    else if(operator=='/')
    {
        var div=a/b;
        alert(div);
    }
    else if(operator=='%')
    {
        var rem=a%b;
        alert(rem);
    }
}
//task 5
calculator();*/
/*function square(a)
{
    a=+prompt('Enter No');
    alert(a*a);
}
square();*/
//task 6
// function factorial()
// {
//     var fact=1;
//     var x=+prompt('enter no');
//     if(x<0)
//      {        console.log('not exist');
//     }
//     else{
//         for(i=1;i<=x;i++)
//         {
//          fact=fact*i;

//         }
//         console.log(fact);
//     }
       
        

    
// }
// factorial();


//task 7
// function count()
// {
// var starno,endno;
// startno=+prompt('enter start no');
// endno=+prompt('enter last no');
// for(i=startno;i<=endno;i++)
// {
//     console.log(i);
// }
// }
// count();
//task 8

// function hyp()
// {
//     var base=+prompt('Enter Base');
//     var perp=+prompt('Enter Perpendicular');
   
//     function square()
//     {
//         var sq=(base*base)+(perp*perp);
//         console.log(sq);
//     }
//     square();
    
   
//     var result=(Math.sqrt(base*base)+(perp*perp));
//     console.log(result);
    
// }
// hyp();
//task 9(i)
// function areatrngle(width,height)
// {
//   var A=width*height;
//   console.log(A);
// }

// areatrngle(3,3);
//task 9(ii)
// function areatrngle(width,height)
// {
   
//     console.log(width*height);
// }

// var a,b;
// a=+prompt('enter width');
// b=+prompt('enter height');
// areatrngle(a,b);
//task 10
// function palindrome()
// {
// var str=prompt('enter string');
// var a=str[0];
// var b=str.charAt(str.length-1);
// if(a==b)
// {
//     console.log('Palindrome');
// }

// else{
//     console.log('No Palindrome');
// }
// }
// palindrome();
//task 11
// function convertcapital()
// {
//   var x=prompt('Enter String');
//   var arr=[];
//   arr=x.split(' ');
//   for(i=0;i<arr.length;i++)
//   {
//      var m= arr[i].charAt(0).toUpperCase();
//     //  var l=m.replace(arr[i].charAt(0),m);

//     //  console.log(m)
     
//    var n=arr[i].slice(1,arr[i].length);
//    console.log(m+n);
//   }
  
// }
//convertcapital();
//task 12
// function count(str)
// {
 
// var arr;
// arr=str.split(' ');
// // console.log(arr);
// var long=0;
// var b;
// for(var i=0;i<arr.length;i++)
// {
    
// if(arr[i].length>long)
// {
//     long=arr[i].length;
//      b=arr[i];
    
// }
// }
// console.log(b);
// }
// var str=prompt('Enter String ');
// count(str);
//task 13
// function wordcount(str,letter)
// {
//     var c=0;
//     for(i=0;i<str.length;i++)
//     {
//        if(str[i]==letter)
//        {
//            c++;
//        }
//     }
//     console.log(c);

// }
// var str,letter;
// str=prompt('Enter String');
// letter=prompt('Enter letter to count the occurence in string');
// wordcount(str,letter);
//task 14 THE GEOMETRIZER

// function calcarea(radius)
// {
//     var area=Math.PI*radius*radius;
//     console.log(area);
// }
// calcarea(5);
// function circumference(radius)
// {
//     var circum=2*Math.PI*radius;
//     console.log(circum);
// }
// circumference(3);