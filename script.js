'use strict'

const  drumpp = document.querySelectorAll('.drum');


const sounds = function(word){
    switch(word){
        case 'w':
            const tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;

        case 'l':
            const snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;

        case 'a':
            const tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;

        case 's':
            const tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;


        case 'd':
            const tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;


        case 'j':
            const crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;

        case 'k':
            const kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;

        default:
            console.log("Nothing");
    }
}

for(let i = 0;i<drumpp.length;i++){
    drumpp[i].addEventListener('click',function(){
        console.log("pressed");

        const data  = this.textContent;
       sounds(data);
        
    })
}

document.addEventListener('keypress',function(e){
    sounds(e.key);
})



//const audio =  new Audio('sounds/tom-1.mp3');
  //      audio.play();