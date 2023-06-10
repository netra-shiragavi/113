function setup(){
    canvas = createCanvas(640,500);
    canvas.position(110,300);
    video = createCapture(VIDEO);
    video.hide();

    
}

function draw(){
    
    
    rect(50,30,400,450);
    image(video,80,50,325,400);
    fill("")
    stroke("black");
    circle(50,30,30);circle(445,30,30);circle(50,470,30);circle(445,470,30);
    
}

function apply(){
   
}

function take_snapshot(){
    save("photo.png");
}