const buttonAdd = document.getElementById("add-list");
const list = document.getElementById("list");

function addList() {
  const text = prompt("Masukkan Teks");
  if (text) {
    const textNode = document.createTextNode(text);
    const li = document.createElement("li");
    li.appendChild(textNode);
    list.appendChild(li);

    // Buat tombol delete
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Hapus";
    deleteButton.style.marginLeft = "10px";
    deleteButton.addEventListener("click", () => {
      list.removeChild(li);
    });
    li.appendChild(deleteButton);
    list.appendChild(li);
  }
}

buttonAdd.addEventListener("click", addList);
