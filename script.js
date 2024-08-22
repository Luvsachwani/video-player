// script.js
document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('video');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const stopBtn = document.getElementById('stopBtn');
    const volumeControl = document.getElementById('volumeControl');

    // Toggle play/pause
    playPauseBtn.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            playPauseBtn.textContent = 'Pause';
        } else {
            video.pause();
            playPauseBtn.textContent = 'Play';
        }
    });

    // Stop video
    stopBtn.addEventListener('click', () => {
        video.pause();
        video.currentTime = 0;
        playPauseBtn.textContent = 'Play';
    });

    // Volume control
    volumeControl.addEventListener('input', () => {
        video.volume = volumeControl.value;
    });
});