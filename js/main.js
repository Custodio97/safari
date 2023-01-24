// function for make menu mobile
function menuMobile() {
    const $nav = document.querySelector('nav ul')
    const $toggle = document.querySelector('.toggle')
    const $icon = document.querySelector('.fa-bars')
    const links = document.querySelectorAll('li a')
    
    const iconChangeOpenOrClose = () => {
        if ($icon.classList.contains('fa-bars')) {
            $icon.classList.replace('fa-bars', 'fa-times')
        } else {
            $icon.classList.replace('fa-times', 'fa-bars')
        }
    }
    $toggle.addEventListener('click', () => {
        iconChangeOpenOrClose()

        $nav.classList.toggle('active')
    })

   

    links.forEach((link) => {
        link.addEventListener('click', () => {
            $nav.classList.toggle('active')
            iconChangeOpenOrClose()
        })
    })
}

menuMobile()

//function for carousel

function carousel() {
    const slides = document.querySelectorAll('.slide')
    const $btnRight = document.querySelector('#right')
    const $btnLeft = document.getElementById('left')
    let activeSlide = 0
    const numberSlides=slides.length
    const activeSlides = () => {
        slides.forEach((slide)=> slide.classList.remove('active'))
        slides[activeSlide].classList.add('active')
    }

    $btnRight.addEventListener('click', () => {
        activeSlide++
        if (activeSlide > numberSlides - 1) {
            activeSlide=0
        }
        activeSlides()
    })

    $btnLeft.addEventListener('click', () => {
        activeSlide--
        if (activeSlide < 0) {
            activeSlide = numberSlides - 1
        }
        activeSlides()

    })

    const autoPlay = () => {
        setInterval(() => {
            activeSlide++
            if (activeSlide > numberSlides - 1) {
                activeSlide = 0
            }
            activeSlides()
        },6000)
    }

    autoPlay()
}
carousel()

//function scroll

function animationScroll() {
    const sectionsScrolls = document.querySelectorAll('.js-scroll')
    const activeScroll = () => {
        sectionsScrolls.forEach((slide) => {
            const innerHeight = window.innerHeight
            const scrollTop = slide.getBoundingClientRect().top
            const elementScrollAnimation = (scrollTop - innerHeight) < 0
            if (elementScrollAnimation) {
                slide.classList.add('active')
            }
        })
    }
    window.addEventListener('scroll',activeScroll)
}

animationScroll()

