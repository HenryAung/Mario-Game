/* The Game Project 5 - Bring it all together */

var gameChar_x;
var gameChar_y;
var floorPos_y;
var scrollPos;
var gameChar_world_x;

var isLeft;
var isRight;
var isFalling;
var isPlummeting;
var isReach;

var clouds;
var mountains;
var trees_x;
var canyons;
var collectables;
var flagPole;

var lives;
var gameScore;
var complete;
var platform;
var enemies;


function setup() {
	createCanvas(1024, 576);
	floorPos_y = height * 3 / 4;
	lives = 3;
	complete = false;
	startGame();
	// jumpSound.play(); 

} // setup function 


function draw() {

	background(100, 155, 255); // fill the sky blue
	drawGrass();

	push(); // for background scrolling 
	translate(scrollPos, 0); // for background scrolling 

	for (var i = 0; i < clouds.length; i++) {
		drawCloud(clouds[i]);
	}; // Draw clouds.

	for (var i = 0; i < mountains.length; i++) {
		drawMountain(mountains[i]);
	} // Draw mountains.

	for (var i = 0; i < trees.length; i++) {
		drawTree(trees[i]);
	} // Draw trees.

	for (var i = 0; i < canyons.length; i++) {
		drawCanyon(canyons[i]);
		checkCanyon(canyons[i]);
	} // Draw canyons.

	for (var i = 0; i < collectables.length; i++) {
		if (!collectables[i].isFound) {
			drawCollectable(collectables[i]);
			checkCollectable(collectables[i]);
		}
	} // Draw collectable items.

	for (var i = 0; i < platform.length; i++) {
		platform[i].draw();
	} // draw platforms 

	for (var i = 0; i < enemies.length; i++) {
		enemies[i].draw();

		var isContact = enemies[i].checkContact(gameChar_world_x, gameChar_y);

		if (isContact) {
			if (lives > 0) {
				startGame();
				break;
			}
		}
	}

	renderFlagpole(); // Draw flagpole

	pop(); // for back ground scrolling  

	drawGameChar(); // Draw game character.
	moveLeft();
	moveRight();
	fall();
	plummet(); // Logic to make the game character move

	checkPlayerDie(); // to check player lives 
	displayScore(); // to display score
	displayLives(); // to display lives 

	if (lives < 0) {
		drawGameOver();
	} // to draw game over text 

	if (flagPole.isReach == true) {
		drawLevelComplete();
	} // to draw level complete text; 

	if (flagPole.isReach == false) {
		checkFlagpole();
	} // to check flagpole



	gameChar_world_x = gameChar_x - scrollPos; // Update real position of gameChar for collision detection.
}


// ---------------------
// Key control functions
// ---------------------

function keyPressed() {
	charWalkKeyPressed();
	charJumpKeyPressed();
	restartGameKeyPressed();
}

function keyReleased() {
	charWalkLeftKeyReleased();
	charWalRightKeyReleased();
}