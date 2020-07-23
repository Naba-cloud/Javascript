//task 1
// function powr()
// {
//     var base=+prompt('Enter No To calculate power');
//     var exp=+prompt('Enter Power');
//     var l=1;
   
//     for(exp;exp>0;exp--)
//     {
//         l=l*base;
//     }
//   console.log(l);
// }
// powr();
//task 2
// function leapyear()
// {
//     var year=+prompt('Enter year');
//  if(year % 400==0 || year % 4==0)
//  {
//     console.log('Leap year');
    
//  }
//  else
//  {
//      if(year % 100==0)
//      {
//     console.log('No Leap year');
//      }
//      else{
//         console.log('No Leap year');
//      }
//  }
 
// }

// leapyear();

// function sum(a,b,c)
// {
   
//     var s=(a+b+c)/2;
//     console.log(s);
// }
//     function areaoftriangle(a,b,c)
// {
    
//     s=2;
//     var area=(s*(s-a)*(s-b)*(s-c)); 
//     console.log(area);

// }
    
   
// var a=+prompt('Enter First Side Of Triangle');
// var b=+prompt('Enter second side of triangle');
// var c=+prompt('Enter third side of Triangle');
// sum(a,b,c);
// areaoftriangle(a,b,c);
// function avg(mark1,mark2,mark3)
// {
//     var av=mark1+mark2+mark3/3;
//  console.log('average : '+av);
// }
// function percentage(mark1,mark2,mark3)
// {
   
//     var per=((mark1+mark2+mark3)/300)*100;
//     console.log('percentage:'+per);
// }
// var mark1=+prompt('Enter marks of first subject');
// var mark2=+prompt('Enter marks of first subject');
// var mark3=+prompt('Enter marks of first subject');
// avg(mark1,mark2,mark3);
// percentage(mark1,mark2,mark3);
// function index()
// {
//   var arr=['apple','mango','fruits','vegetables'];
//   var a=prompt('enter word');
//   for(i=0;i<arr.length;i++)
//   {
//       if(arr[i]==a)
//       {
//           console.log('index : '+i);
//       }
//   }
// }
 
// index();
// function remove()
// {
// var sentence=prompt('enter string ');
// var m;
// for(var i=0;i<sentence.length;i++)
// { 
//    if(sentence[i]=='a'||sentence[i]=='e'||sentence[i]=='i'||sentence[i]=='o'||sentence[i]=='u')
//     {
//      m= sentence[i].trim();

//        console.log('vowels that remove from a sentence '+ m);
//     } 
    
// }
// }
// remove();
// var sentence;
// sentence=prompt('Enter Sentence');
// var arr=[];
// var count=0;
// arr=sentence.split(' ');
//  var arr1=['aa','ae','ai','ao','au','ee','ea','ei','eo','eu','oo','oa','ou','oe','oi','ia','ii','ie','io','iu','uu','ui','ua','uo','ue'];

// var ch;
// for(var i=0;i<arr.length;i++)
// {
//     var m=arr[i];
  
// switch(m)
// {
//     case m.:
//     console.log('aa');
//     break;
// }
 
//  if(arr[i].includes('aa')==true)
//  {
//      console.log('aa');
//  }
//  else if(arr[i].includes('ae')==true)
//  {
//     console.log('ae');
//  }
//}
// function vowelsuc()
// {
// var sentence=prompt('enter string ');
// var arr=[];
// arr=sentence;
// var arr1=['aa','ae','ai','ao','au','ee','ea','ei','eo','eu','oo','oa','ou','oe','oi','ia','ii','ie','io','iu','uu','ui','ua','uo','ue'];
// for(i=0;i<arr.length;i++)
// {
//     if(sentence.includes(arr1[i])==true)
//     {
//         console.log(''+arr1[i]);
//     }
// }
// }
// vowelsuc();
// function distancecal(distance)
// {
//     var km=distance*1000;
//     console.log('distance in km ' + km);
//     var feet=distance*3.28;
//     console.log('distance in '+feet);
//     var inch=distance*39.37;
//     console.log('distance in '+inch);
//     var cm=distance*100;
//     console.log('distance in '+cm);
// }
// var distance=+prompt('enter distance');
// distancecal(distance);
//tak 9
// function overtimepay()
// {
//     var work=+prompt('enter work hours');
//     if(work>40)
//     {
//         var overtime=work-40;
//         var overtimepay=1;
//         overtimepay=overtimepay*(12+overtime);
//         console.log('overtime is '+overtimepay);
//     }
// }
// overtimepay();
//task 10
// function currencydomination()
// {
//     var d1=10;
//     var d2=50;
//     var d3=100;
//     var count=0;

//     var inp=prompt('enter amount');
//     var l=inp.length;
//     if(l==3)
//     {


//         if(inp[1]>=5 || inp[1]<=5)
//         {
//             if(inp[1]==0||inp[1]==0)
//             {
//                 console.log(inp[0]+d3+'note');
//             }
//            if(inp[1]==6)

//             {
//             console.log( inp[0]+d3 +'note'+'1' +d2 + '1'+d1 +'notes');
//             }
//             if(inp[1]==7)

//             {
//             console.log(inp[0]+d3 +'note'+ '1' +d2 + '2'+d1 +'notes');
//             }
//             if(inp[1]==8)

//             {
//             console.log(inp[0]+d3 +'note'+ '1' +d2 + '3'+d1 +'notes');
//             }
//             if(inp[1]==9)

//             {
//             console.log( inp[0]+d3 +'note'+'1' +d2 + '4'+d1 +'notes');
//             }
//         }
//     }
//     if(l==2)
//     {
//         if(inp[0]>=5)
//         {
//             var n=inp-d2;
          
//             if(n==10)
//            console.log('1' +d2 +'note'+ '1'+n);
//            if(n==20)
//            console.log('1' +d2 +'note'+ '2'+d1);
//             // console.log(+d2 +'notes');
//              if(n==30)
//              {
//                 console.log('1' +d2 +'note'+ '3'+d1);
//              }
//              if(n==40)
//              {
//                 console.log('1' +d2 +'note'+ '4'+d1);   
//              }
//         } 
//         else{
//         console.log(inp[0]+d1 + 'notes'); 
//         }
//     }
   
// }

// currencydomination();