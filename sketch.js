var distance;
var playerAlive = true;

var playerPos = {
	x: 400,
	y: 300
}

var enemyPos = {
	x: 300,
	y: 200
}

var grty = {
	acc: 0.2,
	vel: 0
}

function setup()
{
	createCanvas(800, 600);
	frameRate(60);
}

function draw()
{
	// grty.vel -= grty.acc;
	// playerPos.y -= grty.vel;
	if (keyIsDown(UP_ARROW))
	{
		playerPos.y -= 5;
	}
	if (keyIsDown(DOWN_ARROW))
	{
		playerPos.y += 5;
	}
	if (keyIsDown(LEFT_ARROW))
	{
		playerPos.x -= 5;
	}
	if (keyIsDown(RIGHT_ARROW))
	{
		playerPos.x += 5;
	}
	clear();
	background(230);
	fill(255);
	if (playerAlive) rect(playerPos.x, playerPos.y, 40, 40);
	fill(255, 0, 0);
	rect(enemyPos.x, enemyPos.y, 40, 40);
    distanceFinder(playerPos.x, enemyPos.x, playerPos.y, enemyPos.y);
    console.log(distance)
	if (distance < 50)
	{
		playerAlive = false;	
	}
}

function distanceFinder(x1, x2, y1, y2)
{
	distance = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}