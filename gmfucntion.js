// ------------------------------------ /// 
/// start game function for setup /// 
// ------------------------------------ ///

function startGame() {
	gameChar_x = width / 6;
	gameChar_y = floorPos_y;

	// Variable to control the background scrolling.
	scrollPos = 0;

	// Variable to store the real position of the gameChar in the gameworld. Needed for collision detection.
	gameChar_world_x = gameChar_x - scrollPos;

	// for game score 
	gameScore = 0;

	// Boolean variables to control the movement of the game character.
	isLeft = false;
	isRight = false;
	isFalling = false;
	isPlummeting = false;

	// Initialise arrays of scenery objects.
	trees = [
        { x_pos: 130, y_pos: floorPos_y - 50 },
		{ x_pos: 420, y_pos: floorPos_y - 50 },
		{ x_pos: 860, y_pos: floorPos_y - 50 },
		{ x_pos: 1200, y_pos: floorPos_y - 50 },
		{ x_pos: 1400, y_pos: floorPos_y - 50 },
		{ x_pos: 1900, y_pos: floorPos_y - 50 },
		{ x_pos: 2560, y_pos: floorPos_y - 50 },
		{ x_pos: 2900, y_pos: floorPos_y - 50 }, 
        { x_pos: 3500, y_pos: floorPos_y - 50 }
	];

	clouds = [
        { x_pos: 120, y_pos: 100, sizeX: 95, sizeY: 85 },
		{ x_pos: 450, y_pos: 150, sizeX: 95, sizeY: 85 },
		{ x_pos: 1120, y_pos: 50, sizeX: 95, sizeY: 85 },
		{ x_pos: 1620, y_pos: 150, sizeX: 95, sizeY: 85 },
		{ x_pos: 2180, y_pos: 50, sizeX: 95, sizeY: 85 },
		{ x_pos: 2420, y_pos: 150, sizeX: 95, sizeY: 85 },
		{ x_pos: 2720, y_pos: 50, sizeX: 95, sizeY: 85 },
		{ x_pos: 3020, y_pos: 150, sizeX: 95, sizeY: 85 }
	];

	mountains = [
        { x_pos: 100, y_pos: 200 },
		{ x_pos: 500, y_pos: 200 },
		{ x_pos: 1300, y_pos: 200 },
		{ x_pos: 1800, y_pos: 200 },
		{ x_pos: 2400, y_pos: 200 },
		{ x_pos: 3200, y_pos: 200 }
	];

	canyons = [
        { x_pos: 300, width: 150 },
		{ x_pos: 1000, width: 150 },
		{ x_pos: 1600, width: 150 },
		{ x_pos: 2200, width: 150 },
		{ x_pos: 2500, width: 150 },
		{ x_pos: 3000, width: 150 }
	];

	collectables = [
        { x_pos: 250, y_pos: floorPos_y - 25 / 2, size: 25, plus_sign_size: 2, isFound: false },
		{ x_pos: 850, y_pos: floorPos_y - 25 / 2, size: 25, plus_sign_size: 2, isFound: false },
		{ x_pos: 1450, y_pos: floorPos_y - 25 / 2, size: 25, plus_sign_size: 2, isFound: false },
		{ x_pos: 1950, y_pos: floorPos_y - 25 / 2, size: 25, plus_sign_size: 2, isFound: false },
		{ x_pos: 2380, y_pos: floorPos_y - 25 / 2, size: 25, plus_sign_size: 2, isFound: false },
		{ x_pos: 2840, y_pos: floorPos_y - 25 / 2, size: 25, plus_sign_size: 2, isFound: false }
	]

	flagPole = {
		x_pos: 3700,
		isReach: false
	};

	platform = [];
	for (var i = 0; i < 5; i++) {
		platform.push(createPlatform(800 + (i * 500) + 50, floorPos_y - 100, random(75, 150)));
	}

	enemies = [];
	enemies.push(new Enemy(700, floorPos_y - 10, random(50, 100)));
	enemies.push(new Enemy(1200, floorPos_y - 10, random(50, 100)));
	enemies.push(new Enemy(1800, floorPos_y - 10, random(50, 100)));
	enemies.push(new Enemy(2700, floorPos_y - 10, random(50, 100)));
	enemies.push(new Enemy(3200, floorPos_y - 10, random(50, 100)));




	}
	/// start game function for setup ends /// 


	// ------------------------------------ /// 
	/// Game Character functions /// 
	// ------------------------------------ ///

	function moveLeft() {
		if (isLeft) {
			if (gameChar_x > width * 0.2) {
				gameChar_x -= 5;
			} else {
				scrollPos += 5;
			}
		}
	} // move to left function 

	function moveRight() {
		if (isRight) {
			if (gameChar_x < width * 0.8) {
				gameChar_x += 5;
			} else {
				scrollPos -= 5; // negative for moving against the background
			}
		}
	} // move to right function 

	function fall() {
		if (gameChar_y < floorPos_y) {
			var isContact = false;
			for (var i = 0; i < platform.length; i++) {

				if (platform[i].checkContact(gameChar_world_x, gameChar_y)) {
					isContact = true;
					break;
				};
			}
			if (isContact == false) {
				gameChar_y += 2;
				isFalling = true;
			};

		} else {
			isFalling = false;
		};
	} // character fall fucntion 

	function plummet() {
		if (isPlummeting) {
			gameChar_y += 10;
		}
	} // falling down into canyon function 


	function charWalkKeyPressed() {
		if (key == 'A' || keyCode == 37) {
			isLeft = true; // .. walking left ... ////
		} else if (key == 'D' || keyCode == 39) {
			isRight = true; // ... walking right .../// 
		};
	} /// walking function 

	function charJumpKeyPressed() {
		if (keyCode == 32 && gameChar_y <= floorPos_y) {
			// jumpSound.play(); 
			gameChar_y -= 100; //.. jumping .. // 
			isFalling = true; // ... adding gravity .. /// 
		}
	};

	function charWalkLeftKeyReleased() {
		if (key == 'A' || keyCode == 37) {
			isLeft = false;
		}
	}

	function charWalRightKeyReleased() {
		if (key == 'D' || keyCode == 39) {
			isRight = false;
		}
	}

	//// game character functions ends //// 

	// ------------------------------------ /// 
	/// necessary functions /// 
	// ------------------------------------ ///

	function drawLevelComplete() {
		textSize(64);
		fill(255, 0, 0)
		text("LEVEL COMPLETE", width / 4, height * 2 / 4)
		textSize(40)
		text("PRESS SPACE TO CONTINUE", width / 4, height * 2.5 / 4)
		complete = true;
	} // Level complete function 

	function drawGameOver() {
		textSize(64);
		fill(255, 0, 0)
		text("GAME OVER", 200, 200)
		textSize(32)
		text("PRESS SPACE TO CONTINUE", 200, 300)
		complete = true;
	}; // game over fucntion 

	function displayScore() {
		strokeWeight(0);
		textSize(20);
		fill(255);
		text("score: " + gameScore, 20, 20)
	} /// display score function

	function displayLives() {
		for (var i = 0; i < lives; i++) {
			strokeWeight(0);
			textSize(20);
			fill(255, 0, 0);
			ellipse(900 + (30 * i), 20, 10, 10)
		};
	} /// display lives function

	function checkPlayerDie() {
		if (gameChar_y > 576) {
			lives--;
			if (lives > 0) {
				startGame();
			}
		}
	} /// check player's lives fucntion 

	function restartGameKeyPressed() {
		if (keyCode == 32) {
			if (complete) {
				setup();
				loop();
			}
		}
	} // restrat game when all lives gone or level complete/// 

	/// ------------------------- /// 
	/// necessary functions ends  /// 