	// using an event listener, to "watch out" for changes within <div id="container">,  document.getElementById-event listener -->
	// an event handler .onchange is added to monitor changes -->
	// event lisener/handler trigger function -->
	// a variable( bill ) is created to store the value of the Total bill input field, .value is needed to capture that value -->
	// display the value of tipPercentage in html(<span id="tipOutput"> , use .innerHTML , repeat to display split value-->


	document.getElementById('container').onchange = function(){
		var bill = Number(document.getElementById('billTotal').value);
		var tipPercentage = document.getElementById('tipInput').value;
		var split = document.getElementById('splitInput').value;
		var tipValue = bill * (tipPercentage / 100);
		var newBillEach = (bill + tipValue)/ split;
		var tipEach = tipValue / split;

		document.getElementById('tipOutput').innerHTML = tipPercentage + "%"; // each event listener corresponds to a <span> element from the html code, identified by the given id
		document.getElementById('splitOutput').innerHTML = split;
		document.getElementById('newBill').innerHTML = newBillEach.toFixed(2); // .toFixed(number) will reduce the output to 2 decimal places
		document.getElementById('newTip').innerHTML = tipEach.toFixed(2); // "£" is to add the currency symbol before the amount
		}