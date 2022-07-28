var data = {
      title: [
          "Alec Benjamin - Let me slowly",
          "Daft Punk - Get Lucky",
          "Imagine Dragons - Enemy",
          "Duncan Laurance - Arcade",
          "Astronaut In The Ocean",
          "Rauf Faik - Detstvo",
          "Miyagi - Fire man",
          "Miyagi - Capitan",
          "Miyagi - Badabum",
          "Rauf Faik - Kolibelnya",
          "Rauf Faik - Ya Lyublyu Tebya",
          
      ],


      song: [
        "music/Alec Benjamin-Let Me Down Slowly.mp3",
        "music/daft-punk_-_get-lucky.mp3",
        "music/imagine-dragons_-_enemy.mp3",
        "music/duncan-laurence-feat-fletcher_-_arcade.mp3",
        "music/masked-wolf_-_astronaut-in-the-ocean.mp3",
        "music/rauf-faik_-_detstvo.mp3",
        "music/miyagi-endshpil_-_fire-man.mp3",
        "music/Miyagi-Captain.mp3",
        "music/miyagi_-_badabum.mp3",
        "music/rauf-faik_-_kolybelnaya.mp3",
        "music/rauf-faik_-_ya-lyublyu-tebya-davno-alexei-shkurko-remix.mp3",
        
      ],
      poster: [
          "https://c.tenor.com/lJHCtsh48h0AAAAC/ring-cool.gif",
          "https://www.icegif.com/wp-content/uploads/cool-wallpapers-icegif-1.gif",
          "https://archive.org/download/cool-animated-gif-33/cool-animated-gif-33.gif",
          "https://i.pinimg.com/originals/ea/53/50/ea53502f7b5062d184b87d44ebfea1f2.gif",
          "https://c.tenor.com/qJXdyIYwNSoAAAAC/satisfied-cool.gif",
          "https://64.media.tumblr.com/239ad7e946a65c9e1cbc6ed508e12269/tumblr_nwbyqyd8RJ1s9ab4to1_500.gifv",
          "https://i.gifer.com/6Szl.gif",
          "https://www.icegif.com/wp-content/uploads/icegif-1174.gif",
          "https://media2.giphy.com/media/5pYw5TqOzAzbZkFZfP/giphy-downsized-large.gif",
          "https://www.icegif.com/wp-content/uploads/cool-wallpapers-icegif.gif",
          "https://i.gifer.com/embedded/download/76X1.gif",
          
      ]
}



var song = new Audio()
var currentSong = 0;
console.log(song);


window.onload = function () {
    playSong()
}

function playSong() {
    song.src = data.song[currentSong];
    let songTitle = document.getElementById("songTitle");
    songTitle.textContent = data.title[currentSong];

    let img = document.getElementById("row1");
    img.style.backgroundImage = "url(" + data.poster[currentSong] + ")";
    let main = document.getElementById("main")
    main.style.backgroundImage = "url(" + data.poster[currentSong] + ")";
    song.play();
}



function playOrPauseSong() {
    let play = document.getElementById("play");


    if (song.paused) {
        song.play();
        play.src = "images/pause.png" //pause
    } else {
        song.pause();
        play.src = "images/play-button-arrowhead.png" //play
    }

}



song.addEventListener("timeupdate", function () {
    // console.log(song.currentTime);
    // console.log(song.duration);

    let fill = document.getElementById("fill")

    let position = song.currentTime / song.duration;
    fill.style.width = position * 100 + "%";

    convertTime(song.currentTime)


    if (song.ended) {
        next()
    }

})


function convertTime(seconds) {
    let currentTime = document.getElementById("currentTime");

    let min = Math.floor(seconds / 60);
    let sec = Math.floor(seconds % 60);

    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;

    currentTime.textContent = min + ":" + sec;


    totalTime(Math.round(song.duration))
}



function totalTime(seconds) {

    var min = Math.floor(seconds / 60)
    var sec = Math.floor(seconds % 60)
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;


    if (isNaN(min) || isNaN(sec)) {
        return false
    } else {

        currentTime.textContent += " / " + min + ":" + sec
    }

}



function next() {
    currentSong++;
    console.log(currentSong);
    if (currentSong == data.song.length) {
        currentSong = 0
    }

    playSong();
    play.src = "images/pause.png"
}

function pre() {
    currentSong--;

    if (currentSong < 0) {
        currentSong = data.song.length - 1
    }
    playSong();
    play.src = "images/pause.png"
}

function muted(){
    let mute = document.getElementById("mute");

    if(song.muted){
        song.muted = false
        mute.src = "images/volume-mute.png"
    }else{
        song.muted = true
        mute.src = "images/volume.png"

    }
}


function decrease(){
    song.volume -= 0.2
}

function increase(){
    song.volume+= 0.2
}