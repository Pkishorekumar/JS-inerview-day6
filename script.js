function add(){
    var ad=document.getElementById("adding").innerHTML="MERN Stack"
    
}


let text=document.createElement("h1")
text.innerHTML='<h1>headding 1</h1>'
document.body.appendChild(text);



function clock(){


    let date=new Date();

    let h=date.getHours();
    let m=date.getMinutes();
    let s=date.getSeconds();
    let ses="AM";


    if(h===0){
        h=12;
    }
    if(h>12){
        h=h-12;
        ses="PM"
    }

    let time= h+" : "+m+" : "+s+" : "+ses;

    document.getElementById("clock").innerText=time;


    setTimeout(function(){
        clock()
    },1000)
   
}
clock()



function rep(){
    var old=document.getElementById("con").style.display="none";
    var newc=document.getElementById("newcon").style.display="block";
    
}


var hc=document.getElementById("hide")

hc.addEventListener("click",function(){
    var hid=document.getElementById("hidding")

    hid.style.display="none"
    
})

