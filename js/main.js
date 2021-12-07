//Load time in JavaScript
window.addEventListener("load",
    function() {
        WhereIAm();
        document.getElementById("time").innerHTML = "Page load time is " + this.performance.now() / 1000 + " in JavaScript\n";
    });

const navButtons = document.querySelectorAll('.nav-button');

function WhereIAm() {
    console.log(document.location.href);
    navButtons.forEach(function(ref) {
        if (document.location.href == ref) {
            ref.classList.add('active');
            console.log("added link is: " + ref);
        } else {
            ref.classList.remove('active');
            console.log("removed link is: " + ref);
        }
    });
}

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