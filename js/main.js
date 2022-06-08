let aside = document.querySelector('aside');
let asideButton = aside.querySelector('.aside-button');
let asideState = false;

asideButton.addEventListener('click', function () {
    console.log(aside.classList);
    if (asideState) {
        aside.classList.remove('aside-open');
        asideButton.innerText = "menu";
        asideState = false;
    } else {
        aside.classList.add('aside-open');
        asideButton.innerText = "close";
        asideState = true;
    }
});

let images = document.querySelectorAll('img:not(#zoomed-img)');
let zoomedOut = document.getElementById('zoomed');
let zoomedOutImg = document.getElementById('zoomed-img');
let zoomedOutCaption = document.querySelector('#zoomed p');
let zoomedOutClose = document.querySelector('#zoomed span');
images.forEach(img => {
    console.log(img)
    img.addEventListener('click', function(e) {
        zoomedOutCaption.innerHTML = e.target.parentNode.querySelector("figcaption").innerHTML;
        zoomedOutImg.src = e.target.parentNode.querySelector("img").src;
        zoomedOut.classList.add('visible');
    })
})

zoomedOutImg.addEventListener('click', function() {
    zoomedOut.classList.remove('visible');
})

zoomedOutClose.addEventListener('click', function() {
    zoomedOut.classList.remove('visible');
})