const todoInput = document.querySelector('input');
const addBtn = document.querySelector('button');
const parentDiv = document.querySelector('div.todos');
addBtn.addEventListener('click',newTodo);
parentDiv.addEventListener('click',removeTodo);
let c = 0
function newTodo(){
    if (todoInput.value === ""){
        alert("You should enter something!")
    }else{
    const p = document.createElement('p');
    p.innerHTML = c + ' ' + todoInput.value;
    p.setAttribute('key',c);
    c += 1
    parentDiv.append(p)
    todoInput.value = "";
    }

}
function removeTodo(event){
    const element = event.target
    element.remove()
}