const buttonAdd = document.getElementById("add-list");
const list = document.getElementById("list");

function addList() {
  const text = prompt("Enter Text");
  if (text) {
    const textNode = document.createTextNode(text);
    const li = document.createElement("li");
    li.appendChild(textNode);
    list.appendChild(li);
  }
}

buttonAdd.addEventListener("click", addList);
