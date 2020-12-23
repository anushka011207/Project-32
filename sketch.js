const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

var ground;
var polygon, polygonImg;
var slingShot;
var stand;
var block1, block2, block3, block4, block5, block6, block7;
var block8, block9, block10, block11;
var block12, block13;
var block14;
var score;

function preload()  {
    polygonImg = loadImage("polygon.png");
}

function setup()  {
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    score = 0;

    ground = new Ground(600,380,1200,30);
    stand = new Ground(700,380,300,20);

    polygon = Bodies.circle(50,200,20);
    polygon = image(polygonImg);
    World.add(world,polygon);

    slingShot = new SlingShot(this.polygon,{x:100, y:200});

    //level 1
    block1 = new Block(675,365,30,30);
    block2 = new Block(705,365,30,30);
    block3 = new Block(735,365,30,30);
    block4 = new Block(765,365,30,30);
    block5 = new Block(795,365,30,30);
    block6 = new Block(825,365,30,30);
    block7 = new Block(855,365,30,30);
    //level 2
    block8 = new Block(720,335,30,30);
    block9 = new Block(750,335,30,30);
    block10 = new Block(780,335,30,30);
    block11 = new Block(810,335,30,30);
    //level 3
    block12 = new Block(750,305,30,30);
    block13 = new Block(780,305,30,30);
    //level 4
    block14 = new Block(765,275,30,30);
}

function draw() {
    background("black");
    ground.display();
    stand.display();
    Text("Score = "+score,750,40);
    slingShot.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();

    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();

    drawSprites();
}

function mouseDragged(){
    Matter.Bodies.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed()   {
    if(keyCode === 32)  {
        slingShot.attach(this.polygon);
    }
}
