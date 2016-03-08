document.addEventListener('DOMContentLoaded', function() {

  var p1 = "#player1_strip";
  var p2 = "#player2_strip";
  var p1Score = 0;
  var p2Score = 0;
  var trackLength = 0;

  setLengthTrack();

  document.addEventListener("keyup",keyStroke,false);

	function keyStroke(e){
		if (e.keyCode === 81){ // 81 is P = Player 1
			if(p1Score < trackLength){
			move(p1);
			p1Score ++;
			}
			else if (p1Score >= trackLength){
				alert("player 1 wins!");
				document.removeEventListener("keyup",keyStroke,false); //event listener stops when game if finished
				newGame();
			}
		}
		else if (e.keyCode === 80){ // 80 is Q = Player 2
			if(p2Score < trackLength){
			move(p2);
			p2Score ++;
			}
			else if (p2Score >=trackLength){
				alert("Player 2 wins!");
				document.removeEventListener("keyup",keyStroke,false);
				newGame();
			}
		}
	}

	function setLengthTrack(){

		trackLength = prompt("Please choose the length of the track, between 10-20");

		if (trackLength > 20){
			trackLength = 20;
		}
		else if (trackLength < 10){
			trackLength = 10;
		}
		else{
			trackLength = 10; //10 = default track length
		}
	}

	function move(player){

		var move = document.querySelector(player + " .active");

		move.classList.remove("active");
		move = move.nextElementSibling;
		move.classList.add("active");

	}

	function newGame(){
		location.reload(); //starts game again
	}

  	var button = document.getElementById('restartButton');//Adds functionality to new game button on the HTML file
      button.addEventListener("click", restart, false);

  })
