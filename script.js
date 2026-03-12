console.log("test")
const card_links = document.querySelectorAll(".card-link")
const nav_links = document.querySelectorAll(".nav-lower > a")
const main_sections = document.querySelectorAll("main")

card_links.forEach(card => {
    card.addEventListener('click', () => {
        console.log("clicked")
        let link_to = card.dataset.link
        const to_section = document.querySelector(`.${link_to}`)
        to_section.classList.add("active")

    })
})
