
var canvas = document.getElementById("my_canvas");
document.getElementById("reset").onclick = clearArray;
document.getElementById("counterbutton").onclick = countStationary;

function countStationary(e) {
	e.preventDefault();
	var count = 0;
	  for (var i = 0; i < balls.length; i++) {
			if(balls[i].vx == 0 && balls[i].vy == 0) {
				count++;
			}
		}
		document.getElementById("counter").innerHTML = count;
}

var c = canvas.getContext("2d");
canvas.addEventListener('click', function(e) {
	e.preventDefault();
newBall();
}, true);



function clearArray(e) {
	e.preventDefault();
	balls = [{
  x: 50,
  y: 100,
  r: 10,
  vx: 5,
  vy: 5,
  color: 125
}];
}


//create te container that will hold the boincing balls.
var container = {
  x: 0,
  y: 0,
  width: canvas.width,
  height: canvas.height
};
//create the array of balls that will be animated
var balls = [{
  x: 50,
  y: 100,
  r: 10,
  vx: 5,
  vy: 5,
  color: 125
}];

//create a new ball and adds to array
function newBall() {
  var ball = {
    x: Math.floor(Math.random() * container.width),
    y: Math.floor(Math.random() * container.height),
    r: Math.floor(Math.random() * 50 + 3),
    vx: Math.floor(Math.random() * 10),
    vy: Math.floor(Math.random() * 10),
    color: Math.floor(Math.random() * 255)
  }

  balls.push(ball);
}

function animate() {
  //draw the container
  c.fillStyle = "#18BC9C";
  c.fillRect(container.x, container.y, container.width, container.height);

  //loop through the balls
  for (var i = 0; i < balls.length; i++) {
    //draw the balls
    c.fillStyle = 'hsl(' + balls[i].color++ + ', 100%, 50%)';
    c.beginPath();
    c.arc(balls[i].x, balls[i].y, balls[i].r, 0, Math.PI * 2, true);
    c.fill()

    //Ball logic
    if (balls[i].x - balls[i].r + balls[i].vx < container.x ||
			 balls[i].x + balls[i].r + balls[i].vx > container.x + container.width) {
      balls[i].vx = -balls[i].vx;
    }

    if (balls[i].y + balls[i].r + balls[i].vy > container.y + container.height ||
			 balls[i].y - balls[i].r + balls[i].vy < container.y) {
      balls[i].vy = -balls[i].vy;
    }

    balls[i].x += balls[i].vx
    balls[i].y += balls[i].vy
  }

  requestAnimationFrame(animate);
}
function initCanvas() {
	canvas.height = screen.availHeight;
	canvas.width = screen.availWidth;
	container.height = screen.availHeight;
	container.width = screen.availWidth;

}

initCanvas();

requestAnimationFrame(animate);


document.getElementById("spawnballs").onclick = spawnballs;
function spawnballs(e) {
	e.preventDefault();
	newBall();
	newBall();
	newBall();
	newBall();
	newBall();
}
