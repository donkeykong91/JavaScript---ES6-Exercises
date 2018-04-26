var numbers = {
	*[Symbol.iterator]() {
		for (var number = this.start; number <= this.end; number + this.step) {
			yield number;
		}
	},
	start: 0,
	end: 100,
	step: 1
};

function newNumbers(
										{
											start = 0,
											end = 100,
											step = 1
										} = {}
									 )
{
	return numbers =
	{
		*[Symbol.iterator]() {
			for (var number = this.start; number <= this.end; number + this.step) {
				yield number;
			}
		},
		start,
		end,
		step
	}
}

// should print 0..100 by 1s
for (let num of numbers) {
	console.log(num);
}

// should print 6..30 by 4s
for (let num of newNumbers(
														{
														  start: 6,
														  end: 30,
															step:4
														}
													 )
													)
{
	console.log(num);
}
