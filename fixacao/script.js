

function insereItem(event) {
   const lista = document.getElementById("lista")
   const input = document.getElementById(`meu-input`)

   const novaLi = document.createElement("li")

   const liTexto = document.createTextNode(input.value)

   novaLi.appendChild("liTexto")

   lista.insertAdjacentElement("beforeend", "liTexto")
}


