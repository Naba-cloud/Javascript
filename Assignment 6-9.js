// var a=10;
// document.write("Result:".bold());
// document.write("<br> The value of a is : " +a);
// document.write('<br> .............................');
// ++a;
// document.write('<br>The value of ++a is :'+a);
// document.write('<br>Now the value of a is : '+a);

// document.write('<br><br><br> Thw value of a++ is \t' ,a++);
// document.write('<br> The value of a is ' ,a);
// document.write("<br><br><br> The value of --a is :",--a);
// document.write("<br>Now The value of a is :",a);
// document.write("<br><br><br> The value of a-- is : ",a--);
// document.write("<br>The value of a is :",a);
// //Question No 2
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// document.write('<br><br>',result);
// //Question 3
// var name= prompt("Enter Your Name");
// alert("Hello " +name+"  Have A Good Day");
// //Question 4
// var size=+prompt("Enter no to display the legth of table");
// var table;
//   if(table=+prompt("Enter No for multiplication table of Number"))
//   {
//     for(i=1;i<=size;i++)
//     {
      
//        document.write("<br><br><br><br>",table,"*",i,"=",table*i);
//     }
//  }
//  else{
//      var num=5;
//      for(i=1;i<=size;i++)
//      {
//            document.write("<br><br> ",num,"*",i,"=",num*i);
//      }

//  }
 //Question 6
 var subject1,subject2,subject3;
 subject1=prompt("Enter subject 1 ",subject1);
 subject2=prompt("Enter subject 2 ",subject2);
 subject3=prompt("Enter subject ",subject3);
 var subject1Marks,subject2Marks,subject3Marks;
 subject1Marks=+prompt("Enter"+subject1+"Marks");
 subject2Marks=+prompt("Enter"+subject2+"Marks");
 subject3Marks=+prompt("Enter"+subject3+"Marks");
 //singlesubject totaal marks
 var totalmarks=100;
//  var obtainedmarks=(subject1Marks+subject2Marks+subject3Marks)/300;
var percentagesub1=(subject1Marks/100)*100;
var percentagesub2=(subject2Marks/100)*100;
var percentagesub3=(subject3Marks/100)*100;
  var tpercentage=((subject1Marks+subject2Marks+subject3Marks)/300)*100;
document.write("<br><br><table><tr><th>Subject   Total Marks Obtained Marks Percentage</th></tr></table>");
document.write("<br> <table><tr>"+subject1 +  " &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" +totalmarks ,"&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp"+ subject1Marks + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" +percentagesub1+ "</tr></table>");
document.write("<br> <table><tr>"+subject2 +  " &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" +totalmarks ,"&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp"+ subject2Marks + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" +percentagesub2+ "</tr></table>");
document.write("<br> <table><tr>"+subject3 +  " &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" +totalmarks ,"&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp"+ subject3Marks + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" +percentagesub3+ "</tr></table>");

var allsubmarks=300;
document.write("<br>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp <b>",allsubmarks);
var obtainedmarkstotal=subject1Marks+subject2Marks+subject3Marks;
document.write("&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp <b>",obtainedmarkstotal);
document.write("&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp <b>",tpercentage);