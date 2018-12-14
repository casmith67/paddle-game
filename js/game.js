var canvas = document.getElementById("main-board");
var ctx = canvas.getContext("2d");

var x = 15;
var y = canvas.height-10;

var dx = 2;
var dy = -2;

var ballRadius = 10;

var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width - paddleWidth) / 2;

var rightPressed = false;
var leftPressed = false;

function drawBall()
{
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function drawPaddle()
{
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() 
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddle();

    // Bounce off left / right walls
    if (x + dx > canvas.width-ballRadius || x + dx < ballRadius)
    {
        dx = -dx;
    }

    // Bounce off top / bottom walls
    if (y + dy > canvas.height-ballRadius || y + dy < ballRadius)
    {
        dy = -dy;
    }

    x += dx;
    y += dy;
}

setInterval(draw, 10);