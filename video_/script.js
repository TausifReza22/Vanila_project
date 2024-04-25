document.addEventListener("DOMContentLoaded", ()=> {
    const video = document.getElementById("videoPlayer");
    const playPauseBtn = document.getElementById("playPauseBtn");

           
    playPauseBtn.addEventListener("click", ()=> {
        
        if (video.paused) {          
            video.play();
            playPauseBtn.textContent = "Pause";
        } else {
            video.pause();           
            playPauseBtn.textContent = "Play";
        }
    });
});