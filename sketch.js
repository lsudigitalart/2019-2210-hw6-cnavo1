var danny;
var smoke
var danny2
var glowBall

function preload() {
danny = loadImage("00906ba8d0d46e343a24b64f1bd56355.gif")
smoke = loadImage("smoke-texture-free-download-thumb27.jpg")
danny2 = loadImage("2b007037eb3fb3a2526f56c94215e5d7.jpg")
glowBall = loadImage("thumb50814.png_2v_31020.png")
}


function setup() {
createCanvas(400, 800)
background(0)
}

function draw() {
    //background(150)
    image(smoke, 0, 0, 400, 800)
    image(danny, 0, 0, 295, 230)
    image(danny2, 20, 230, 230, 250)
    image(glowBall, 0, 0, 75, 75)
}


