var container = document.querySelector('.container')
var modals = document.querySelectorAll('.modal')


modals.forEach( modal => modal.addEventListener('click', Showmodal))

function Showmodal () {
    container.classList.toggle('active')
}