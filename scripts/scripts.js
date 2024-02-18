function play(){
   const homeSection = document.getElementById('home-screen');
   homeSection.classList.add('hidden');
//    console.log(homeSection)


// // show the playground
const playgroundSection = document.getElementById('play-ground');

playgroundSection.classList.remove('hidden')
// console.log(playgroundSection.classList)
// -----------------
continueGame
}

// ---------------------------
function continueGame(){
     // step  -1 : gennerate a random alphabet
}

function getARandomAlphabet(){
     const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
     const alphabets = alphabetString.split('');
     console.log(alphabets);

     // get a random index between 0- 25
     const randomNumber = Math.random() * 25;
     const index = Math.random(randomNumber);
 


     const alphabet = alphabets[index];
     confirm.log(index);
     return alphabet;
}