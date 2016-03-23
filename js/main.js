// shrimp sushi = rice, seweed , shrimp

$('.enter_link').click(function () {
    $(this).parent('#splashscreen').fadeOut(500);
});

var Tuna = {
  name: 'Tuna',
  ingredients: ["Rice","Seaweed","Tuna"],
};

var Scallop = {
  name: 'Tuna',
  ingredients: ["Rice","Seaweed","Tuna"],
};
var Salmon = {
  name: 'Salmon',
  ingredients: ["Rice","Seaweed","Salmon"],
};
var Scallop = {
  name: 'Scallop',
  ingredients: ["Rice","Seaweed","Scallop"],
};
var Squid = {
  name: 'Squid',
  ingredients: ["Rice","Seaweed","Squid"],
};
var Snapper = {
  name: 'Snapper',
  ingredients: ["Rice","Seaweed","Snapper"],
};
var Lobster = {
  name: 'Lobster',
  ingredients: ["Rice","Seaweed","Lobster"],
};
var Shrimp = {
  name: 'Shrimp',
  ingredients: ["Rice","Seaweed","Shrimp"],
  //this function should tell the user to make a specific sushi
};
var winningcombo =[['Shrimp', 'Seaweed', 'Rice'],
                   ['Tuna', 'Seaweed', 'Rice'],
                   ['Scallop', 'Seaweed', 'Rice'],
                   ['Salmon', 'Seaweed', 'Rice'],
                   ['Squid', 'Seaweed', 'Rice'],
                   ['Snapper',   'Seaweed', 'Rice'],
                   ['Lobster', 'Seaweed', 'Rice'],
                   ['Scallop', 'Seaweed', 'Rice']];

// when the user clicks on a button, get the text  and add it
// to the playersChoices array
var playersChoices = [];


//make a screen tell the player to make x sushi
//player clicks ok and then continues
// if player clicks on the correct ingredient. player scores

//link


$('#btn1').on('click', function() {
  var gamebegin = $(this).text();
  console.log(gamebegin);
});

$('#btn2').on('click', function() {
  var instructions =$(this).text();
  playersChoices.push(instructions);
});

$('#cell1').on('click', function() {
  var cell1 = $(this).text();
  playersChoices.push(cell1.trim());
});

$('#cell2').on('click', function() {
  var cell2 = $(this).text();
  playersChoices.push(cell2.trim());
});
$('#cell3').on('click', function() {
  var cell3 = $(this).text();
  playersChoices.push(cell3.trim());
});
$('#cell4').on('click', function() {
  var cell4 = $(this).text();
  playersChoices.push(cell4.trim());
});
$('#cell5').on('click', function() {
  var cell5 = $(this).text();
  playersChoices.push(cell5.trim());
});
$('#cell6').on('click', function() {
  var cell6 = $(this).text();
  playersChoices.push(cell6.trim());
});
$('#cell7').on('click', function() {
  var cell7 = $(this).text();
  playersChoices.push(cell7.trim());
});
$('#cell8').on('click', function() {
  var cell8 = $(this).text();
  playersChoices.push(cell8.trim());
});
$('#cell9').on('click', function() {
  var cell9 = $(this).text();
  playersChoices.push(cell9.trim());
});


var score = 0;

function showScore() {
  $('#scoreboard').text(score);
}

function gameover() {
  if (score >= 1000)
    alert('You won the Game! Congrats! ');
}

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

// checkwin();

var checkWin = function() {
  //loop through the players choices
  //if the choice is in the winning array it's good
  //if it's not, they lose
  var count = 0;
  for (var i=0; i<winningcombo.length;i++) {
    var recipe = winningcombo[i];
    console.log(recipe);
    for (var j=0; j<playersChoices.length; j++) {
      var choice=playersChoices[j];
      if (recipe.indexOf(choice) === -1) {
        continue;
      } else {
        count++;
        console.log(count);
      }
    }
    if (count === 3) {
      console.log('Win!');
      return true;
    } else {
      count = 0;
    }
  }
};

      // $('td').on('click', function() {
      //   for (var i = 0; i < playersChoices.length; i ++) {
      //    var choice = playersChoices[i];
      //    for(var j =0; j < )
      //   }
      // });



// $('td').on('click', function(){
//   if (playersChoices.length >= 3){
//     var choice = playersChoices.join(',');
//   for (var i=0; i< winningcombo.length;i++) {
//     var recipe = winningcombo[i].join(',');
//     console.log(choice);
      // if(recipe === choice){
      //   console.log(playersChoices);
      //   score= score + 100;
      //   showScore();
      //   alert("you win!");
      //   gameover();
      //   choice.length = 0;
      //   playersChoices.length = 0;
      //   break;
      //   //return;
      //   //location.reload();
      // } else if (recipe != choice); {
      //   score= score - 100;
      //   console.log(playersChoices);
      //   showScore();
      //   alert("you lost!");
      //   choice.length = 0;
      //   playersChoices.length = 0;
      //   i+=1;
      //   break;
      //   //i+=1;
//       }
//     }
//   }
// });

// $('td').on('click', function(){
//   if (playersChoices.length >= 3){
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
//         //i+=1;
//       }
//     }
//   }
// });
