// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'


document.addEventListener('DOMContentLoaded', () => {

	// Custom JS
	mobMenuToggle()
	stickyHeader()
	toggleFaq()
	let wow = new WOW({
		boxClass: 'wow',
		animateClass: 'animated',
		offset :0,
		mobile: true,
		live: true}).init()
})
function mobMenuToggle () {

	let btn = document.querySelector('.header__navigation-btn-menu')
	let menu = document.querySelector('.header__navigation')
	let header = document.querySelector('.header')
	btn.addEventListener('click', function (e) {
		btn.classList.toggle('active')
		menu.classList.toggle('active')
		header.classList.toggle('active')
	})
}

function stickyHeader () {
	let header = document.querySelector('.header')

	if (document.body.getBoundingClientRect().top < 0) {
		header.classList.add('sticky')
	} else {
		header.classList.remove('sticky')
	}
	
	document.addEventListener('scroll', function () {
		if (document.body.getBoundingClientRect().top < 0) {
			header.classList.add('sticky')
		} else {
			header.classList.remove('sticky')
		}
		
	})
}
function toggleFaq() {
	let items = document.querySelectorAll('.faq__item-btn')
	let activeItem
	for (let i = 0; i < items.length; i++) {
		items[i].addEventListener('click', function (e) {
			if (e.currentTarget.parentElement.parentElement !== activeItem && !!activeItem) {
				activeItem.classList.remove('active')
			}
			if (e.currentTarget.parentElement.parentElement.classList.contains('active')) {
				e.currentTarget.parentElement.parentElement.classList.remove('active')
			} else {
				e.currentTarget.parentElement.parentElement.classList.add('active')
				activeItem = e.currentTarget.parentElement.parentElement
			}
		})
	}
}