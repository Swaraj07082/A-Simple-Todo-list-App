const inputbox = document.getElementById("input");
const listcontainer = document.getElementById("todo container");


function Add(){
    if(inputbox.value === ""){
   alert("You need to write something");
    }
    else{
   let li = document.createElement("li");
    li.innerHTML=inputbox.value;
    listcontainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML= "\u00d7";
    li.appendChild(span);
    }
    inputbox.value="";
}

listcontainer.addEventListener('click',function(e){
if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
}
})