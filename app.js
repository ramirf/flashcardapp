const term = document.querySelector('.term');
const definition = document.querySelector('.definition');

let termz = document.getElementById('termz');
let defz = document.getElementById('defz');

const checkButton = document.querySelector('.check');
const nextButton = document.querySelector('.next');

let words = {
  'Hello': 'Hallo',
  'Goodbye': 'Auf Wiedersehen',
  'Good Morning': 'Guten Morgen'
}

let data = Object.entries(words);

function getRandomWord() {
  let randomTerm = data[Math.floor(Math.random() * data.length)];
  // term.innerHTML = `<h3>${randomTerm[0]}</h3>`
  // definition.innerHTML = `<h3>${randomTerm[1]}</h3>`

  termz.innerHTML = randomTerm[0];
  defz.innerHTML = randomTerm[1];
}



// console.log(data[0][0]);

checkButton.addEventListener('click', function()  {
  definition.style.opacity = '1';
})

nextButton.addEventListener('click', function() {
  definition.style.opacity = '0';
  getRandomWord();
})