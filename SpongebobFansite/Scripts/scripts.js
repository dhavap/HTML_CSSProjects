//DYNAMIC YEAR
var footeryear = document.getElementById("year")
footeryear.innerHTML = new Date().getFullYear()

// ON SCROLL
totopbutton = document.getElementById("toTopBtn");

//sticky navbar and display to top button
function stickyNav() {
    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
        totopbutton.style.display = "block";
    } else {
        navbar.classList.remove("sticky");
        totopbutton.style.display = "none";
    };
}

//totop button functionality
function toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}



