// ------------------------------
// Game character render function
// ------------------------------

function drawGameChar() {

	if (isLeft && isFalling) {
		// add your jumping-left code

		//left hand 
		stroke(0);
		strokeWeight(5);
		beginShape();
		vertex(gameChar_x - 7, gameChar_y - 48);
		vertex(gameChar_x - 15, gameChar_y - 60);
		endShape();

		// head 	
		strokeWeight(0);
		fill(215, 210, 115);
		ellipse(gameChar_x, gameChar_y - 60, 24, 24);

		//left leg
		noFill();
		strokeWeight(5);
		beginShape();
		vertex(gameChar_x - 7, gameChar_y - 18);
		vertex(gameChar_x - 13, gameChar_y - 9);
		vertex(gameChar_x - 7, gameChar_y);
		endShape();

		// body
		strokeWeight(0);
		fill(255, 105, 65)
		rect(gameChar_x - 7, gameChar_y - 48, 14, 30);

		//right hand
		noFill();
		stroke(0);
		strokeWeight(5);
		beginShape();
		vertex(gameChar_x + 7, gameChar_y - 48);
		vertex(gameChar_x + 15, gameChar_y - 60);
		endShape();


		//right leg
		beginShape()
		vertex(gameChar_x + 7, gameChar_y - 18);
		vertex(gameChar_x + 14, gameChar_y - 9)
		vertex(gameChar_x + 21, gameChar_y - 18);
		endShape();

	} else if (isRight && isFalling) {
		// add your jumping-right code
		//left hand 
		stroke(0);
		strokeWeight(5);
		beginShape();
		vertex(gameChar_x + 7, gameChar_y - 48);
		vertex(gameChar_x + 15, gameChar_y - 60);
		endShape();

		// head 	
		strokeWeight(0);
		fill(215, 210, 115);
		ellipse(gameChar_x, gameChar_y - 60, 24, 24);

		//left leg
		noFill();
		strokeWeight(5);
		beginShape();
		vertex(gameChar_x + 7, gameChar_y - 18);
		vertex(gameChar_x + 13, gameChar_y - 9);
		vertex(gameChar_x + 7, gameChar_y);
		endShape();

		// body
		strokeWeight(0);
		fill(255, 105, 65)
		rect(gameChar_x - 7, gameChar_y - 48, 14, 30);

		//right hand
		noFill();
		stroke(0);
		strokeWeight(5);
		beginShape();
		vertex(gameChar_x - 7, gameChar_y - 48);
		vertex(gameChar_x - 15, gameChar_y - 60);
		endShape();


		//right leg
		beginShape()
		vertex(gameChar_x - 7, gameChar_y - 18);
		vertex(gameChar_x - 14, gameChar_y - 9)
		vertex(gameChar_x - 21, gameChar_y - 18);
		endShape();

	} else if (isLeft) {
		// add your walking left code
		// head 	
		strokeWeight(0);
		fill(215, 210, 115);
		ellipse(gameChar_x, gameChar_y - 60, 24, 24);

		//left hand 
		stroke(0);
		strokeWeight(5);
		beginShape();
		vertex(gameChar_x - 7, gameChar_y - 43);
		vertex(gameChar_x - 15, gameChar_y - 33);
		endShape();

		//left leg
		strokeWeight(5);
		beginShape();
		vertex(gameChar_x - 7, gameChar_y - 18);
		vertex(gameChar_x - 10, gameChar_y - 9);
		vertex(gameChar_x - 7, gameChar_y);
		endShape();

		// body
		strokeWeight(0);
		fill(255, 105, 65)
		rect(gameChar_x - 7, gameChar_y - 48, 14, 30);


		//right hand
		stroke(0);
		strokeWeight(5);
		beginShape();
		vertex(gameChar_x + 7, gameChar_y - 45);
		vertex(gameChar_x + 10, gameChar_y - 37);
		vertex(gameChar_x, gameChar_y - 27)
		endShape();


		//right leg
		beginShape()
		vertex(gameChar_x + 7, gameChar_y - 18);
		vertex(gameChar_x + 7, gameChar_y - 9)
		vertex(gameChar_x + 15, gameChar_y);
		endShape();

	} else if (isRight) {
		// add your walking right code
		// head 	
		strokeWeight(0);
		fill(215, 210, 115);
		ellipse(gameChar_x, gameChar_y - 60, 24, 24);

		//right hand 
		stroke(0);
		strokeWeight(5);
		beginShape();
		vertex(gameChar_x + 7, gameChar_y - 43);
		vertex(gameChar_x + 15, gameChar_y - 33);
		endShape();

		//right leg
		strokeWeight(5);
		beginShape();
		vertex(gameChar_x + 7, gameChar_y - 18);
		vertex(gameChar_x + 10, gameChar_y - 9);
		vertex(gameChar_x + 7, gameChar_y);
		endShape();

		// body
		strokeWeight(0);
		fill(255, 105, 65)
		rect(gameChar_x - 7, gameChar_y - 48, 14, 30);


		//left hand
		stroke(0);
		strokeWeight(5);
		beginShape();
		vertex(gameChar_x - 7, gameChar_y - 45);
		vertex(gameChar_x - 10, gameChar_y - 37);
		vertex(gameChar_x, gameChar_y - 27)
		endShape();


		//left leg
		beginShape()
		vertex(gameChar_x - 7, gameChar_y - 18);
		vertex(gameChar_x - 7, gameChar_y - 9)
		vertex(gameChar_x - 15, gameChar_y);
		endShape();

	} else if (isFalling || isPlummeting) {
		// add your jumping facing forwards code
		// head 
		strokeWeight(0);
		fill(215, 210, 115);
		ellipse(gameChar_x, gameChar_y - 60, 24, 24);

		// body
		strokeWeight(0);
		fill(255, 105, 65)
		rect(gameChar_x - 10, gameChar_y - 48, 20, 30);

		//left hand 
		stroke(0);
		strokeWeight(5);
		beginShape();
		vertex(gameChar_x - 10, gameChar_y - 48);
		vertex(gameChar_x - 20, gameChar_y - 60);
		endShape();

		//right hand
		stroke(0);
		strokeWeight(5);
		beginShape();
		vertex(gameChar_x + 10, gameChar_y - 48);
		vertex(gameChar_x + 20, gameChar_y - 60);
		endShape();

		//left leg
		strokeWeight(5);
		beginShape();
		vertex(gameChar_x - 10, gameChar_y - 18);
		vertex(gameChar_x - 15, gameChar_y);
		endShape();

		//right leg
		beginShape()
		vertex(gameChar_x + 10, gameChar_y - 18);
		vertex(gameChar_x + 15, gameChar_y);
		endShape();

	} else {
		// add your standing front facing code
		// head 	
		strokeWeight(0);
		fill(215, 210, 115);
		ellipse(gameChar_x, gameChar_y - 60, 24, 24);

		// body
		strokeWeight(0);
		fill(255, 105, 65)
		rect(gameChar_x - 10, gameChar_y - 48, 20, 30);

		// hand
		fill(0);
		rect(gameChar_x - 15, gameChar_y - 48, 5, 20);
		rect(gameChar_x + 10, gameChar_y - 48, 5, 20);

		// leg
		fill(0);
		rect(gameChar_x - 10, gameChar_y - 18, 5, 20);
		rect(gameChar_x + 5, gameChar_y - 18, 5, 20);
	}
} // Function to draw the game character.


