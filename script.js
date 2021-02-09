let show = false 

const menuSection = document.querySelector(".menu-section")
const menutoggle = menuSection.querySelector(".menu-toggle")

menutoggle.addEventListener("click", () =>{
    menuSection.classList.toggle("on", show)

    show = !show
    
})