




function AddTask() {
    var inputResult = document.getElementById("todoInput");
    var ul = document.getElementById("listUl");
    var li = document.createElement("li")
  
    li.innerHTML = inputResult.value;
    ul.appendChild(li);

    var edit = document.createElement("button");
    edit.innerHTML = "EDIT";
edit.setAttribute("onClick", "edit()")

}
// function edit() {
//     console.log("ho gaya")
// }
