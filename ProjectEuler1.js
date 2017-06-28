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

multiplesOfThreeAndFive(3,5);

// To do for next session: Link JS to index, link JQuery, write code for checking answer in text box to var sum when check is clicked,
// write css for either an incorrect or correct answer that is hidden and toggled with JS when sum is checked with answer
