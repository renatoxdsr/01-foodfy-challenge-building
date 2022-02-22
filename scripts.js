

const modalOverlay = document.querySelector('.modaloverlay');
const cards = document.querySelectorAll('.viewed-card');

for(let card of cards) {
    
    card.addEventListener("click", function(){
        const fotoId = card.getAttribute('id');
        modalOverlay.classList.add('active');
        modalOverlay.querySelector("img").src =`img/${fotoId}`;
        modalOverlay.querySelector("h1").innerHTML = card.querySelector("h1").textContent;
        modalOverlay.querySelector("p").innerHTML = card.querySelector("p").textContent;
    })
}

document.querySelector(".close-modal").addEventListener("click", function() {
    modalOverlay.classList.remove('active');
})

