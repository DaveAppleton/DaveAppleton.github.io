var x = new Array()
var y = new Array()
var j = 0
var k = 0

function setup() {
  createCanvas(620, 320);
  //background(153);
  for (i = 0; i < 100; i++) {
    append(x, random(600))
    append(y, random(300))
  }
  
  frameRate(30)
}


function draw() {
  
  fill(random(255),20+random(235),128+random(128))
  ellipseMode(CENTER)
  ellipse(x[i]+10,y[i]+10,k,k)
  if (k == 20) {
    if (i < 100) {
       i++
       line(x[i-1]+10,y[i-1]+10,x[i]+10,y[i]+10)
     } else {
       clear()
       i = 0
     }
     k = 0
     x[i] = x[i]+random(6) - 3
     x[i] = x[i] > 10 ? x[i] : 10
     y[i] = y[i]+random(6) - 3
     y[i] = y[i] > 10 ? y[i] : 10
   } else {
     k++
   } 
}