let choseimg = document.querySelectorAll('.select-img img');
let mainimg = document.querySelector('.gallery .main-img');
choseimg.forEach(img => img.addEventListener('click', () => {
    mainimg.src = img.src;
}))