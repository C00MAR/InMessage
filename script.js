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