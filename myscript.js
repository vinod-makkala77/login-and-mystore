function f1(){
    let e=document.getElementById("email").value
    let p=document.getElementById("pass").value
    if(e!="john@gmail.com" || p!="1234"){
        message.innerHTML = "denied";
    }
    else{
        message.innerHTML = "noice";
    }
}