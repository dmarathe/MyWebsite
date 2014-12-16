function rollDice(){
			
			rollDice.previous = rollDice.previous || -1;
			rollDice.cube = rollDice.cube || document.getElementById("cube");
			var random = Math.floor((Math.random()*1000)%6)+1;
			//var  num= document.getElementById("cube").getAttribute("class");
			if(rollDice.previous == -1){
				rollDice.previous = random;
			} else {
				if( rollDice.previous == random ) {
					//alert("same");
					rollDice();
					return; 
				} else {
					rollDice.previous = random;
				}
				
			}
			
			 //var previous = num.slice(-1);
			
			
			if (rollDice.cube) {
				rollDice.cube.className = "show-" + random;
			}
		}
		window.onload = function(){
			var roll = document.getElementById("roll");
			if (roll) {
				roll.addEventListener('click', rollDice, false);
			}
			
		}