let playerEl = document.querySelector(".player");

let playPanel = document.createElement("video");
playPanel.src = "video.mp4";
playPanel.classList.add("videoBox");

let btnPanel = document.createElement("div");
btnPanel.classList.add("btnPan");

// let btnPlayEl = document.createElement("div");
// btnPlayEl.classList.add("btnPlay");
// let btnPauseEl = document.createElement("div");
// btnPauseEl.classList.add("btnPause");

// btnPlayEl.addEventListener('click', () => {
//     playPanel.play();
// });

// btnPauseEl.addEventListener('click', () => {
//     playPanel.pause();
// });

let btnPlayPauseEl = document.createElement("div");
btnPlayPauseEl.classList.add("btnPlayPause");
let isPlaying = false;

btnPlayPauseEl.addEventListener('click', () => {
    if (!isPlaying) {
        playPanel.play();
        isPlaying = true;
    } else {
        playPanel.pause();
        isPlaying = false;
    }
});

let volumeInput = document.createElement("input");
volumeInput.type = "range";
volumeInput.min = 0;
volumeInput.max = 10;
volumeInput.value = 5;

playPanel.volume = 0.5;
volumeInput.addEventListener("change", (e)=>{
    playPanel.volume = e.target.value / 10;
});

// btnPanel.appendChild(btnPlayEl);
// btnPanel.appendChild(btnPauseEl);
btnPanel.appendChild(btnPlayPauseEl);
btnPanel.appendChild(volumeInput);
playerEl.appendChild(playPanel);
playerEl.appendChild(btnPanel);
