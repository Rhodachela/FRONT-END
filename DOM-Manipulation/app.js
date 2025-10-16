// DOM Manipulation

// const title = document.querySelector('#main-heading');
// title.style.color = 'Blue';
// console.log(title);

// Creatng Elements
// const ul = document.querySelector('ul');
// const li = document.createElement('li');

// Adding Elements
// ul.append(li);

// // Modifying Text
// li.innerText = 'X-Men';
// li.classList.add("list-items");

// // Remove Elements
// li.remove();

//  Parent Node Traversal
// let ul = document.querySelector('ul');
// console.log(ul.parentNode);
// console.log(ul.parentElement.parentElement.parentElement);

// Child Node Traversal
// let ul = document.querySelector('ul');
// console.log(ul.childNodes);
// console.log(ul.children);

// Sibling Node Traversal
// let ul = document.querySelector('ul');
// console.log(ul.previousSibling);
// console.log(ul.nextSibling);


// EVENT LISTENERS
// Element Add Event Listener("click", function)

// const buttonTwo = document.querySelector('.btn-2');

// function alertBtn (){
//     alert ("I also Love Javascript")
// };

// buttonTwo.addEventListener("click", alertBtn);

// // MouseOver Event
// const newBackgroundColor = document.querySelector('.box-3');

// function changeColor() {
//     newBackgroundColor.style.backgroundColor = "Blue";
// }
// newBackgroundColor.addEventListener( "mouseover", changeColor);

// Reveal Event
// const revealBtn = document.querySelector('.reveal-btn');

// const hiddenContent = document.querySelector('.hidden-content');

// function revealContent() {
//     if(hiddenContent.classList.contains('reveal-btn'))
//         {
//             hiddenContent.classList.remove('reveal-btn');
//     }
//     else {
//         hiddenContent.classList.add('reveal-btn');
//     }
// }
// revealBtn.addEventListener("click", revealContent);

document.querySelector('#sports').addEventListener
("click", function(e) {
    console.log(e.target.getAttribute('id') + ' is clicked');

    const target = e.target
    if (target.matches('li')){
        target.style.backgroundColor = 'red'
    }
})

const sports = document.querySelector('#sports');
const newSport = document.createElement('li');

newSport.innerText = 'Rugby'
newSport.setAttribute('id', 'rugby');

sports.appendChild(newSport);

const newGame = document.createElement('li');
newGame.innerText = 'Hockey'
newGame.setAttribute('id', 'hockey')
sports.appendChild(newGame);
