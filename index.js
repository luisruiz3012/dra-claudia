window.sr = ScrollReveal()

sr.reveal('.main-banner', {
    duration: 3000,
});

sr.reveal('#main-banner__content', {
    duration: 5000,
    origin: 'top',
    distance: '100%'
});

sr.reveal('.service_years', {
    duration: 1500,
    origin: 'left',
    distance: '100%'
});

sr.reveal('.products', {
    duration: 2000
})

sr.reveal('.card', {
    duration: 1500,
    origin: 'right',
    distance: '100%'
})

sr.reveal('.contact', {
    duration: 2000,
    origin: 'left',
    distance: '100%'
})

sr.reveal('.dr-img', {
    duration: 5000,
    origin: 'top',
    distance: '100%'
});

function goUp(){
    window.addEventListener('scroll', () => {
        var scroll = document.documentElement.scrollTop
        var upButton = document.getElementById('up-button')

        if(scroll > 300) {
            upButton.style.right = 30 + "px"
        } else {
            upButton.style.right = -100 + "px"
        }
    })
}

goUp()
