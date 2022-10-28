let textThrough = document.querySelectorAll('.text-through');
const task_list = document.querySelector('.add-lists')
const button_add_task = document.querySelector('.add-btn')


let count = 0;

textThrough.forEach(item => {

    item.addEventListener('click', () => {
        item.style.textDecoration = 'line-through';
        count++;
        if (count % 2 === 0) {
            item.style.textDecoration = 'none';
        }
    })
});


//Event to add tasks
button_add_task.addEventListener('click', () => {
    let text = document.querySelector('.text-list').value;
    const logo = document.createElement('i')
    logo.classList.add('fa', 'fa-trash', 'fa-2x', 'close')
    if (text === '') {
        alert("Write some text!")
    } else {
        const li = document.createElement("li");
        li.classList.add('text-through')
        li.append(text)
        li.append(logo)
        task_list.appendChild(li);

    }
    document.querySelector('.text-list').value = '';
})

const close = document.getElementsByClassName("close");
let i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        const li = this.parentElement;
        li.style.display = "none";
    }
}
