//task 1
var date=new Date();
document.write(date);
//task 2
var monthNames=["January","February","March","April","May","June","July","August","September","October","November","December"];
var now=new Date();
var currentMonth=now.getMonth();
var nameofMonth=monthNames[currentMonth];

alert("Current Month "+ " "+nameofMonth);

    //task 3
var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturay"];
var theDay = now.getDay();
  var nameOfToday = dayNames[theDay];
  alert("Today Is :"+nameOfToday.slice(0,3));
  //task 4
  if(nameOfToday=="Saturday"||nameOfToday=="Sunday")
  {
      document.write("<br> <br> It's Fun day");
  }

  if(now<=16)
  {
      alert("First Fifteen Days Of Month");
  }
  else if(now>16)
  {
    alert("Last Days Of Month");
  }
  ///task 5

document.write("<br> <br> "+date);
 document.write("Elapsed MilliSeconds till January 1970"+ " " +date.getTime());
document.write("<br> <br> Elapsed Minutes till January 1970 " +" "+ date.getTime()*1.6666666666667E-5);
var am,pm;
if(date.getHours()<=12)
{
  document.write("<br> It Am");
}
else
{
  document.write("<br> Its Pm");
}


var monthNames=["January","February","March","April","May","June","July","August","September","October","November","December"];
// var now=new Date();
var laterDate=now.getMonth();
var nameofMonth=monthNames[11];
document.write('<br> Thu '+nameofMonth+' 31 2020 '+' 00:00:00 GMT +5:00 (Pkt)');
//task 9
var age=+prompt('Enter Your age');
var out=2020-age;
alert('your birth year is '+out);
//task
document.write('<h1>KE Bill</h1>');
document.write('<br> Customer Name : ABC Customer');
document.write('<br> Month : February');
var noOfUnits=410;
var chargesPerUnit=16;
document.write('<br>'+noOfUnits);
document.write('<br>'+chargesPerUnit);
document.write('<br> Net Payable (With In Due Date)'+noOfUnits*chargesPerUnit);
var latePaymentSurcharge=350;
document.write('<br> Late Payment Surcharge'+latePaymentSurcharge);
var grossAmount=(noOfUnits*chargesPerUnit)+latePaymentSurcharge;
document.write('<br> Gross Amount Payable After Due Date'+grossAmount);
//task 6
// //task 1
// function date()
// {
//   var now=new Date();
//   return now;


// }
// //task 2
// function greet(x,y)
// {
//    x=prompt("Enter First Name");
//    y=prompt("Enter Last Name");
//    var fullName=(x+ " " + y);
//    return fullName;
// }

// alert(date());
// alert(greet());