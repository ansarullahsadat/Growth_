"use strict"

const navToggles = document.querySelectorAll(".navToggle")
const navbar = document.querySelector(".navbar")

navToggles.forEach((t) => {
  t.addEventListener("click", () => {
    navbar.classList.toggle("opacity-0")
    navbar.classList.toggle("translate-x-[400%]")
  })
})

// sticky
const sectionHeroEl = document.querySelector("#feature")
const header = document.querySelector("#header")

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0]

    if (ent.isIntersecting === false) {
      header.classList.add("sticky")
      navbar.classList.remove("border-b")
    }

    if (ent.isIntersecting === true) {
      header.classList.remove("sticky")
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
)
obs.observe(sectionHeroEl)

// smooth

const allLinks = document.querySelectorAll("a:link")

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault()
    navbar.classList.add("opacity-0")
    navbar.classList.add("translate-x-[400%]")
    const href = link.getAttribute("href")

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href)
      sectionEl.scrollIntoView({ behavior: "smooth" })
    }
  })
})

// form
const form = document.querySelector(".form")

form.addEventListener("submit", (e) => {
  e.preventDefault()

  alert("Sign in Complete.")
})
