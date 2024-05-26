




function AddTask() {
   
    var inputResult = document.getElementById("todoInput");
    var ul = document.getElementById("listUl");
    var li = document.createElement("li")
    if(inputResult.value < 3){
        alert("Enter A Correct Task");
    return;
    }
    li.innerHTML = inputResult.value;
    ul.appendChild(li);


    var del = document.createElement("button");
    del.innerHTML = "DELETE";
    del.setAttribute("onClick", "del(this)")

    
    li.appendChild(del);

    inputResult.value = "";
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

function color(cal){
    if(ten>nine){
        var bod = document.getElementById("tady")
        bod.style.background = "#fe4e6e"
        bod.style.color = "white";

        nine = 10
        tan = 9
    }else{
        var bod = document.getElementById("tady")
        bod.style.background = "#0a0a0a"
        bod.style.color = "#f6c90e";
        nine = 9
        tan = 10
    }


}