function toggleMore(bottone, puntini, more) {
  console.log('hello');
  const moreStyle = more.style.display;
  if (moreStyle === 'none') {
    more.style.display = 'inline';
    puntini.style.display = 'none';
    bottone.textContent = 'Leggi di meno';
  } else {
    more.style.display = 'none';
    puntini.style.display = 'inline';
    bottone.textContent = 'Leggi di più';
  }
}

const card = Array.from(document.querySelectorAll('.card'));

for (var i = 0; i < card.length; i++) {
  const currentCard = card[i];
  const bottone = currentCard.querySelector('.btn');
  const puntini = currentCard.querySelector('.puntini');
  const more = currentCard.querySelector('.more');
  bottone.addEventListener('click', function() {
    toggleMore(bottone, puntini, more);
  });
}
