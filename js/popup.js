let popup = document.getElementById('popup');
let popupClose = document.querySelector('#popup span');

popupClose.addEventListener('click', function() {
    popup.classList.remove('visible');
})