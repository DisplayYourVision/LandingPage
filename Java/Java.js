function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = -100;
  
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

const menuBTN = document.querySelector('.Menu')
let menuOpen = false;

menuBTN.addEventListener('click', () => 
{
    if(!menuOpen)
    {
        menuBTN.classList.add('open');
        menuOpen = true;
    }else
    {
        menuBTN.classList.remove('open');
        menuOpen = false;
    }
})

function mouseHoverPart(index)
{
    document.getElementById("part1").style.opacity = 0;
    document.getElementById("part2").style.opacity = 0;
    document.getElementById("part3").style.opacity = 0;

    document.getElementById("part" + index).style.opacity = 1;
}

function mouseExitPart(index)
{
    document.getElementById("part1").style.opacity = 1;
    document.getElementById("part2").style.opacity = 1;
    document.getElementById("part3").style.opacity = 1;
}
