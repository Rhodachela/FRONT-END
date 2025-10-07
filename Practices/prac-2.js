const parent = document.body.querySelector(".parent");

const addChild = document.body.querySelector("#add-child");
addChild.addEventListener("click", () => {
    if(parent.children.length > 3){
        return;
    }
    const child = document.createElement("div");
    child.classList.add("child");
    child.textContent = "I am Chela's Child!!!!!";
    parent.appendChild(child);
});

const removeChild = document.body.querySelector("#remove-child");
removeChild.addEventListener("click", () => {
    const child = parent.querySelector(".child");
    if(child){
    parent.removeChild(child);
    };
});