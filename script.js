const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    })
})


const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

function scrollToSection(event, sectionId) {
    event.preventDefault(); 
    const section = document.getElementById(sectionId);
    section.scrollIntoView({
        behavior: 'smooth', 
        block: 'center' 
    });
}

function scrollToSection2(event, sectionId) {
    event.preventDefault(); 
    const section = document.getElementById(sectionId);
    section.scrollIntoView({
        behavior: 'smooth', 
        block: 'start' 
    });
}