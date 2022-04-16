// const myBtn = document.querySelector('.dropbtn')

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
    var dropdowns = document.getElementsByClassName("dropdown-content");

    for (let i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];

        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
        // else {
        //     event.target.parentElement.querySelector('div').classList.add('show')
        //     // openDropdown.classList.add('show');
        // }
    }
    if (event.target.className == 'dropbtn') {
        console.log(event.target)
        // var dropdowns = document.getElementsByClassName("dropdown-content");

        // for (let i = 0; i < dropdowns.length; i++) {
        //     var openDropdown = dropdowns[i];

        //     if (openDropdown.classList.contains('show')) {
        //         console.log("salam")
        //         openDropdown.classList.remove('show');
        //     }
        //     // else {
        //     //     event.target.parentElement.querySelector('div').classList.add('show')
        //     //     // openDropdown.classList.add('show');
        //     // }
        // }
        if (event.target.parentElement.querySelector('div').className.includes('show')) {
            event.target.parentElement.querySelector('div').classList.remove('show')
        }
        else {
            event.target.parentElement.querySelector('div').classList.add('show')
        }
    }


}


// Read More

function readmoreFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("readmoreBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Daha ətraflı";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Bağla";
        moreText.style.display = "inline";
    }
}












// Scroll Back To Top Button


var mybutton = document.getElementById("myBtn");


window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "flex";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// slider

$(function () {
    $('.items').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
    })
})


$(function () {
    $('.partners_slider').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    })
})

$(function () {
    $('.worksheets_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    })
})

$(function () {
    $('.commentboxes_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
    })
})


// loading

$(window).on("load", function () {
    $(".loader").fadeOut("slow");
});





// TYPING EFFECT

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["hüquqi", "akademik", "korporativ"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 750; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    }
    else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    }
    else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function () { // On DOM Load initiate the effect
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});


// LOADING

// window.addEventListener('load', function () {
//     this.document.body.style.overflow = 'hidden'
//     document.querySelector('.page-loader').style.display = 'flex'
// })

// setTimeout(function () {
//     this.document.body.style.overflow = ''
//     document.querySelector('.page-loader').style.display = 'none'
// }, 3000)