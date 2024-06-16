const inputField = document.querySelector("input");
const addButton = document.querySelector(".input-field button");
let ul = document.querySelector("ul");
let items = document.querySelectorAll("li");
const totalItems = document.querySelector(".info .line");
const clearButton = document.querySelector(".info button");

const disabledButton = () => {
    if(inputField.value === ""){
        addButton.setAttribute("disabled", "");
        addButton.classList.remove("active");
    }else{
        addButton.removeAttribute("disabled", "");
        addButton.classList.add("active");
    }
}

const closeButton = () => {
    const items = document.querySelectorAll("li");
    for(let item of items){
        const close = document.createElement("span");
        close.textContent = "\u00D7";
        close.classList.add("close");
        item.appendChild(close);
    }
}
closeButton()

const deleteList = () => {
    const closeBtn = document.getElementsByClassName("close");
    for(let btn of closeBtn){
        btn.addEventListener("click", ()=>{
            btn.parentElement.style.display = "none";
        });
    }
}
deleteList();

const newList = () => {
    const newLi = document.createElement("li");
    newLi.textContent = inputField.value;
    ul.appendChild(newLi);

    closeButton();
    deleteList();
    inputField.value = "";
}

const clearAll = () => {
    const items = document.querySelectorAll("li");
    for(let item of items){
        item.style.display = "none";
    }
}

addButton.addEventListener("click", newList);
inputField.addEventListener("input", disabledButton);
clearButton.addEventListener("click", clearAll);