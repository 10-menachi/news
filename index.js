const mobile_menu = document.querySelector(".mobile-menu")
const hamburger = document.querySelector(".hamburger")
const close = document.querySelector(".times")

hamburger.addEventListener("click", () => {
  mobile_menu.classList.add("active")
})

close.addEventListener("click", () => {
  mobile_menu.classList.remove("active")
})
