const ulElemento = document.getElementById("lista")

const newLi = document.createElement(`li`)
console.log(newLi);

const liZero = document.createTextNode(`Item 0`)
console.log(liZero);

newLi.appendChild(liZero)

ulElemento.insertAdjacentElement(`afterbegin`, newLi)



const newLi5 = document.createElement("li")

const liCinco = document.createTextNode(`Item 5`)

newLi5.appendChild(liCinco)

ulElemento.insertAdjacentElement(`beforeend`, newLi5)

