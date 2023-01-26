$(".picto").on("click", function(){
    $(".picto").toggleClass("close-btn");
    $(".menu").toggleClass("open-menu");
    console.log("oui")
});

let path = document.querySelector('.firstline')
let pathlength = path.getTotalLength()

path.style.strokeDasharray = pathlength + ' ' + pathlength;

path.style.strokeDashoffset = pathlength;

window.addEventListener('scroll', () => {
    var scrollpercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    var drawlength = pathlength * scrollpercentage;
    path.style.strokeDashoffset = pathlength - drawlength;
})

function scrollto722(){
    scrollTo(0,722)
}

const $card = document.querySelector('.card');
let bounds;

function rotateToMouse(e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const leftX = mouseX - bounds.x;
    const topY = mouseY - bounds.y;
    const center = {
    x: leftX - bounds.width / 2,
    y: topY - bounds.height / 2
    }
    const distance = Math.sqrt(center.x**2 + center.y**2);

$card.style.transform = `
    scale3d(1.07, 1.07, 1.07)
    rotate3d(
    ${center.y / 100},
    ${-center.x / 100},
    0,
    ${Math.log(distance)* 2}deg
    )`;

// $card.querySelector('.glow').style.backgroundImage = `
//     radial-gradient(
//     circle at
//     ${center.x * 2 + bounds.width/2}px
//     ${center.y * 2 + bounds.height/2}px,
//     #ffffff55,
//     #0000000f
//     )`;
}

$card.addEventListener('mouseenter', () => {
    
    bounds = $card.getBoundingClientRect();
    document.addEventListener('mousemove', rotateToMouse);
});

$card.addEventListener('mouseleave', () => {
    document.removeEventListener('mousemove', rotateToMouse);
    $card.style.transform = '';
    $card.style.background = '';
});