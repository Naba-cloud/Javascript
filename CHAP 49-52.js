// function submit()
// {
//     var a=document.getElementById('first-name').value;
//     var b=document.getElementById('last-name').value;
//     var c=document.getElementById('pas-word').value;
//     document.getElementById('helo').textContent=a;
//     document.getElementById('helo1').textContent=b;
//     document.getElementById('helo2').textContent=c;

// }
//task 2
// function hello()
// {
//     document.getElementById('he').textContent="";
//     document.getElementById('he1').hidden=false;
// }
//  function helo()
//  {
//     document.getElementById('he1').hidden=true;

//  }

function submit()
{
   
  var m=document.createElement('br');
  document.body.appendChild(m);
  var a=document.getElementById('f-name').value;
  var b=document.getElementById('l-name').value;
  var c=document.getElementById('password').value;
 // document.body.appendChild(m);

  // document.getElementById('sub').textContent+=a;
 // document.body.appendChild(m);
 var i=document.createElement('p');
//  i.innerHTML+='  ';
 i.innerHTML+=a;
 i.style.display='inline-block';
 i.style.margin='2%';
 document.body.appendChild(i);
 
var j=document.createElement('p');
j.innerHTML+=b;
j.style.display='inline-block';
j.style.margin='2%';
 document.body.appendChild(j);
 var k=document.createElement('p');
k.innerHTML+=c;
k.style.display='inline-block';
k.style.margin='2%';
 document.body.appendChild(k);
  var target= document.createElement('button');
  target.innerHTML=' Delete ';
  document.body.appendChild(target);
  var target1= document.createElement('button');
  target1.innerHTML='Edit';
  document.body.appendChild(target1);
 
  var n=document.createElement('hr');
  document.body.appendChild(n);
  target.onclick=function()
  {
    i.textContent='';
    j.textContent='';
    k.textContent='';
  }

   target1.onclick=function()
   {
    var f=document.createElement('p');
    // f.style.padding='2px'
    f.style.backgroundColor='pink';
    f.style.width='200px';
    f.style.height='200px';
    f.innerHTML+=a;
    f.innerHTML+='  ';
    f.innerHTML+=b;
    f.innerHTML+='  ';
    f.innerHTML+=c;
    f.innerHTML+='  ';
    document.body.appendChild(f);
      
   }
  // document.body.appendChild(m);

}