// ---------------------------
// Background render functions
// ---------------------------

function drawGrass() {
	noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, width, height / 4);
} // function to draw grass /// 

function drawCloud(t_cloud) {
	noStroke();
	fill(255);
	ellipse(t_cloud.x_pos, t_cloud.y_pos, t_cloud.sizeX, t_cloud.sizeY); // middle cloud 
	ellipse(t_cloud.x_pos - 35, t_cloud.y_pos + 10, t_cloud.sizeX - 10, t_cloud.sizeY - 20); // left cloud 
	ellipse(t_cloud.x_pos + 35, t_cloud.y_pos + 10, t_cloud.sizeX - 10, t_cloud.sizeY - 20); // right cloud 
} // Function to draw cloud objects.

function drawMountain(t_mountain) {
	noStroke();
	fill(0, 215, 100)
	triangle(t_mountain.x_pos, floorPos_y,
		t_mountain.x_pos + 150, t_mountain.y_pos,
		t_mountain.x_pos + 280, floorPos_y); // samll triangle 
	triangle(t_mountain.x_pos + 70, floorPos_y,
		t_mountain.x_pos + 230, t_mountain.y_pos + 50,
		t_mountain.x_pos + 360, floorPos_y) // big triangle 
} // Function to draw mountains objects. 

