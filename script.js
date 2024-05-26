




function AddTask() {
    var inputResult = document.getElementById("todoInput");
    var ul = document.getElementById("listUl");
    var li = document.createElement("li")

    li.innerHTML = inputResult.value;
    ul.appendChild(li);

    var edit = document.createElement("button");
    edit.innerHTML = "EDIT";
    edit.setAttribute("onClick", "edit(this)")

    var del = document.createElement("button");
    del.innerHTML = "DELETE";
    del.setAttribute("onClick", "del(this)")

    li.appendChild(edit);
    li.appendChild(del);
}

function edit(ed) {
    console.log("ho gaya");
}
function del(el) {
   el.parentNode.remove();
}