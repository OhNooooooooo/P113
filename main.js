function preload(){

}

function setup(){
    canvas = createCanvas(640,480);
    canvas.position(320,250);
    video = createCapture(VIDEO);
    video.hide();
    tint_color="";
}

function draw(){
    image(video, 80, 80, 480, 320);
    tint(tint_color);
    ellipse(60,240,10,360);
    ellipse(580,240,10,360);
    circle(60,60,90);
    ellipse(60,60,90,50);
    circle(580,60,90);
    ellipse(580,60,90,50);
    circle(580,420,90);
    ellipse(580,420,90,50);
    circle(60,420,90);
    ellipse(60,420,90,50);

    rect(60,35,520,50)
    rect(60,395,520,50)
    
}

function take_snapshot(){
    save('student_name.png');
}

function filter_tint(){
    tint_color = document.getElementById("color_name").value;
}

