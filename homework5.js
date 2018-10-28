/*
const rand = function(num) {
  return Math.floor(Math.random() * num) + 1;
};


const createBoxes = function(count, canvasWidth, canvasHeight) {

const colorArray = ["pink","blue","red"];

let array = [];
while (count!==0){
	count--;

let box = {
	x: rand(canvasWidth),
	y: rand(canvasHeight),
	width: 30,
	height:30,
	xDelta:1,
	yDelta:1,
	color:colorArray[rand(3)-1],
	draw: function() {},
    update: function() {}
}
array[count] = box;

}

return array;
}

console.log(createBoxes(2,500,500))
*/ //remove comment for ex01

/*
	
						const canvas = document.getElementById("canvas");
						const context = canvas.getContext("2d");
		
const rand = function(num) {		//the given function that makes random number
  return Math.floor(Math.random() * num) + 1;
};
		

		
const createBoxes = function(count, canvasWidth, canvasHeight) {
	
	const wallL = 0;
	const wallR = canvasWidth;
	const ceilingY = 0;
	const floorY = canvasHeight;
  	const colorArray = ["red", "green", "orange"];
	canvas.width = canvasWidth;
	canvas.height = canvasHeight;

	


  let boxes = [];		//we creat a empty array
	
	while(count != 0){
	
		count--;
	
		let recBox = {
    		x: rand(canvasWidth - 30),  	//the object may not be in canvas if we don't have minus (the size)(entire recBox to fit)
			y: rand(canvasHeight - 30),		//the object may not be in canvas if we don't have minus (the size)(entire recBox to fit)
			width: 30,
    		height: 30,
			xDelta: 1,
			yDelta: 1,
			color: colorArray[rand(3) -1],  	//index starts at 0, so we use rand 3 then minus 1 to get 0,1,2
			draw: function() {
	
					  	context.fillStyle = this.color;
						context.fillRect(this.x, this.y, this.width, this.height);
			},
			update: function() {
					
						this.x = this.x + this.xDelta;
        				this.y = this.y + this.yDelta;
				
						if (this.y >= floorY - 30|| this.y <= ceilingY) {
           					this.yDelta = -this.yDelta;
        				}
		
						if (this.x >= wallR - 30 || this.x <= wallL) {
           				this.xDelta = -this.xDelta;
        				}			
			}

  		};

  boxes[count] = recBox;		
  }
  	return boxes;
};
		
		const test = createBoxes(4, 600 ,500);
		
			
			const updating = function() {
				for(let i = 0 ; i < test.length; i++){
				test[i].update();
			}
			};
			const drawing = function() {
				context.fillStyle = "#C0C0C0";
				context.fillRect(0,0, canvas.width, canvas.height);
				
				let i = test.length;
				while(i != 0){
				i--;
				test[i].draw();		
			}
			};
		
	const run = function(){
        drawing();
        updating();
        requestAnimationFrame(run);
      };
		run();
*/ //remove comment for ex02

//ex03

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
		
const rand = function(num) {		//the given function that makes random number
  return Math.floor(Math.random() * num) + 1;
};
	const imageHero=new Image();			//we make this for hero's image
   	imageHero.src="https://instagram-brand.com/wp-content/uploads/2016/11/app-icon2.png";	
		
	const hero = {				//object for hero(includes information inside)
	  	x      : rand(600),
		y      : rand(500),
		width  : 20,
		height : 20,
		image  : imageHero,
		xDelta: 0,
        yDelta: 0,
		moveUp: false,
		moveDown: false,
		moveLeft: false,
		moveRight: false
	  };
		
