var i,a;
var r = 0;
var t = 0;
var pg;

function setup()
{
  createCanvas(800,400);
  pg = createGraphics(800,400);
  pg.background(0,0,0,30);
}

function draw()
{
  
  image(pg, 0,0);
  stroke(255);
  
  for(i=0;i++<3000;a= noise(i%64.0)*9+t/r, point(400+cos(a)*r, 200+sin(a)*r/2.0))
  {
     r=abs(noise(i)-.2)*mouseX;
     t+=0.001;
  }
  
}