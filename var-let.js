function printNumbers() {
	for (var i = 0; i < 10; i++) {
		setTimeout(
      function printer() {
	      console.log(i);
	    },
			100 * i
		);
	}
}

printNumbers();