class GameZone{
	constructor(Size){
		this.Size = Size;
		this.Canvas = document.createElement('canvas');//Создаем холст для отрисовки
		this.Canvas.width = Size.x;//Задаем его размеры
		this.Canvas.height = Size.y;
		this.Canvas.id = 'GameZone';
		this.DrawingPanel = this.Canvas.getContext('2d');//Извлекаем контекст для отрисовки
		this.DrawingPanel.fillStyle = 'lightgreen';
		this.DrawingPanel.fillRect(0,0,this.Canvas.width,this.Canvas.height);
		this.DrawingPanel.fillStyle = 'transparent';
		document.body.appendChild(this.Canvas);
	}
}