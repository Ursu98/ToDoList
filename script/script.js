
const textThrough = document.querySelector('.text-through');
const task_list = document.querySelector('.add-lists')
const button_add_task = document.querySelector('.add-btn')


let count = 0;
textThrough.addEventListener('click', () => {
    textThrough.style.textDecoration = 'line-through';
    count++;
    if (count % 2 === 0) {
        textThrough.style.textDecoration = 'none';
    }
});



//Event to add tasks
button_add_task.addEventListener('click', ()=>{
    let text = document.querySelector('.text-list').value;
    if(text === ''){
        alert("Write some text!")
    }else{
        const li = document.createElement("li");
        li.classList.add('text-through')
        li.append(text)
        task_list.appendChild(li);

    }
    document.querySelector('.text-list').value = '';

    })


