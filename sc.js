var wrap = document.getElementById('wrap');
var video = document.getElementById('video');
var canvas = document.getElementById('canvas');
var cap = document.getElementById('cap');

const constraints = {
    audio : true,
    video : {
        width: 400, height: 400
    }
};

async function init(){
     try{
         const stream = await navigator.mediaDevices.getUserMedia(constraints);
         handle(stream);
     }catch(e){
         console.log('lllll  : '+e.toString())
     }
}

function handle(stream) {
    window.stream = stream;
    video.srcObject = stream;
}

init();

const image = canvas.getContext('2d');
cap.addEventListener("click", function(){
    image.drawImage(video, 0, 0, 400, 400);
})

