// Set Current Year
const yearEl = document.querySelector(".year")
const currentYear = new Date().getFullYear()
yearEl.textContent = currentYear

// Make mobile navigation work
const btnNav = document.querySelector(".btn-mobile-nav")
const headerEl = document.querySelector(".header")

btnNav.addEventListener('click', function () {
    headerEl.classList.toggle('nav-open')
})

// Smooth scrolling animation
const allLinks = document.querySelectorAll('a:link')

allLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const href = link.getAttribute("href")
        console.log(href)

        // Scroll Back to top
        if (href === "#") window.scrollTo({
            top: 0, behavior: "smooth"
        })

        // Scroll to other links
        if (href !== "#" && href.startsWith('#')) {
            const sectionEl = document.querySelector(href)
            sectionEl.scrollIntoView({behavior: "smooth"})
        }

        // Close mobile navigation
        if (link.classList.contains('main-nav-link')) {
            headerEl.classList.toggle('nav-open')
        }
    })
})
//Sticky navigation
const sectionHeroEl = document.querySelector(".section-hero")

const observer = new IntersectionObserver((entries) => {
    const ent = entries[0]

    if (!ent.isIntersecting) {
        document.body.classList.add('sticky');
    }

    if (ent.isIntersecting) {
        document.body.classList.remove('sticky');
    }

}, {
    root: null, threshold: 0, rootMargin: '-80px'
})

observer.observe(sectionHeroEl)

// Check flex for Safari
function checkFlexGap() {
    var flex = document.createElement("div")
    flex.style.display = "flex"
    flex.style.flexDirection = "column"
    flex.style.rowGap = "1px"

    flex.appendChild(document.createElement("div"))
    flex.appendChild(document.createElement("div"))

    document.body.appendChild(flex);
    var isSupported = flex.scrollHeight === 1
    flex.parentNode.removeChild(flex);
    console.log(isSupported)

    if (!isSupported) document.body.classList.add("no-flex-gap")
}

checkFlexGap();
