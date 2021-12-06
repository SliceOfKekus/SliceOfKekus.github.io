//Load time in JavaScript
window.addEventListener("load",
    function() {
        document.getElementById("time").innerHTML = "Page load time is " + this.performance.now() / 1000 + " in JavaScript\n";
    });

/*
const navButtons = document.querySelectorAll('.nav-button');



navButtons.forEach(function(link) {
    console.log('Hey!');
    link.addEventListener('click', event => {
        categories.forEach(function(lined) { lined.classList.remove('active'); })
        link.classList.add('active');
    })
});
*/