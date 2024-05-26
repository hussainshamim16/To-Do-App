




function AddTask() {
    var inputResult = document.getElementById("todoInput");
    var ul = document.getElementById("listUl");
    var li = document.createElement("li")

    li.innerHTML = inputResult.value;
    ul.appendChild(li);


    var del = document.createElement("button");
    del.innerHTML = "DELETE";
    del.setAttribute("onClick", "del(this)")

    
    li.appendChild(del);

    inputResult.value = ""
}

function del(del){
    
    del.parentNode.remove()
}
var ten = 10;
var nine = 9;

function hide(ele){
    
    var nav = document.getElementById("nav");
   
    if(ten>nine){
        nav.style.display = "flex";
        ten=9
        nine=10
    }else{
        nav.style.display = "none";
        ten=10
        nine=9
    }
    ele.children
console.log(ele)
}
