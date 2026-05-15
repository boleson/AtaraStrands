let sidebarLogo = document.querySelector(".sidebar-logo");
let navSidebar = document.querySelector(".nav-sidebar");
let closesidebar = document.querySelector(".close-sidebar");

sidebarLogo.addEventListener("click", () => {
    navSidebar.classList.add('active');
});
closesidebar.addEventListener("click", () =>  {
    navSidebar.classList.remove('active');
});

let years = document.querySelectorAll(".year");

years.forEach((year) => {
    year.textContent = new Date().getFullYear();
});

