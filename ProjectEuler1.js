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

function rightOrWrong(){
	if ($('.answerinput').val() == sum) {
		$('.output').css("color","green");
		$('.output').text('Correct! Good luck on the next problem.');
	} else {
		$('.output').css('color', 'red');
		$('.output').text('Sorry, please try again!');
	}
}


multiplesOfThreeAndFive(3,5);
$('.checkbutton').on('click', function(){
	rightOrWrong();
});

$('.answerinput').keyup(function(event){
	event.preventDefault();
if (event.which == 13) {
	rightOrWrong();
}

});

