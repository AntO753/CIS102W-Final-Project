/*
Student Name:
File Name: script.js
Date:
*/

//Global variables
var video = document.getElementById("example"); 
var videoSource = document.getElementById("vid-src");
var descriptionSource = document.getElementById("despsrc");

//Hamburger menu function 
function hamburger() {
    var menu = document.getElementById("menu-links"); 
    var logo = document.getElementById("ffclogo");
    if (menu.style.display === "block" && logo.style.display === "none") { 
        menu.style.display = "none";
        logo.style.display = "block";
    } else {
        menu.style.display = "block";
        logo.style.display = "none";
    }
}

//Function to display the required papers video
function burpees() {
    videoSource.src = "media/papers.mp4"; 
    descriptionSource.src = "media/papers-descriptions.vtt";
    video.style.display = "block";
    video.load();
}

//Function to display the professional speaking example video
function mountain() {
    videoSource.src = "media/professional.mp4"; 
    descriptionSource.src = "media/professional-descriptions.vtt";
    video.style.display = "block";
    video.load();
}

//Function to display a promo code
function discount() {
    var promo = document.getElementById("special"); 
    promo.firstChild.nodeValue = "Promo Code: 15%OFF";
    promo.style.color = "#ffffff";
    promo.style.fontSize = "2em"; 
}