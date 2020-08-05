const mainMenu = document.querySelector('.main-menu');
const closedMenu = document.querySelector('.closed-menu');
const openMenu = document.querySelector('.open-menu');
const workLink = document.getElementById('work-link');

openMenu.addEventListener('click', show);
closedMenu.addEventListener('click', close);
workLink.addEventListener('click', close);

function show() {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}

function close() {
    console.log('works');
    mainMenu.style.top = '-150%';
}

console.log('works');