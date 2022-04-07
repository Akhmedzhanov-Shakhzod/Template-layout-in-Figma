
//
var slides = document.getElementsByClassName('slides_item'),
    prevBTN = document.getElementById('prev'),
    nextBTN = document.getElementById('next'),
    slideIndex = 1;


ShowSlides(slideIndex);

function ShowSlides(n) {
    if (n < 1) {
        slideIndex = slides.length;
    }
    else if (n > slides.length) {
        slideIndex = 1;
    }
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slides[slideIndex - 1].style.display = 'block';
}

function PlusSlides(n) {
    ShowSlides(slideIndex += n);
}


prevBTN.onclick = function() {
    PlusSlides(-1);
}

nextBTN.onclick = function() {
    PlusSlides(1);
}

//

var fixed_menu = document.getElementById("fixed_menu");
var btn = document.getElementById("button");
var close = document.getElementById("close");

btn.onclick = function () {
    fixed_menu.style.display = "block";
    btn.style.display = "none";
}

close.onclick = function () {
    btn.style.display = "block";
    fixed_menu.style.display = "none";
}