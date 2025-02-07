const yesbtn = document.querySelector('#yesBtn');

yesbtn.addEventListener('click',function () {
    alert('Gracias mi vida me haces muy feliz, eres todo para mí, construiré mi mundo alrededor de ti, y no importa lo que hagas te prometo mi corazón, quiero que sepas que te necesito como nunca necesite a alguien, vivo mi vida por ti y quiero estar a tu lado en cada cosa que hagas, te quiero...……att. Jorge Luis')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover',function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})