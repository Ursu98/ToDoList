const textThrough = document.querySelector('.text-through');
let count = 0;
textThrough.addEventListener('click', () => {
    textThrough.style.textDecoration = 'line-through';
    count++;
    if (count % 2 === 0) {
        textThrough.style.textDecoration = 'none';
    }
});


