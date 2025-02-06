function f1(){
    let n=document.getElementById("name").value;
    let e=document.getElementById("email").value;
    let p=document.getElementById("pass").value;
    let d=document.getElementById("date").value;
    let message = document.getElementById("message");
    // if(e!="john@gmail.com" || p!="1234"){
    //     message.innerHTML = "denied";
    // }
    // else if(e==NULL || p==NULL){
    //     message.innerHTML="likhde kuch"
    // }
    // else{
    //     message.innerHTML = "noice";
    // }
    message.innerHTML += `${n},${e},${p},${d}<br>`;
    //document.write(e+" "+p);
}