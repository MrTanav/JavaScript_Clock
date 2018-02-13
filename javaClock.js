function setup(){
	createCanvas(400,400);
	angleMode(DEGREES);

}

function draw(){
	background(0);

	translate(200,200);

	let hr = hour();
	let min= minute();
	let sec = second();

	rotate(-90);
	strokeWeight(8);
	
	stroke(255, 100, 150);
	noFill();

	let secHand = map(sec, 0, 60, 0, 360);
	arc(0,0,300,300,0,secHand);

	stroke(0, 255, 255);
	let minHand = map(min, 0, 60, 0, 360);
	arc(0,0,280,280,0,minHand);
	
	stroke(255, 255,102);
	let hourHand = map(hr % 12, 0, 12, 0, 360);
	arc(0,0,260,260,0,hourHand);
	
	rotate(90);
	stroke(255, 100, 150);
	strokeWeight(1);
	
	textSize(40);
	strokeWeight(3);
	text(hr+":"+min+":"+sec,-65,0);
	
	var months = ["Jan","Feb","Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

	textSize(20);
	strokeWeight(2);
	let monthofyear = month();
	var m = months[monthofyear];
	let d = day();
	let y = year();
	text(m+d+" "+y,-50,40);
}

