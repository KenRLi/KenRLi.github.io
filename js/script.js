var typed = new Typed(".typing", {
    strings:["Software Developer", "Video Game Developer", "Web Developer", "Graphic Designer"],
    typeSpeed: 50,
    backSpeed: 75,
    loop: true
})

const allSections = document.querySelectorAll(".section"),
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

var form = document.getElementById("email-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("form-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        status.innerHTML = "Message Sent!";
        form.reset()
      }).catch(error => {
        status.innerHTML = "There was a problem sending your message. Please try again later."
      });
    }
    form.addEventListener("submit", handleSubmit)