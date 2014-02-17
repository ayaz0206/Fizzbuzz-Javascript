function Fizzbuzz(){
}

function isDivisibleByThree(number) {
	return number % 3 == 0
};

isDivisibleByFive = function(number) {
	return number % 5 == 0
};

isDivisibleByFifteen = function(number) {
	return number % 15 == 0
};


function fizzbuzz(number) {

	if (isDivisibleByFifteen(number)) {
		return 'FizzBuzz';
	}	

	if (isDivisibleByThree(number)) {
		return 'Fizz';
	}
	if (isDivisibleByFive(number)) {
		return 'Buzz';
	}
	
}