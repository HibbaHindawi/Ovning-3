var music = new Audio('Övning2.mp3')
var pressed = false;
function button(){ //this changes a button to do two different things
    if(!pressed){
        music.currentTime = 0;
        music.play();
        music.loop = true;
    }
    else{
        music.pause();
        music.loop = false;
    }
    pressed = !pressed;
}