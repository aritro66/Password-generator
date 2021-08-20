var generate=document.querySelectorAll('#generate input');
var text=document.getElementById('password');
var check=[1,0,0,0];
var lower="abcdefghijklmnopqrstuvwxyz";
var upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number="123456789";
var symbol="!@#$%^&*()-=_+`~\'\":;\\|/?.,<>";
var password="";
var limit=8;
setInterval(()=>{
    limit=generate[0].value;
    
    if(limit!=1)
    {
        document.getElementById("pointer").innerHTML=`${limit} Characters`;
    }
    else
    {
        document.getElementById("pointer").innerHTML=`${limit} Character`;
    }
},100);
function generater()
{
    if(generate[2].checked)
    {
        check[1]=1;
    }
    if(generate[3].checked)
    {
        check[2]=1;
    }
    if(generate[4].checked)
    {
        check[3]=1;
    }
    let k=0;
    while(k<limit)
    {
        let flag=1;
        let pointer=0;
        while(flag)
        {
            pointer=Math.floor(Math.random()*4);
            if(check[pointer])
            {
                flag=0;
            }
        }
        if(pointer==0)
        {
            password+=number[Math.floor(Math.random()*number.length)]
        }
        else if(pointer==1)
        {
            password+=lower[Math.floor(Math.random()*lower.length)]
        }
        else if(pointer==2)
        {
            password+=upper[Math.floor(Math.random()*upper.length)]
        }
        else if(pointer==3)
        {
            password+=symbol[Math.floor(Math.random()*symbol.length)]
        }
        k+=1;
    }
    text.value=password;
    document.getElementById("copy_stats").innerHTML="";
    password="";
    check=[1,0,0,0];
}
document.getElementById('make').addEventListener('click',generater);
// console.log(generate[0].value);
document.getElementById('copy').addEventListener('click',()=>{
    /* Select the text field */
  text.select();
  text.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(text.value);
  document.getElementById("copy_stats").innerHTML="Copied!!!";

});