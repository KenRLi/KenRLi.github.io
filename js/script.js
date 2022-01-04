var typed = new Typed(".typing", {
    strings:["Software Developer", "Video Game Developer", "Web Developer", "Graphic Designer"],
    typeSpeed: 50,
    backSpeed: 75,
    loop: true
})

const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSections = document.querySelectorAll(".section"),
    totalSections = allSections.length;

const navTogglerBtn = document.querySelector(".nav-toggler"),
    sidebar = document.querySelector(".sidebar");

navTogglerBtn.addEventListener("click", () => {
    sidebarSectionTogglerBtn();
})

function sidebarSectionTogglerBtn()
{
    sidebar.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for (let i = 0; i < totalSections; i++)
    {
        allSections[i].classList.toggle("open");
    }
}