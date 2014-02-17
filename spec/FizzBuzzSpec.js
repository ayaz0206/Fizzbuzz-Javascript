describe("FizzBuzz", function() {

	describe("In order to play, it", function() {

		it ('tells me that 3 divisible by three', function() {
		expect(isDivisibleByThree(3)).toBe(true);
		});

		it ('tells me that 4 is not divisible by three', function() {
			expect(isDivisibleByThree(4)).toBe(false);
		});

		it ('tells me that 5 is divisible by five', function() {
			expect(isDivisibleByFive(5)).toBe(true);
		});

		it ('tells me that 6 is not divisible by five', function() {
			expect(isDivisibleByFive(6)).toBe(false);
		});

		it ('tells me that 15 is divisible by fifteen', function() {
			expect(isDivisibleByFifteen(15)).toBe(true);
		});

	});



	describe("Play", function() {


		it ("returns fizz if passed 3", function() {
		expect(fizzbuzz(3)).toEqual('Fizz');
		});

		it ("returns buzz if passed 5", function() {
			expect(fizzbuzz(5)).toEqual('Buzz');
		});

		it ("returns fizzbuzz if passed 15", function() {
			expect(fizzbuzz(15)).toEqual('FizzBuzz')
		});


	});	

});
