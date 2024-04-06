let dropDownBtn = document.querySelectorAll(".js-icon");
let paragraphElement1 = document.querySelector(".paraElement1");
let paragraphElement2 = document.querySelector(".paraElement2");
let paragraphElement3 = document.querySelector(".paraElement3");

let subTopicElement1 = document.querySelector(".FAQ-sub-topic1");
let subTopicElement2 = document.querySelector(".FAQ-sub-topic2");
let subTopicElement3 = document.querySelector(".FAQ-sub-topic3");

let buttonIcon1 = document.querySelector(".js-icon1");
let buttonIcon2 = document.querySelector(".js-icon2");
let buttonIcon3 = document.querySelector(".js-icon3");

let isPlus = true;

function toggleButtonText(x) {

    if (x == 1) {
        if (isPlus) {
            buttonIcon1.innerHTML = "-";
        } else {
            buttonIcon1.innerHTML = "+";
        }

    } else if (x == 2) {
        if (isPlus) {
            buttonIcon2.innerHTML = "-";
        } else {
            buttonIcon2.innerHTML = "+";
        }

    } else if (x == 3) {
        if (isPlus) {
            buttonIcon3.innerHTML = "-";
        } else {
            buttonIcon3.innerHTML = "+";
        }
    }

    isPlus = !isPlus;

}

function dropDown(param) {
    if (param == 1) {
        paragraphElement1.classList.toggle("content-show1"); 
        subTopicElement1.classList.toggle("topic-color-change1")
        toggleButtonText(1);                
        console.log("Got Clicked-1")
    } else if (param == 2) {
        paragraphElement2.classList.toggle("content-show2");
        subTopicElement2.classList.toggle("topic-color-change2")
        toggleButtonText(2);
        console.log("Got Clicked-2")
    } else if (param == 3) {
        paragraphElement3.classList.toggle("content-show3");
        subTopicElement3.classList.toggle("topic-color-change3")
        toggleButtonText(3);
        console.log("Got Clicked-3")
    }
    
}

const navElement = document.querySelector(".nav-item");
const hamburgerElement = document.querySelector(".hamburger");

hamburgerElement.addEventListener("click", () => {
    navElement.classList.toggle("nav-item--open");
    hamburgerElement.classList.toggle("hamburger--open");
});

navElement.addEventListener("click", () => {
    navElement.classList.remove("nav-item--open");
    hamburgerElement.classList.remove("hamburger--open");
});