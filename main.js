
let body = document.body;
console.log(body);

// //  les séléctionner
let lesUl = document.querySelectorAll('ul')
let lesButtons = document.querySelectorAll('input')

//1 
lesButtons[0].addEventListener('click', () => {
    lesUl[0].removeChild(lesUl[0].firstChild)
})

//2
lesButtons[1].addEventListener('click', () => {
    lesUl[0].removeChild(lesUl[0].lastChild)
})

//3
lesButtons[2].addEventListener('click', () => {
    let random = Math.floor(Math.random() * lesUl[0].children.length);
    lesUl[0].removeChild(lesUl[0].childNodes[random])
})

// 4
lesButtons[3].addEventListener('click', () => {
    let secondUl = lesUl[1];
    let newLi = document.createElement('li');
    newLi.innerText = 'Li intrus';
    secondUl.replaceChild(newLi, secondUl.children[1])
})

// 5
let inputValeur = document.querySelectorAll('input')[4];
lesButtons[5].addEventListener('click', () => {
    let secondUl = lesUl[1];
    let newLi1 = document.createElement('li');
    newLi1.innerText = inputValeur.value;
    secondUl.replaceChild(newLi1, secondUl.children[2])
})