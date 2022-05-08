window.addEventListener('scroll', onScroll)
onScroll()

function onScroll() {
    showNavOnScroll()
    showBackToTopButtonOnScroll()
    activateMenuAtCurrentSection(home)
    activateMenuAtCurrentSection(services)
    activateMenuAtCurrentSection(about)
}

function activateMenuAtCurrentSection(section) {
    const targetLine = scrollY + innerHeight / 2
    
    // Verificar se a seção passou da targetLine e se a base está abaixo
    const sectionTop = section.offsetTop
    const sectionHeigt = section.offsetHeight

    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop
    const sectionEndsAt = sectionTop + sectionHeigt
    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

    // Limites da seção
    const sectionBoundaries = 
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

    const sectionId = section.getAttribute('id')
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

    menuElement.classList.remove('active')
    if (sectionBoundaries) {
        menuElement.classList.add('active')
    }
}

function showNavOnScroll() {
    if (scrollY > 0) {
        navigation.classList.add('scroll')
    } else {
        navigation.classList.remove('scroll')
    }
}

function showBackToTopButtonOnScroll() {
    if (scrollY > 500) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}

ScrollReveal({
    origin: 'top',
    distance: '40px'
}).reveal(`
    #home,
    #home img,
    #home .stats,
    #services,
    #services header,
    #services .card,
    #about,
    #about header,
    #about .content,
    #contact header,
    #contact .content,
    #contact img`, { delay: 100 });