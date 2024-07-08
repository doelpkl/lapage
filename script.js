// JavaScript for toggling the menu on small screens
const navbarToggle = document.getElementById('js-navbar-toggle');
const mainNav = document.getElementById('js-menu');

navbarToggle.addEventListener('click', function () {
    mainNav.classList.toggle('active');
});


function openModal(imageUrl) {
    var modal = document.getElementById('modal');
    var modalImage = document.getElementById('modalImage');
    modal.style.display = 'block';
    modalImage.src = imageUrl;
}

function closeModal() {
    var modal = document.getElementById('modal');
    modal.style.display = 'none';
}