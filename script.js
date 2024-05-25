
console.log("hello world");



function AddTask() {
    var inputResult = document.getElementById("todoInput");
    var ul = document.getElementById("listUl");
    var li = document.createElement("li")
    var buttons = document.createElement("button")
    ul.appendChild(li);
    li.innerHTML = inputResult.value;
    li.appendChild(buttons);
    buttons.innerHTML = "edit"


    inputResult.value = ""
    console.log(inputResult.value);
}
function yaha() {
    console.log("hellojskjl")
}