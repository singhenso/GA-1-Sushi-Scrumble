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

// when the user clicks on a button, get the text  and add it
// to the playersChoices array
var playersChoices = [];
var targetSushi ;
var getSushi = function() {
  targetSushi = winningcombo[Math.floor(Math.random()*7)];
  alert('Make me a ' + targetSushi[0] + ' Sushi!');
};




//make a screen tell the player to make x sushi
//player clicks ok and then continues
// if player clicks on the correct ingredient. player scores

//link


// $('#btn1').on('click', function() {
//   var gamebegin = $(this).text();
//   console.log(gamebegin);
// });

// $('#btn2').on('click', function() {
//   var instructions =$(this).text();
//   playersChoices.push(instructions);
// });

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

///var checkwin = function() {
  //loop through the players choices
  //if the choice is in the winning array it's good
  //if it's not, they lose
              // var count = [];
              // for (var i=0;i<playersChoices.length; i++) {
              //   var choice = playersChoices[i];
              //   //if the choice is not there
              //   for (var x=0;x<winningcombo[i].length;x++) {
              //     count.push(playersChoices[i][x]);
              //     console.log(count);
              //    if(recipe === choice){
              //       console.log(playersChoices);
              //       score= score + 100;
              //       showScore();
              //       alert("you win!");
              //       gameover();
              //       choice.length = 0;
              //       playersChoices.length = 0;
              //       break;
              //       //return;
              //       //location.reload();
              //     } else if (recipe != choice); {
              //       score= score - 100;
              //       console.log(playersChoices);
              //       showScore();
              //       alert("you lost!");
              //       choice.length = 0;
              //       playersChoices.length = 0;
              //       i+=1;
              //       break;
              //       //i+=1;
              //     }
              //   }
//     }
  //if we don't return from the function early
  //return true
//   }
// };

 //checkwin();

var checkWin = function() {
  //loop through the players choices
  //if the choice is in the winning array it's good
  //if it's not, they lose

var right_wrong = true;
  //for (var i=0; i<winningcombo.length;i++) {
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

  //}

  if(right_wrong){
    score= score - 100;
    showScore();
    gameOver();
    console.log('none match');

  }
getSushi();};


      // $('td').on('click', function() {
      //   for (var i = 0; i < playersChoices.length; i ++) {
      //    var choice = playersChoices[i];
      //    for(var j =0; j < )
      //   }
      // });



// $('td').on('click', function(){
//  if (playersChoices.length >= 3){
//     var choice = playersChoices.join(',');
//   for (var i=0; i< winningcombo.length;i++) {
//     var recipe = winningcombo[i].join(',');
//     console.log(choice);
//       if(recipe === choice){
//         console.log(playersChoices);
//         score= score + 100;
//         showScore();
//         alert("you win!");
//         gameover();
//         choice.length = 0;
//         playersChoices.length = 0;
//         break;
//         //return;
//         //location.reload();
//       } else if (recipe != choice); {
//         score= score - 100;
//         console.log(playersChoices);
//         showScore();
//         alert("you lost!");
//         choice.length = 0;
//         playersChoices.length = 0;
//         i+=1;
//         break;
//         //i+=1;
//       }
//     }
//   }
// });

// $('td').on('click', function(){
//   if (playersChoices.length >= 3) {
//     var choice = playersChoices.join(',');
//   for (var i=0; i< winningcombo.length;) {
//     var recipe = winningcombo[i].join(',');
//     console.log(choice);
//       if(recipe === choice){
//         console.log(playersChoices);
//         score= score + 100;
//         showScore();
//         alert("you win!");
//         choice.length = 0;
//         playersChoices.length = 0;
//         break;
//         //return;
//         //location.reload();
//       } else if (recipe != choice); {
//         score= score - 100;
//         console.log(playersChoices);
//         showScore();
//         alert("you lost!");
//         choice.length = 0;
//         playersChoices.length = 0;
//         i+=1;
//         break;
//        // i+=1;
//       }
//       }
//     }
//   });
