var auto = true;
var slideIndex = 1;
var autoIntv = setInterval(nextSlide, 4000);

showSlides();




function toggleAuto() {
    console.log("playpause");
    var playpause = document.getElementById("playpause");
    if (auto) {
        auto = false;
        playpause.className = 'play';
        clearInterval(autoIntv);
        showSlides();
    } else {
        auto = true;
        playpause.className = 'pause';
        autoIntv = setInterval(nextSlide, 4000);
    }
}

// checkOrientation();


// window.onresize = function (event) {
//     checkOrientation();
// }

// function checkOrientation() {
//     var slides = document.getElementsByClassName("slide");
//     if (window.innerHeight > window.innerWidth) {
//         //portrait

//     } else {
//         //landscape
//     }
// }
// document.querySelectorAll('.slide').classList.add('portrait')

// if (auto) {
//     //setInterval(function() {slideIndex++}, 4000);
//     //setInterval(showSlides, 4000); // Change image every 4 seconds
//     setInterval(nextSlide, 4000);
// } else {
//     clearInterval();
//     showSlides();
// }

function nextSlide() {
    slideIndex++;
    //console.log(slideIndex);
    showSlides()
}

function prevSlide() {
    slideIndex--;
    //console.log(slideIndex);
    showSlides()
}

function clearDisplay() {
    var slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].className = slides[i].className.replace(" active", "");
    }
}

//start from https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow_auto
function showSlides() {
    var i;

    var slides = document.getElementsByClassName("slide");
    //   var dots = document.getElementsByClassName("dot");
    // for (i = 0; i < slides.length; i++) {
    //     slides[i].style.display = "none";
    // }
    for (i = 0; i < slides.length; i++) {
        slides[i].className = slides[i].className.replace(" active", "");
    }

    //   if (auto) {
    //       slideIndex++;
    //   }
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    //added backwards scroll loop
    if (slideIndex < 1) {
        slideIndex = slides.length;
    }

    //   for (i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace(" active", "");
    //   }

    // slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].className += " active";
    //   dots[slideIndex-1].className += " active";
    // if (auto) {
    //     setTimeout(showSlides, 4000); // Change image every 4 seconds
    //  } 
}
//end from https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow_auto

//start from https://www.sitepoint.com/html5-javascript-mouse-wheel/
//changed myimage to slide
var slide = document.getElementById("main-content");
if (slide.addEventListener) {
    // IE9, Chrome, Safari, Opera
    slide.addEventListener("mousewheel", MouseWheelHandler, false);
    // Firefox
    slide.addEventListener("DOMMouseScroll", MouseWheelHandler, false);
}
// IE 6/7/8
else slide.attachEvent("onmousewheel", MouseWheelHandler);

function MouseWheelHandler(e) {

    // cross-browser wheel delta
    var e = window.event || e; // old IE support
    var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
    //myimage.style.width = Math.max(50, Math.min(800, myimage.width + (30 * delta))) + "px";

    //added scroll to next/prev slide
    slideIndex += delta;
    showSlides();

    return false;
}

//end from https://www.sitepoint.com/html5-javascript-mouse-wheel/

//start from https://stackoverflow.com/questions/5597060/detecting-arrow-key-presses-in-javascript
document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
        prevSlide();
    } else if (e.keyCode == '40') {
        // down arrow
        nextSlide();
    } else if (e.keyCode == '37') {
        // left arrow
        prevSlide();
    } else if (e.keyCode == '39') {
        // right arrow
        nextSlide();
    }

}
// end from https://stackoverflow.com/questions/5597060/detecting-arrow-key-presses-in-javascript





//thanks to https://stackoverflow.com/questions/667555/how-to-detect-idle-time-in-javascript-elegantly
//var idleTime = 0;
var guion = 0;
var idleInterval = setInterval(timerIncrement, 1000); // 1 second

document.onmousemove = resetIdle;
document.onclick = resetIdle;

function timerIncrement() {
    //idleTime = idleTime + 1;
    //console.log("guion", guion);
    if (guion >= 1) {
        guion = guion + 1;
        if (guion > 6) { //gui hides after 6 secs
            //hide gui
            var gui = document.getElementById("gui");
            var newone = gui.cloneNode(true);
            gui.parentNode.replaceChild(newone, gui);
            gui = document.getElementById("gui");
            gui.className = 'guioff';
            guion = 0;
        }
    }
}

function resetIdle() {
    //idleTime = 0;
    if (guion === 0) { //if gui is not on, click or mouse move will trigger it
        guion = 1; //gui is now displayed
        //show gui
        var gui = document.getElementById("gui");
        var newone = gui.cloneNode(true);
        gui.parentNode.replaceChild(newone, gui);
        gui = document.getElementById("gui");
        gui.className = 'guion';
    } else { //gui already on
        guion = 1; //gui will stay for another 3 secs
        var gui = document.getElementById("gui");
        var newone = gui.cloneNode(true);
        gui.parentNode.replaceChild(newone, gui);
        gui = document.getElementById("gui");
        gui.className = 'guistay';
    }

}