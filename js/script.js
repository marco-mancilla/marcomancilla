function showEmail() {

document.getElementById("email").innerHTML =
"marco.mancilla" + "@" + "gmail.com";

}

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(".fade").forEach(element => {

observer.observe(element);

});
