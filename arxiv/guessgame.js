var colors = [
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)",
];

var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var	messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
	// add initial colors
	squares[i].style.backgroundColor = colors[i]

	// add click listeners to colors
	squares[i].addEventListener("click", function(){
		// grab color
			var clickedColor = this.style.backgroundColor;

			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
			}else{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again!"
			}
		// compare to pickedColor
	});
}

function changeColors(color){
	// loop through all colors 
	// change to color
	for(var i=0; i < squares.length;  i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor( Math.random()* colors.length );

	return colors[random];
}

function generateRandomColors(num){
	var arr = []

	for(var i = 0; i < num ; i++){
		// get random color and push into array;
		arr.push(randomColor());
	}

	return arr;
}

function randomColor(){
	// pick a red from 0-255
	var r = Math.floor(Math.random() * 256);
	// pick a green from 0-255
	var g = Math.floor(Math.random() * 256);
	// pick a blue from 0-255
	var b = Math.floor(Math.random() * 256);

	return "rgb("+ r + ", " + g + ", " + b +")" ;
}