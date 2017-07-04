//Project Euler: Find the sum of all the multiples of 3 or 5 below 1000.
var sum = 0;

function multiplesOfThreeAndFive(n1,n2){
  for (var i = 0; i < 1000; i++) {
    if (i % n1 === 0 || i % n2 === 0) {
      sum = sum + i;
    }

}
return sum;
}

$('.checkbutton').click(){
  if ( $('.answerinput').val() === sum ) {
    $('.output').text('Correct! Good luck on the next question.')
  }
  else {
    $('.output').text('Sorry, try again!')
  }
}


multiplesOfThreeAndFive(3,5);

// To do for next session:  write code for checking answer in text box to var sum when check is clicked,
// Output incorrect or correct response based on answer provided be user.
