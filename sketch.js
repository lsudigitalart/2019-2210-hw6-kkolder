var img;
var img2;
var img3;
var img4;
var img5;


function preload () {
img = createImg("corgiswimflip.gif");
img2 = loadImage("corndog-title-1.png");
img3 = createImg("money.gif");
img4 = createImg("omfgdogs.gif");
img5 = createImg("puppppy.gif");
}
function setup() { 
    createCanvas(1000, 1000, WEBGL);
    background(200);
    noCursor();
    frameRate(5);

    scale(.2);
    img.position(500, 500);
    img3.position(random(800), random(800), random(800));
    img4.position(random(800), random(800), random(800));
    img5.position(random(800), random(800), random(800));
  }
  function draw(){
    image(img2,mouseX,mouseY,100,110)
  }