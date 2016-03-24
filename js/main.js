$('.enter_link').click(function () {
    $(this).parent('#splashscreen').fadeOut(500);
    setTimeout(function() { getSushi(); }, 1500);
});

var winningcombo =[['Shrimp', 'Seaweed', 'Rice'],
                   ['Tuna', 'Seaweed', 'Rice'],
                   ['Scallop', 'Seaweed', 'Rice'],
                   ['Salmon', 'Seaweed', 'Rice'],
                   ['Squid', 'Seaweed', 'Rice'],
                   ['Snapper', 'Seaweed', 'Rice'],
                   ['Lobster', 'Seaweed', 'Rice'],
                   ['Scallop', 'Seaweed', 'Rice']];

var playersChoices = [];
var targetSushi ;
var getSushi = function() {
  targetSushi = winningcombo[Math.floor(Math.random()*7)];
  alert('Make me a ' + targetSushi[0] + ' Sushi!');
};

$('#cell1').on('click', function() {
  var cell1 = $(this).text();
  playersChoices.push(cell1.trim());
  console.log(cell1);
  if (playersChoices.length === 3) {
    checkWin();
    playersChoices = [];
  }
});

$('#cell2').on('click', function() {
  var cell2 = $(this).text();
  playersChoices.push(cell2.trim());
  console.log(cell2);
  if (playersChoices.length === 3) {
    checkWin();
    playersChoices = [];
  }
});
$('#cell3').on('click', function() {
  var cell3 = $(this).text();
  playersChoices.push(cell3.trim());
  console.log(cell3);
   if (playersChoices.length === 3) {
    checkWin();
    playersChoices = [];
  }
});
$('#cell4').on('click', function() {
  var cell4 = $(this).text();
  playersChoices.push(cell4.trim());
  console.log(cell4);
   if (playersChoices.length === 3) {
    checkWin();
    playersChoices = [];
  }
});
$('#cell5').on('click', function() {
  var cell5 = $(this).text();
  playersChoices.push(cell5.trim());
  console.log(cell5);
   if (playersChoices.length === 3) {
    checkWin();
    playersChoices = [];
  }
});
$('#cell6').on('click', function() {
  var cell6 = $(this).text();
  playersChoices.push(cell6.trim());
  console.log(cell6);
   if (playersChoices.length === 3) {
    checkWin();
    playersChoices = [];
  }
});
$('#cell7').on('click', function() {
  var cell7 = $(this).text();
  playersChoices.push(cell7.trim());
  console.log(cell7);
   if (playersChoices.length === 3) {
    checkWin();
    playersChoices = [];
  }
});
$('#cell8').on('click', function() {
  var cell8 = $(this).text();
  playersChoices.push(cell8.trim());
  console.log(cell8);
   if (playersChoices.length === 3) {
    checkWin();
    playersChoices = [];
  }
});
$('#cell9').on('click', function() {
  var cell9 = $(this).text();
  playersChoices.push(cell9.trim());
  console.log(cell9);
   if (playersChoices.length === 3) {
    checkWin();
    playersChoices = [];
  }
});


var score = 0;

function showScore() {
  $('#scoreboard').text(score);
}

function gameOver() {
  if (score >= 1000) {
    alert('You won the Game! Congrats! ');
 } else if (score <= 0) {
  alert('You have lost!');
 }
}

var sushi;
var checkWin = function() {


var right_wrong = true;
    var count = 0;
    var recipe = targetSushi;
    console.log(recipe);
    for (var j=0; j<playersChoices.length; j++) {
      var choice=playersChoices[j];
      if (recipe.indexOf(choice) === j) {
        console.log('you got one right ');
        count++;
        if (count === 3) {
          console.log('You made the Sushi with correct ingredients!');
          right_wrong = false;
          score= score + 100;
          showScore();
        }
        continue;
      }
    }

  if(right_wrong){
    score= score - 100;
    showScore();
    gameOver();
    console.log('none match');

  }
getSushi();};