function drawTree(t_tree) {
	noStroke(); // trunk // 
	fill(135, 65, 0)
	rect(t_tree.x_pos, t_tree.y_pos, 25, 50);
	noStroke(); //branches // 
	fill(37, 117, 15);
	ellipse(t_tree.x_pos - 1, t_tree.y_pos - 10, 40, 40);
	ellipse(t_tree.x_pos + 25, t_tree.y_pos - 10, 40, 40);
	ellipse(t_tree.x_pos - 11, t_tree.y_pos - 30, 40, 40);
	ellipse(t_tree.x_pos + 35, t_tree.y_pos - 30, 40, 40);
	ellipse(t_tree.x_pos + 12, t_tree.y_pos - 50, 50, 50);
} // Function to draw trees objects.


function drawCanyon(t_canyon) {
	noStroke();
	fill(175, 105, 25);
	rect(t_canyon.x_pos, floorPos_y, t_canyon.width, height);
	// fill(15, 40, 102); 
	// rect(t_canyon.x_pos, floorPos_y + 80, t_canyon.width, height); 
} // Function to draw canyon objects.


function checkCanyon(t_canyon) {
	var d = dist(gameChar_world_x, gameChar_y, (t_canyon.x_pos + (t_canyon.width / 2)), floorPos_y) < (t_canyon.width / 2);
	if (d && gameChar_y == floorPos_y) {
		isPlummeting = true;
	}
} // Function to check character is over a canyon.


function drawCollectable(t_collectable) {
	if (t_collectable.isFound == false) {
		stroke(0);
		strokeWeight(1);
		fill(255, 215, 0);
		ellipse(t_collectable.x_pos, t_collectable.y_pos, t_collectable.size, t_collectable.size);
		ellipse(t_collectable.x_pos, t_collectable.y_pos, t_collectable.size - 10, t_collectable.size - 10); // coin body
		strokeWeight(2);
		beginShape(LINES);
		vertex(t_collectable.x_pos, t_collectable.y_pos + 3);
		vertex(t_collectable.x_pos, t_collectable.y_pos - 3);
		vertex(t_collectable.x_pos + 3, t_collectable.y_pos);
		vertex(t_collectable.x_pos - 3, t_collectable.y_pos); // coin's plus sign 
		endShape();
	}
} // Function to draw collectable objects.

function checkCollectable(t_collectable) {
	if (dist(gameChar_world_x, gameChar_y, t_collectable.x_pos, t_collectable.y_pos) < t_collectable.size) {
		t_collectable.isFound = true;
		gameScore += 1;
	}
} // Function to check character has collected an item

function renderFlagpole() {
	push();
	strokeWeight(5)
	stroke(100)
	line(flagPole.x_pos, floorPos_y, flagPole.x_pos, floorPos_y - 300)
	if (flagPole.isReach) {
		rect(flagPole.x_pos, floorPos_y - 300, 50, 50)
	} else {
		rect(flagPole.x_pos, floorPos_y - 50, 50, 50)
	}
	pop();
} // function to draw flagPole  

function checkFlagpole() {
	var d = abs(gameChar_world_x - flagPole.x_pos)

	if (d < 5) {
		flagPole.isReach = true;
	}
} // function to check flagPole  

function createPlatform(x, y, length) {
	var p = {
		x: x,
		y: y,
		length: length,
		draw: function () {
			fill(170, 30, 30)
			strokeWeight(1);
			rect(this.x, this.y, this.length, 20, 5)
		},
		checkContact: function (gc_x, gc_y) {
			if (gc_x > this.x && gc_x < (this.x + this.length)) {
				var d = this.y - gc_y;
				if (d >= 0 && d < 5) {
					console.log("hi. i'm on platform")
					return true;
				}
			}
			return false;
		}
	}
	return p
} // function to draw platform; 

function Enemy(x, y, range) {
	this.x = x;
	this.y = y;
	this.range = range;

	this.currentX = x;
	this.inc = 1;

	this.update = function () {
		this.currentX += this.inc;
		if (this.currentX >= this.x + this.range) {
			this.inc = -1;
		} else if (this.currentX < this.x) {
			this.inc = 1;
		}
	}

	this.draw = function () {
		this.update();
		fill(255, 0, 0);
		strokeWeight(1);

		ellipse(this.currentX, this.y, 20, 20)
		ellipse(this.currentX, this.y - 10, 9, 9);
	}

	this.checkContact = function (gc_x, gc_y) {
		var d = dist(gc_x, gc_y, this.currentX, this.y);
		
		if (d < 20) {
			lives --; 
			return true;
		}
	}
	return false;
}