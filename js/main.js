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
  $('#newChoice').append('<img src="./images/rice.jpg" width = 100px />');
  playersChoices.push('Rice');
  if (playersChoices.length === 3) {
    checkWin();
    playersChoices = [];
  }
});

$('#cell2').on('click', function() {
  $('#newChoice').append('<img src="./images/sea_weed.png" width = 100px />');
  playersChoices.push('Seaweed');
  if (playersChoices.length === 3) {
    checkWin();
    playersChoices = [];
  }
});
$('#cell3').on('click', function() {
  $('#newChoice').append('<img src="./images/tuna.jpg" width = 100px />');
  playersChoices.push('Tuna');
   if (playersChoices.length === 3) {
    checkWin();
    playersChoices = [];
  }
});
$('#cell4').on('click', function() {
  $('#newChoice').append('<img src="./images/shrimp.jpg" width = 100px />');
  playersChoices.push('Shrimp');
   if (playersChoices.length === 3) {
    checkWin();
    playersChoices = [];
  }
});
$('#cell5').on('click', function() {
  $('#newChoice').append('<img src="./images/salmon.jpg" width = 100px />');
  playersChoices.push('Salmon');
   if (playersChoices.length === 3) {
    checkWin();
    playersChoices = [];
  }
});
$('#cell6').on('click', function() {
  $('#newChoice').append('<img src="./images/squid.jpg" width = 100px />');
  playersChoices.push('Squid');
   if (playersChoices.length === 3) {
    checkWin();
    playersChoices = [];
  }
});
$('#cell7').on('click', function() {
  $('#newChoice').append('<img src="./images/snapper.jpg" width = 100px />');
  playersChoices.push('Snapper');
   if (playersChoices.length === 3) {
    checkWin();
    playersChoices = [];
  }
});
$('#cell8').on('click', function() {
  $('#newChoice').append('<img src="./images/lobster.jpg" width = 100px />');
  playersChoices.push('Lobster');
   if (playersChoices.length === 3) {
    checkWin();
    playersChoices = [];
  }
});
$('#cell9').on('click', function() {
  $('#newChoice').append('<img src="./images/scallop.jpg" width = 100px />');
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
    alert('You won the Game! Congrats!');
    score = 0;
 } else if (score <= 0) {
  alert('You made the Wrong Sushi!');
  if (score === -300) {
    alert('You have Lost the Game! Try again');
  }
 }
}

//this randominzes the grid of ingredient selection




          //var randomTable =  $('#column').get().sort(function() {
          //   return Math.round(Math.random())-0.5;
          //  });
          //  $(randomTable).appendTo(randomTable[0].parentNode).show();

var randomizer = function() {
    var randomTable =  $('#column').get().sort(function() {
            return Math.round(Math.random())-0.5;
           });
           $(randomTable).appendTo(randomTable[0].parentNode).show();
         };


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
          randomizer();
         $("#newChoice img").remove();
        }
        continue;
      }
  }
  if(wrongAnswer){
    score= score - 100;
    showScore();
    gameOver();
    randomizer();
    $("#newChoice img").remove();

  }
//getSushi is a function that pops up within 2 seconds of starting game
getSushi();};