const createBoxes = function(count, canvasWidth, canvasHeight) {
	
	const wallL = 0;
	const wallR = canvasWidth;
	const ceilingY = 0;
	const floorY = canvasHeight;
  	const colorArray = ["red", "green", "orange"];		//list of colors

	canvas.width = canvasWidth;		//replacing canvas size
	canvas.height = canvasHeight;		//replacing canvas size


  


  let boxes = [];		//we create a empty array
	
	while(count != 0){
	
		count--;
	
		let recBox = {
    		x: rand(canvasWidth - 30),  	//the object may not be in canvas if we don't have minus (the size)(entire recBox to fit)
			y: rand(canvasHeight - 30),		//the object may not be in canvas if we don't have minus (the size)(entire recBox to fit)
			width: 30,
    		height: 30,
			xDelta: 1,
			yDelta: 1,
			color: colorArray[rand(3) -1],  	//index starts at 0, so we use rand 3 then minus 1 to get 0,1,2
			draw: function() {
	
					  	context.fillStyle = this.color;		//drawing every single object seperatly(color)
						context.fillRect(this.x, this.y, this.width, this.height);		//drawing every single object seperatly(location and size)
			},
			update: function() {		//rules for the rectangle objects that we create
					
						this.x = this.x + this.xDelta;		//this = selected object  //changing postion or in simple language movment speed
        				this.y = this.y + this.yDelta;		//changing postion or in simple language movment speed
				
						if (this.y >= floorY - this.height || this.y <= ceilingY) {		//when object hits the top or bottom it changes its ydelta value to minus and vice versa
           					this.yDelta = -this.yDelta;
        				}
		
						if (this.x >= wallR - this.width || this.x <= wallL) {			//when object hits the right or left it changes its xdelta value to minus and vice versa
           				this.xDelta = -this.xDelta;
        				}		
						if(this.x < hero.x + hero.width && this.x + this.width > hero.x && this.y < hero.y + hero.height && hero.height + 
	    				this.y > hero.y) { 		//if hero hits the object then it will alert the game is over and it will reset everything
							alert("Unfollowed, Reported and BLOCKED!");
        					location.reload();
		}
			}

  		};

  boxes[count] = recBox;		//replaces created object in the count index of the empty array		
  }
  	return boxes;
};
		
		const test = createBoxes(7, 1000 ,700);		//we create the boxes and name it test //we can change the inputs
		
			
			const updating = function() {		//rules for hero
				
						if(hero.moveUp === true){		//if the key is presed the movment will be made(smoothly)
							hero.y -= 10;
						}
						if(hero.moveDown === true){
							hero.y += 10;
						}
						if(hero.moveLeft === true){
							hero.x -= 10;
						}
						if(hero.moveRight === true){
							hero.x += 10;
						}
				
						if(hero.y >= canvas.height - 20) {		//if hero hits the canvas border or top right left bottom it will stay it position
        					hero.y = canvas.height - 20;
						}
		
						if(hero.y  <= 0) {
        					hero.y = 0;
						}
			
						if(hero.x >= canvas.width - 20) {
        					hero.x = canvas.width - 20;
						}
		
						if(hero.x  <= 0) {
        					hero.x = 0;
						}
				
				for(let i = 0 ; i < test.length; i++){		//runs update function of the test for its objects
				test[i].update();
			}
			};
			const drawing = function() {		//draws canvas color and the draw function of the test for its objects
				context.fillStyle = "#C0C0C0";		//canvas collor and place and size
				context.fillRect(0,0, canvas.width, canvas.height);
				
				context.fillStyle = 'RebeccaPurple ';		//the top text
				context.font="25px Impact";
        		context.fillText("INSTA Game", 1, 25);
				
				context.drawImage(hero.image, hero.x, hero.y, hero.width, hero.height);		//draws the hero
				
				let i = test.length;		//runs a loop so it can run the update function for the test for its objects
				while(i != 0){
				i--;
				test[i].draw();		
			}
			};
		
	const run = function(){		//makes a loop called run so it runs drawing and update function we made
        drawing();
        updating();
        requestAnimationFrame(run);
      };
		run();
		
	   const leftKey = 37;		//key codes for each key pressed
	   const upKey = 38;
	   const rightKey = 39;
	   const downKey = 40;
	   
	   
	   	document.addEventListener('keydown', function(event) {		//if key is pressed changing the false(moveUP and ...) of hero to true so it moves
 
	    if(event.keyCode === upKey) {		
            hero.moveUp = true;
        }
		else if (event.keyCode === downKey) {
			hero.moveDown = true;
		}
		else if (event.keyCode === rightKey) {
			hero.moveRight = true;
		}
		else if (event.keyCode === leftKey) {
			hero.moveLeft = true;
		}
		   
      }, false);
	  document.addEventListener('keyup', function(event) {		//if key is released changing the true (moveUP and ...) to false
	  
	  	if(event.keyCode === upKey) {
            hero.moveUp = false;
        }
		else if (event.keyCode === downKey) {
			hero.moveDown = false;
		}
		
		if(event.keyCode === rightKey) {
            hero.moveRight = false;
		    
        }
		else if (event.keyCode === leftKey) {
			hero.moveLeft = false;
		}
		
	  }, false);
		