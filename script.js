const characters = document.querySelectorAll('.character');
const player1Span = document.getElementById('player1');
const player2Span = document.getElementById('player2');
const player1Img = document.getElementById('player1-img');
const player2Img = document.getElementById('player2-img');

let turn = 1;

characters.forEach(character => {
  character.addEventListener('click', () => {
    if (character.dataset.player !== 'none') return; // Já escolhido

    if (turn === 1) {
      character.classList.add('selected-p1');
      character.dataset.player = 'player1';
      player1Span.textContent = character.dataset.name;
      player1Img.src = character.dataset.gif;
      turn = 2;
    } else if (turn === 2) {
      character.classList.add('selected-p2');
      character.dataset.player = 'player2';
      player2Span.textContent = character.dataset.name;
      player2Img.src = character.dataset.gif;
      turn = 1;
    }
  });
});
