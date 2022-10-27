const task_list = document.querySelector('.add-lists')
const button_add_task = document.querySelector('.add-btn')


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


