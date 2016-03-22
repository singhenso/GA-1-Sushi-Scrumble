

$('#btn1').on('click', function() {
  alert('Let the Games Begin!');
});

$('#btn2').on('click', function() {
  alert('These are the Instructions');
});

$('.ingredient').on('click', function() {
  var opt2 = $(this).text();
  console.log(opt2);
});




  // we are trying to console what we click on
  //we have to put an event listener, and target the things we want to click on
  // we are trying to type out what the text of that particular dom node.


document.getElementByID(element ID)
