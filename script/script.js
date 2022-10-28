const textThrough = document.querySelectorAll(".task-container");
const task_list = document.querySelector(".add-lists");
const button_add_task = document.querySelector(".add-btn");
const remove_btn = document.querySelectorAll(".remove");
const label = document.querySelectorAll("label");

const textThrough1 = [];
textThrough.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("text-through");
  });
});

button_add_task.addEventListener("click", () => {
  let text = document.querySelector(".text-list").value;

  if (text === "") {
    alert("Write some text!");
  } else {
    const li = document.createElement("div");
    console.log(li);
    li.classList.toggle("task-container");
    li.innerHTML = `<input type="checkbox"><li>${text}</li><button class="remove"><i class="fa fa-trash"></i></button>`;
    task_list.append(li);
    textThrough1.push(li);
    console.log(textThrough1);
    for (let i = 0; i < textThrough1.length; i++) {
      textThrough1[i].onclick = function () {
        const remove_li = this;
        remove_li.style.display = "none";
      };
    }
  }

  document.querySelector(".text-list").value = "";
});

for (let i = 0; i < remove_btn.length; i++) {
  remove_btn[i].onclick = function () {
    const div = this.parentNode;
    div.style.display = "none";
  };
}
