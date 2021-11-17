let circle = document.querySelector('.parallax_circle');
let aravara = document.querySelector('.header_img--main');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    circle.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
    aravara.style.transform = 'translate(+' + x * 5 + 'px, -' + y * 5 + 'px)';
});