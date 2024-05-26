




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
