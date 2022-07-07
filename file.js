'use-strict'

//window.addEventListener('load', () => {
let localStorageKey = 'task.lists';
tasks = JSON.parse(localStorage.getItem(localStorageKey)) || [];
let selectedState = 'selected.list';
let selectedList = localStorage.getItem(selectedState);
const form = document.querySelector('#head');
const input = document.querySelector('#text');
const container1 = document.querySelector('#item1');
const container2 = document.querySelector('#item2');
const container3 = document.querySelector('#item3');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    todo = input.value;

    e.target.reset();

    if (todo === null || '') {
        return alert('please Fill Out Task');
    }
    createAndSave();
})

function createAndSave() {
    createTask();
    savePage();
}
function createTask() {
    let todoList = listItem(todo);
    tasks.push(todoList);
    console.log(todoList);
    console.log(todo);

    tasks.forEach((task, i) => {
        let P1 = document.createElement('p');
        container1.appendChild(P1);
        P1.innerText = task.name;
        let p2 = document.createElement('p');
        container2.appendChild(p2);
        p2.innerText = 'Incomplete';

        let actionContainer = document.createElement('div');
        actionContainer.classList.add('button-container');
        container3.appendChild(actionContainer);
        let button1 = document.createElement('button');
        button1.setAttribute('id', 'button1');
        actionContainer.appendChild(button1);
        let span1 = document.createElement('span');
        span1.classList.add('material-symbols-outlined');
        span1.innerText = 'done';
        button1.appendChild(span1);

        let button2 = document.createElement('button');
        button2.setAttribute('id', 'button2');
        actionContainer.appendChild(button2);
        let span2 = document.createElement('span');
        span2.classList.add('material-symbols-outlined');
        span2.innerText = 'delete';
        button2.appendChild(span2);


        button1.addEventListener('click', () => {
            P1.style.color = 'grey';
            p2.style.color = 'green';
            p2.innerText = 'COMPLETED'
            button1.style.color = 'white';
            button1.style.backgroundColor = 'transparent';
        })
        button2.addEventListener('click', function () {
            deleteItem();
            P1.remove();
            p2.remove();
            button1.remove();
            button2.remove()
        })
    })
}
function savePage() {
    localStorage.setItem(localStorageKey, JSON.stringify(tasks));
    localStorage.setItem(selectedState, JSON.stringify(selectedList));
}
function deleteItem() {
    tasks.forEach(function (task, i) {
        tasks.splice(task[i], 1);
        localStorage.setItem(localStorageKey, JSON.stringify(tasks))
    })
}

function listItem(name) {
    return { id: Date.now().toString(), name: name, tasks: [] }
}





//})

        // function createTask() {
        //     tasks.forEach(task => {
        //     let P1 = document.createElement('p');
        //     container1.appendChild(P1);
        //     P1.innerText = input.value;
        //     let p2 = document.createElement('p');
        //     container2.appendChild(p2);
        //     p2.innerText = 'Incomplete';
        //     });
        //     // localStorage.setItem('P1', JSON.stringify(P1.innerText));
        //     // JSON.parse(localStorage.getItem('P1'));
        //     // localStorage.setItem('p2', JSON.stringify(p2.innerHTML));
        //     // JSON.parse(localStorage.getItem('p2'));
        //     // tasks = [P1.innerText, p2.innerText];

        //     let actionContainer = document.createElement('div');
        //     actionContainer.classList.add('button-container');
        //     container3.appendChild(actionContainer);
        //     let button1 = document.createElement('button');
        //     button1.setAttribute('id', 'button1');
        //     actionContainer.appendChild(button1);
        //     let span1 = document.createElement('span');
        //     span1.classList.add('material-symbols-outlined');
        //     span1.innerText = 'done';
        //     button1.appendChild(span1);
        //     // localStorage.setItem('b1', JSON.stringify(button1.innerHTML));
        //     // JSON.parse(localStorage.getItem('b1'));

        //     let button2 = document.createElement('button');
        //     button2.setAttribute('id', 'button2');
        //     actionContainer.appendChild(button2);
        //     let span2 = document.createElement('span');
        //     span2.classList.add('material-symbols-outlined');
        //     span2.innerText = 'delete';
        //     button2.appendChild(span2);
        //     // localStorage.setItem('b2', JSON.stringify(button2.innerHTML));
        //     // JSON.parse(localStorage.getItem('b2'));
        //     // localStorage.setItem('tasks', JSON.stringify(tasks), tasks);

        //     button1.addEventListener('click', function () {
        //         P1.style.color = 'grey';
        //         p2.style.color = 'green';
        //         p2.innerText = 'COMPLETED'
        //         button1.style.color = 'white';
        //         button1.style.backgroundColor = 'transparent';
        //     })

        //     button2.addEventListener('click', function () {
        //         P1.remove();
        //         p2.remove();
        //         actionContainer.remove();
        //         //localStorage.remove(tasks);
        //     });

        // }

        // function save() {
        //     localStorage.setItem(localStorageKey, JSON.stringify(tasks));
        // }

        // function savePage(){
        //     createTask();
        //     save();
        // }
        // savePage()}