const input = document.querySelector('input')
const ol = document.querySelector('ol')
let arr = [];
function todo(e) {
    e.preventDefault();
    arr.push(input.value)
    ol.innerHTML = '';
    if (input.value === '') {
        alert ('new value is required')
    }
    else {

        for (let i = 0; i < arr.length; i++) {
            ol.innerHTML = ol.innerHTML + `<li  class="listItem" >${arr[i]}</li>
            <button  class="stydel" onclick="deleteTodo(${i})">Delete</button>
            <button  class="styedit" onclick="EditTodo(${i})">Edit</button>`
            console.log(arr[i]);

        }
    input.value = ''; 

    }


}
function deleteTodo(i) {
    ol.innerHTML = '';
    arr.splice(i, 1)

    for (let i = 0; i < arr.length; i++) {
        ol.innerHTML = ol.innerHTML + `<li class="listItem" >${arr[i]}</li>
        <button class="stydel" onclick="deleteTodo(${i})">Delete</button>
        <button class="styedit" onclick="EditTodo(${i})">Edit</button>`
        console.log(arr[i]);

    }
}

function EditTodo(i) {
    ol.innerHTML = '';
    let newTodo = prompt('Enter your new value')
    arr.splice(i, 1, newTodo)
    if (newTodo === '') {
        alert('new value is required')
    }
    else {

        for (let i = 0; i < arr.length; i++) {
            ol.innerHTML = ol.innerHTML + `<li class="listItem" >${arr[i]}</li>
        <button class="stydel" onclick="deleteTodo(${i})">Delete</button>
        <button  class="styedit" onclick="EditTodo(${i})">Edit</button>`
            console.log(arr[i]);

        }
    }
}