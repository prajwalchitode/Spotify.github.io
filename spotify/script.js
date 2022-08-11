
let songIndex=0;
let audioElement=new Audio('songs/1.mp3');
// audioElement.play();
let masterPlay= document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songItem = Array.from(document.getElementsByClassName("songItem"));
let songs =[
    {songName:"Inna Sona",filePath:"songs/1.mp3",coverPath:"1.jpg"},
    {songName:"Unstopable",filePath:"songs/2.mp3",coverPath:"2.jpg"},
    {songName:"Harbar kuyn",filePath:"songs/3.mp3",coverPath:"3.jpg"},
    {songName:"Bad lier",filePath:"songs/4.mp3",coverPath:"4.jpg"},
    {songName:"Main dhoondne ko..",filePath:"songs/5.mp3",coverPath:"5.jpg"},
    {songName:"Aaja we mahi",filePath:"songs/6.mp3",coverPath:"6.jpg"},
    {songName:"Backbone",filePath:"songs/7.mp3",coverPath:"7.jpg"},
    {songName:"kabbhi jo badal..",filePath:"songs/8.mp3",coverPath:"8.jpg"},
    {songName:"Bollywood X hol..",filePath:"songs/9.mp3",coverPath:"9.jpg"},
]

songItem.forEach((element,i) => {
    element.getElementsByTagName('img')[0].src =songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText =songs[i].songName;
});

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity =1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity =0;
    }
} )
audioElement.addEventListener('timeupdate',()=>{
console.log('timeupdate');
progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
myProgressBar.value =progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime =myProgressBar.value * audioElement.duration/100;
})

const makeAllPlay =()=>{
  
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })

}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlay();
        songIndex= parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src =`songs/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        
        audioElement.currentTime =0;
        audioElement.play();
        gif.style.opacity =1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=7){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity =1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity =1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})