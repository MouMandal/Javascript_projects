/*INITILISE THAT THE SONGINDEX IS 0*/
let songIndex = 0;
/*ADD A DEFAULT AUDIO*/
let audioElement = new Audio("1.mp3");
let startSong = document.getElementById("startsong");
let progressbar = document.getElementById("progressbar");
let gifs = document.getElementById("gifs");
/*SONGITEM IS A HTML COLLECTION SO USING ARRAY.FROM*/
let songitem = Array.from(document.getElementsByClassName("songitem"));
let para = document.getElementById("para");

/*ADDING ARRAY OBJECT*/
let songs = [
    { songName: "jumka", filePath: "1.mp3", coverPath: 'images/1.jpg', Artist: "arijit singh" },
    { songName: "heriya", filePath: "2.mp3", coverPath: "images/2.jpg", Artist: "jasleen" },
    { songName: "channa mereya", filePath: "3.mp3", coverPath: "images/3.jpg", Artist: "arijit singh" },
    { songName: "tere payaar main", filePath: "4.mp3", coverPath: "images/4.jpg", Artist: "arijit singh" },
    { songName: "besharam", filePath: "5.mp3", coverPath: "images/5.jpg", Artist: "shilpa roe" },
    { songName: "pathaan", filePath: "6.mp3", coverPath: "images/6.jpg", Artist: "arijit singh" },
    { songName: "Let me love you", filePath: "7.mp3", coverPath: "images/7.jpg", Artist: "justin biebar" },
]
/*UPDATE SONG NAME AND COVERPATH*/
songitem.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("spanchange")[0].innerText = songs[i].songName;

})
/*STARTING SONG*/
startsong.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        gifs.style.opacity = 1;
    }
    else {
        audioElement.pause();
        gifs.style.opacity = 0;
    }
})
/*PROGRESS BAR UPDATE*/
audioElement.addEventListener("timeupdate", () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    progressbar.value = progress;

})
progressbar.addEventListener("change", () => {

    audioElement.currentTime = ((progressbar.value * audioElement.duration) / 100);


})

/*CHANGE THE GIFS OPASITY AND ALSO CHANGE THE PARA*/
Array.from(document.getElementsByClassName("starting")).forEach((element) => {
    element.addEventListener('click', (e) => {
        if (audioElement.paused || audioElement.currentTime <= 0) {
            audioElement.play();
            gifs.style.opacity = 1;
            songIndex = parseInt(e.target.id);
            audioElement.src = `${songIndex + 1}.mp3`;
            para.innerText = `${songs[songIndex].songName}`;
            console.log(para);
            audioElement.currentTime = 0;
            audioElement.play();
        }
        else {
            audioElement.pause();
            gifs.style.opacity = 0;
        }

    })

})
/*CLICK SONG IMAGE AND CHANGE BACKGROUND*/
Array.from(document.getElementsByClassName("songitem")).forEach((element, i) => {
    element.addEventListener("click", (e) => {

        let elm = document.getElementById("Background_Image_Display_container");
        elm.style.backgroundImage = `url('${songs[i].coverPath}')`;
    })
})

/*NEXT BUTTON TO CHANGE THE SONG*/
document.getElementById("next").addEventListener("click", () => {
    if (songIndex >= 6) {
        songIndex = 0;
        console.log("error");
    }
    else {
        songIndex += 1;
    }

    audioElement.src = `${songIndex + 1}.mp3`;
    para.innerText = `${songs[songIndex].songName}`;
    audioElement.currentTime = 0;
    audioElement.play();
})

/*CLICK PREVIOUS BUTTON FOR GO TO THE PRIVIOUS SONG*/
document.getElementById("previous").addEventListener("click", () => {
    if (songIndex <= 0) {
        songIndex = 0;
        console.log("error occured");
    }
    else {
        songIndex -= 1;
    }

    audioElement.src = `${songIndex + 1}.mp3`;
    para.innerText = `${songs[songIndex].songName}`;
    audioElement.currentTime = 0;
    audioElement.play();
})






