//FOTO
let slides = document.querySelectorAll('.slide');
let index = 0;

function showNextSlide() {
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}

setInterval(showNextSlide, 2000);





//TIMER
const startDate = new Date(2025, 2, 20); 

function atualizarTimer() {
  const agora = new Date();
  const diferenca = agora - startDate;

  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
  const segundos = Math.floor((diferenca / 1000) % 60);

  document.getElementById("timer").textContent =
    `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos 💞`;
}

setInterval(atualizarTimer, 1000);
atualizarTimer();


// ANIMAÇÃO EM CASCATA AO ENTRAR NO SITE
window.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".animate-item");

    items.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add("show");
        }, index * 300); // cada elemento aparece 300ms depois do anterior
    });
});