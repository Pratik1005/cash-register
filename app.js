const currency = [1, 5, 10, 20, 100, 500, 2000];
		// console.log(currency.length);
		const currencyTypes = {
			1: 0,
			5: 0,
			10: 0,
			20: 0,
			100: 0,
			500: 0,
			2000: 0
		};
		const billAmount = document.querySelector('#bill');
		const cashGiven = document.querySelector('#cash');
		const initialHide = document.querySelector('#initial-hide');
		const nextBtn = document.querySelector('#nextbtn');
		const button = document.querySelector('#btn');
		const errorMsg = document.querySelector('#error');
		const errorMsg2 = document.querySelector('#error2');
		const output = document.querySelector('#output');

		// console.log(currencyTypes);
		// currencyTypes[500] = 1;
		// console.log(currencyTypes);

		button.addEventListener('click', function() {
			while (output.firstChild) {
				output.removeChild(output.firstChild);
			}
			errorMsg2.textContent = '';
			const bill = Number.parseInt(billAmount.value, 10);
			const cash = Number.parseInt(cashGiven.value, 10);
			// billAmount.value ='';
			// cashGiven.value = '';
			if (bill < 0) {
				initialHide.classList.add('hide');
				nextBtn.style.display = "block";
				errorMsg.textContent = 'Enter valid bill amount';
				button.style.display = "none";
				cashGiven.value = '';
			}else if(bill > cash){
				nextBtn.style.display = "none";
				errorMsg2.textContent = "Enter valid cash amount";
			}else {
				let changeToReturn = cash - bill;
			console.log(changeToReturn);

			for (let i = currency.length - 1; i >= 0; i--) {
				while (changeToReturn >= currency[i]) {
					let result = Math.floor(changeToReturn / currency[i]);
					// console.log(result);
					currencyTypes[currency[i]] = result;
					changeToReturn = changeToReturn - (currency[i] * result);
					// console.log(changeToReturn);
				}
			}

			console.log(currencyTypes);
			// if(output.removeChild(h2)){
			// 	output.removeChild(h2);
			// }
			for (const [key, value] of Object.entries(currencyTypes)){
				const data = document.createElement('h3');
				if (value > 0) {
					data.textContent = `No. of ₹${key} : ${value}`;
					output.appendChild(data);
				}
				
				console.log(`No. of ${key}\'s = ${value}`);
			}

			const currencyNotes = Object.keys(currencyTypes);
			const numberOfNotes = Object.values(currencyTypes);
			// const table = document.createElement('table');
			}
			
		})

		nextBtn.addEventListener('click', function(){
				if (parseInt(billAmount.value, 10) > 0){
					initialHide.classList.remove('hide');
					nextBtn.style.display = "none";
					errorMsg.textContent = '';
					button.style.display = "block";
				} else {
					errorMsg.textContent = 'Enter valid bill amount';
				}
			});