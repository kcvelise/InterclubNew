
/// <reference path="jquery-1.8.3.min.js" />

$(window).load(function () {
    // Animate loader off screen
    $(".se-pre-con").fadeOut("slow");;
});




//hello gallery tab
function openYear(evt, cityName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("albumYear");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("yearTab");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" w3-border-blue", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.firstElementChild.className += " w3-border-blue";
}
//var myBtn = document.getElementsByClassName("yearTab")[0];
//myBtn.click();

//end of gallery tab

//

function openDivision(evt, cityName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("division");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("Divisionlink");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" w3-border-red", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.firstElementChild.className += " w3-border-red";
}

//


//slideshow
var slideIndex = 1;

function plusDivs(n, parent) {
    showDivs(slideIndex += n, parent);
}
function currentDiv(n, parent) {
   
    showDivs(slideIndex = n, parent);
}
function showDivs(n, parent) {
    var i;
    var x = $('.' + parent).find(".mySlides");
   
    var dots = document.getElementsByClassName("demo");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-red", "");
    }
    x[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " w3-red";
}
//end of slideshow