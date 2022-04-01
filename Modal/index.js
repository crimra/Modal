var container = document.querySelector('.container')
var modals = document.querySelectorAll('.modal')
var open = document.querySelector('.open')
var close = document.querySelector('.close')


modals.forEach( modal => modal.addEventListener('click', Showmodal))

function Showmodal () {
    container.classList.toggle('active')
}

/*open.addEventListener('click', function(){
    container.classList.add('active')
})

close.addEventListener('click', function(){
    container.classList.remove('active')
})*/
