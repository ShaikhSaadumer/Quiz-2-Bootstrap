window.addEventListener("load", () => {
  const form = document.querySelector("#form");
  const name = document.querySelector("#input-t");
  const comment = document.querySelector("#text-area");
  const main = document.querySelector(".input");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const task_element = document.createElement("div");
    task_element.classList.add("output");
    const para = document.createElement("p");
    const name_out = document.createElement("span");
    name_out.classList.add("name-comment");

    name_out.innerHTML = name.value;
    para.innerHTML = comment.value;
    main.appendChild(task_element);
    task_element.appendChild(name_out);
    task_element.appendChild(para);
  });
});
