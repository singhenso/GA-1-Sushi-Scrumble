$('.enter_link').click(function () {
    $(this).parent('#splashscreen').fadeOut(500);
    setTimeout(function() { getSushi(); }, 1000);
});
//These are the 8 possible winning combos to score 100 points
var winningcombo =[['Shrimp', 'Seaweed', 'Rice'],
                   ['Tuna', 'Seaweed', 'Rice'],
                   ['Scallop', 'Seaweed', 'Rice'],
                   ['Salmon', 'Seaweed', 'Rice'],
                   ['Squid', 'Seaweed', 'Rice'],
                   ['Snapper', 'Seaweed', 'Rice'],
                   ['Lobster', 'Seaweed', 'Rice'],
                   ['Scallop', 'Seaweed', 'Rice']];
//Empty array which gets filled with whatever the player clicks on
var playersChoices = [];
var targetSushi;
//Tells the player to make 1 of the 8 possible sushies
var getSushi = function() {
  targetSushi = winningcombo[Math.floor(Math.random()*7)];
  alert('Make me a ' + targetSushi[0] + ' Sushi!');
};
//These are the 9 ingredients. If clicked, addes that ingredient
//into the PLayerChoices array
//Trim removes any empty space
//Once the player clicks three ingredients, it runs the Checkwin function.
$('#cell1').on('click', function() {
  //var cell1 = $(this).text();
  playersChoices.push('Rice');
  if (playersChoices.length === 3) {
    checkWin();
    playersChoices = [];
  }
});

$('#cell2').on('click', function() {
  //var cell2 = $(this).text();
  playersChoices.push('Seaweed');
  if (playersChoices.length === 3) {
    checkWin();
    playersChoices = [];
  }
});
$('#cell3').on('click', function() {
  //var cell3 = $(this).text();
  playersChoices.push('Tuna');
   if (playersChoices.length === 3) {
    checkWin();
    playersChoices = [];
  }
});
$('#cell4').on('click', function() {
  //var cell4 = $(this).text();
  playersChoices.push('Shrimp');
   if (playersChoices.length === 3) {
    checkWin();
    playersChoices = [];
  }
});
$('#cell5').on('click', function() {
  //var cell5 = $(this).text();
  playersChoices.push('Salmon');
   if (playersChoices.length === 3) {
    checkWin();
    playersChoices = [];
  }
});
$('#cell6').on('click', function() {
  //var cell6 = $(this).text();
  playersChoices.push('Squid');
   if (playersChoices.length === 3) {
    checkWin();
    playersChoices = [];
  }
});
$('#cell7').on('click', function() {
  //var cell7 = $(this).text();
  playersChoices.push('Snapper');
   if (playersChoices.length === 3) {
    checkWin();
    playersChoices = [];
  }
});
$('#cell8').on('click', function() {
  //var cell8 = $(this).text();
  playersChoices.push('Lobster');
   if (playersChoices.length === 3) {
    checkWin();
    playersChoices = [];
  }
});
$('#cell9').on('click', function() {
  //var cell9 = $(this).text();
  playersChoices.push('Scallop');
   if (playersChoices.length === 3) {
    checkWin();
    playersChoices = [];
  }
});

//Score is a variable that holds all the score, starting from 0.
var score = 0;

function showScore() {
  $('#scoreboard').text(score);
}

//If player scores over 1000, the Game is Over is the player Wins!
function gameOver() {
  if (score === 500) {
    alert('You won the Game! Congrats! Continue playing to beat your high Score!');
 } else if (score <= 0) {
  alert('You made the Wrong Sushi!');
  if (score === -300) {
    alert('You have Lost the Game! Try again');
  }
 }
}

//checkWin functions runs everytime player clicks on ingredients to
//to compare it to the winning choices.
var checkWin = function() {
var wrongAnswer = true;
    var count = 0;
    var recipe = targetSushi;
    for (var j=0; j<playersChoices.length; j++) {
      var choice=playersChoices[j];
      if (recipe.indexOf(choice) === j) {
        console.log('you got one right ');
        count++;
        if (count === 3) {
          console.log('You made the Sushi with correct ingredients!');
          wrongAnswer = false;
          score= score + 100;
          gameOver();
          showScore();
        }
        continue;
      }
  }
  if(wrongAnswer){
    score= score - 100;
    showScore();
    gameOver();;

  }
//getSushi is a function that pops up within 2 seconds of starting game
getSushi();};
