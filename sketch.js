
let y = 0
    let x = 0
    let dim = 0.0

    var fade
    var fadeAmount = 1


function preload() {
fire1 = loadImage("fire/screenshot 268.png");
fire2 = loadImage("fire/Screenshot 269.png");
fire3 = loadImage("fire/Screenshot 270.png");
fire4 = loadImage("fire/Screenshot 271.png");
fire5 = loadImage("fire/Screenshot 272.png");
fire6 = loadImage("fire/Screenshot 273.png");
fire7 = loadImage("fire/Screenshot 274.png");
fire8 = loadImage("fire/Screenshot 275.png");
fire9 = loadImage("fire/Screenshot 276.png");
fire10 = loadImage("fire/Screenshot 277.png");
caleb = loadImage("fire/2d4f6748dda3190e824541f038c76efayth90.png")
books = loadImage("fire/photo-1510560738910-689641c11ea1tyh.jpg")
books2 = loadImage("fire/photo-1510560738910-689641c11ea1irhgjr.jpg")
rocks = loadImage("fire/imgbinpicsart.png")
rocksB= loadImage("fire/imgbinpicsartflipp.png")
paper1 = loadImage("fire/sheetspaperfly1.png")
paper2 = loadImage("fire/sheetspaperfly2.png")
paper3 = loadImage("fire/sheetspaperfly3.png")
paper4 = loadImage("fire/sheetspaperfly4.png")
magic = loadImage("fire/magicsymol.png")
cat = loadImage("fire/catmagic.png")
cat2 = loadImage("fire/catmagic2.png")
font = loadFont("fire/wizzta.regular.ttf")

}


function setup() {
createCanvas(1500, 755);
//background(0)
//canvan.position(0,0)
frameRate(10)

fade = 0


}

function draw() {
    background(0)
 
    let places = [fire1, fire2, fire3, fire4, fire5, fire6, fire7, fire8, fire9, fire10]
    let fares = random(places)
    image(fares, 100, -150, 1265, 850)

    image(books, 0, 0, 200, 800)
    image(books2, 1300, 0, 200, 800)

    push()
    tint(255, 45)
    image(magic, 270, -80, 1000, 1000)
    pop()
    
    push()
    fill(249, 167, 33, fade)
    textFont(font)
    textSize(175)
    text('Caleb Widogast', 360, 130)
    if(fade < 0) fadeAmount = 4;
    if(fade > 135) fadeAmount = -7;
    fade += fadeAmount;
    pop()

    push()
    rotate(-.25)
    image(cat, -90, -90)
    pop()

    push()
    rotate(.25)
    image(cat2, 1310, -479)
    pop()

    push()
    rotate(.35)
    image(rocks, 375, 380, 270, 300)
    pop()

    image(rocks, -5, 490, 270, 300)

    push()
    rotate(-0.35)
    image(rocksB, 768, 900, 270, 300)
    pop()

    image(rocksB, 1250, 490, 270, 300)

    image(caleb, 455, 95, 650, 750)
    
    push()
    
    y = y + 18
    if (y > width + dim) {
        y = -dim
    }
    translate( x, y)
    image(paper1, 0, -100, 190, 190)
    image(paper2, 200, -250, 200, 200)
    image(paper2, 900, -25, 150, 150)
    image(paper3, 1250, -12, 200, 200)
    image(paper3, -40, -380, 150, 150)
    image(paper4, 1100, -400, 200, 150)
    image(paper1, 1420, -250, 200, 200)
    image(paper1, 500, -500, 150, 150)
   
    pop()
   

}


