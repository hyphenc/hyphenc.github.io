"use strict";

function switchColor() {
  if(document.getElementsByTagName("body")[0].style.color=="var(--dark-main-font-color)"){
    // light
    document.getElementsByTagName("body")[0].style.color="var(--main-font-color)";
    document.getElementsByTagName("body")[0].style.background="var(--main-bg-color)";
    document.getElementById("i-moon").style.color="var(--main-font-color)";
    document.getElementById("i-github").style.color="var(--main-font-color)";
    document.getElementsByClassName("header")[0].style.background="var(--header-bg-color)";
    document.getElementsByTagName("img")[0].style.filter="unset";
    document.documentElement.style.setProperty("--highlight-color", "rgb(210,210,210)");
    document.documentElement.style.setProperty("--highlighted-text-color", "rgb(75,75,75)");

  } else {
    // dark
    document.getElementsByTagName("body")[0].style.color="var(--dark-main-font-color)";
    document.getElementsByTagName("body")[0].style.background="var(--dark-main-bg-color)";
    document.getElementById("i-moon").style.color="var(--dark-main-font-color)";
    document.getElementById("i-github").style.color="var(--dark-main-font-color)";
    document.getElementsByClassName("header")[0].style.background="var(--dark-header-bg-color)";
    document.getElementsByTagName("img")[0].style.filter="invert(0.7)";
    document.documentElement.style.setProperty("--highlight-color", "rgb(40,40,40)");
    document.documentElement.style.setProperty("--highlighted-text-color", "rgb(190,190,190)");
    
}}

function pinheader() {
  var header = document.getElementsByClassName("header")[0];
  (window.pageYOffset > header.offsetTop) ? header.classList.add("sticky") : header.classList.remove("sticky");
}
window.onscroll = function() { pinheader(); };
