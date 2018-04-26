var numbers = {
	*[Symbol.iterator](
											{
												start = 0,
												end = 100,
												step = 1
											}
										)
  {
		for (var number = start; number <= end; number = number + step) {
			yield number;
		}
	}
};

// should print 0..100 by 1s
for (let num of numbers) {
	console.log(num);
}

// should print 6..30 by 4s
for (let num of numbers[Symbol.iterator](
																				 {
																					 start: 6,
																					 end: 30,
																					 step: 4
																				 }
																			  )
	  )
{
	console.log(num);
}
