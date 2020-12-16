class GameObject{
	
	constructor(GameZone){
		this.DrawingPanel = GameZone.DrawingPanel;
		this.Canvas = GameZone.Canvas;
		this.Transform = new Transform();
		this.Source = new Image();
	}	
	draw(){
		this.DrawingPanel.drawImage(this.Source,this.Transform.Position.x,this.Transform.Position.y,this.Transform.Scale.x,this.Transform.Scale.y);
	}
	clear(){
		this.DrawingPanel.fillStyle = 'lightgreen';
		this.DrawingPanel.fillRect(this.Transform.oldPosition.x,this.Transform.oldPosition.y,this.Transform.Scale.x,this.Transform.Scale.y);
	}
	setPosition(x,y){
		this.Transform.oldPosition = new Vector2(this.Transform.Position.x,this.Transform.Position.y);
		this.Transform.Position.x = x;
		this.Transform.Position.y = y;
		if(this.Transform.Scale.x > 0 && this.Transform.Scale.x > 0){
			this.clear();
			this.draw();
		}
	}
	setPosition1(position){
		this.setPosition(position.x,position.y);
	}
	setScale(x,y){
		this.Transform.Scale.x = x;
		this.Transform.Scale.y = y;
		if(this.Transform.Scale.x > 0 && this.Transform.Scale.x > 0){
			this.clear();
			this.draw();
		}
	}
	setSource(src){
		var t = this;
		this.Source.src = src;
		this.Source.addEventListener("load", function(){t.draw();});
		if(this.Transform.Scale.x > 0 && this.Transform.Scale.x > 0){
			this.clear();
			this.draw();
		}
	}
	
}