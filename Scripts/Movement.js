var loop = true;
var dir=new Vector2(0,0);
var snakeStep = 15;//размер одного "шага" змейки
var snake = new Array();
var snakeSpeedBar = document.getElementById("snakeSpeedBar");
var apple;


document.onkeydown = changeDirection;//подписываемся на обработку события нажатия физ. кнопки
var gameZone = new GameZone(new Vector2(500,500));
appendTail();
createApple();


Update();//Запускаем обновление c интервалом

function changeSpeed(e){
	snakeSpeed = e.value;
}
function changeDirection(e){
	switch (e.code) {
		case 'ArrowLeft':
			if(dir.x != 1)
				dir = new Vector2(-1,0);
			break;
		case 'ArrowRight':
			if(dir.x != -1)
				dir = new Vector2(1,0);
			break;
		case 'ArrowUp':
			if(dir.y != 1)
				dir = new Vector2(0,-1);
			break;
		case 'ArrowDown':
			if(dir.y != -1)
				dir = new Vector2(0,1);
			break;
		default:
			return;
			break;
	}
}
function appendTail(count = 1){
	for(;count>=1;count--){
		var tail = new GameObject(gameZone);
		tail.setSource('D:/KIRILLSFOLDER/SitesMaking/Projects/Snake1/Images/Snake.png');
		tail.setScale(15,15);
		snake.push(tail);
	}
}
function eatApple(){
	appendTail();
	createApple();
}
function createApple(count = 1){
	for(;count>=1;count--){
		apple = new GameObject(gameZone);
		apple.setSource('D:/KIRILLSFOLDER/SitesMaking/Projects/Snake1/Images/Apple.png');
		apple.setScale(15,15);
		apple.setPosition(randomInt(0,gameZone.Size.x/snakeStep)*snakeStep,randomInt(0,gameZone.Size.y/snakeStep)*snakeStep)
	}
}
function Update(){
	for(var i = 0;i < snake.length;i++)
		if(i>0)
			snake[i].setPosition(snake[i-1].Transform.oldPosition.x,snake[i-1].Transform.oldPosition.y)
		else{
			nextStep = new Vector2(snake[i].Transform.Position.x+dir.x*snakeStep, snake[i].Transform.Position.y+dir.y*snakeStep);
			for(var node = 0;node<snake.length;node++){
				if(node!=i)
					if(snake[node].Transform.Position.x == nextStep.x && snake[node].Transform.Position.y == nextStep.y){
						gameOver();
						return;
					}
			}
			snake[i].setPosition1(nextStep);
			if(snake[0].Transform.Position.x == apple.Transform.Position.x && snake[0].Transform.Position.y == apple.Transform.Position.y)
				eatApple();
		}
		snake[0].draw();
		if(loop)
			setTimeout(Update, 1000/snakeSpeedBar.value);
}
function gameOver(){
	alert("GameOver");
	location.reload();
}

function randomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}