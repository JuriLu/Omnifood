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
        if (href === "#") window.scrollTo(
            {
                top: 0,
                behavior: "smooth"
            }
        )

        if (href !== "#" && href.startsWith('#')) {
            const sectionEl = document.querySelector(href)
            sectionEl.scrollIntoView({behavior: "smooth"})
        }
    })
})

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
