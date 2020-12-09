function myFunction() {
    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;
    console.log(sticky);
    console.log(window.pageYOffset)
    if (window.pageYOffset >= sticky){
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky")
    };
}