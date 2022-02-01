/* PERSONAL HOMEPAGE */




/* OFFSCREEN MENU
----------------------------------------------- */
function nav(tgl="toggle", cls='nav-active') {
    
    if (document.querySelector(`.${tgl}`)) {
        document.querySelector(`.${tgl}`).addEventListener('click',
            () => { document.body.classList.toggle(cls) }
        )     
    }
}

nav()


/* SCROLL FADE
----------------------------------------------- */
if (document.querySelector('.scrollfade')) {
	let fadeElements = document.getElementsByClassName('scrollfade')

	function scrollFade() {
		let viewportBottom = window.scrollY + window.innerHeight

		for (let index = 0; index < fadeElements.length; index++) {
			let element = fadeElements[index]
			let rect = element.getBoundingClientRect()

			let elementFourth = rect.height/4
			let fadeInPoint = window.innerHeight / 2
			let fadeOutPoint = -(rect.height - 100)

			if (rect.top <= fadeInPoint) {
				element.classList.add('scrollfade--visible')
				element.classList.add('scrollfade--animate')
				element.classList.remove('scrollfade--hidden')
			} else {
				element.classList.remove('scrollfade--visible')
				element.classList.add('scrollfade--hidden')
			}

			if (rect.top <= fadeOutPoint) {
				element.classList.remove('scrollfade--visible')
				element.classList.add('scrollfade--hidden')
			}
		}
	}

	document.addEventListener('scroll', scrollFade)
	window.addEventListener('resize', scrollFade)
	document.addEventListener('DOMContentLoaded', function() {
		scrollFade()
	})
}





/* SLIDER
----------------------------------------------- */
if (document.querySelector('.slider')) {

	let slider = document.querySelector('.slider') 
	let slides = document.querySelectorAll('.slider > div')
	let next   = document.querySelector('.next-slide')
	let prev   = document.querySelector('.prev-slide')
	let num    = 0

	function nextSlide() {
		if (document.querySelector('.active-slide')) {
			document.querySelector('.active-slide').classList.remove('active-slide')
			if (num === (slides.length - 1)) {
				num = 0
			} else {
				num++
			}
			slides[num].classList.add('active-slide')
			
		} else {
			slides[num].classList.add('active-slide')
		}
	}

	function prevSlide() {
		if (num === 0) {
			num = slides.length - 1
		} else {
			num--
		}
		document.querySelector('.active-slide').classList.remove('active-slide')
		slides[num].classList.add('active-slide')
	}

	
	nextSlide()
	next.addEventListener('click', nextSlide)
	prev.addEventListener('click', prevSlide)
	
}