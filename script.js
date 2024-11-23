const videoContainer = document.querySelector('.video-container');
const videoFiles = ['videos/video1.mp4', 'videos/video2.mp4', 'videos/video3.mp4'];
let currentVideoIndex = 0;

// Load videos dynamically
videoFiles.forEach((src, index) => {
  const video = document.createElement('video');
  video.src = src;
  video.className = 'video';
  video.autoplay = false;
  video.loop = true;
  video.muted = true;
  if (index === 0) video.classList.add('active'); // First video active
  videoContainer.appendChild(video);
});

const videos = document.querySelectorAll('.video');

// Show the next video
const showNextVideo = () => {
  videos[currentVideoIndex].classList.remove('active');
  currentVideoIndex = (currentVideoIndex + 1) % videos.length;
  videos[currentVideoIndex].classList.add('active');
};

// Show the previous video
const showPrevVideo = () => {
  videos[currentVideoIndex].classList.remove('active');
  currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
  videos[currentVideoIndex].classList.add('active');
};

// Swipe functionality
let startY = 0;
document.addEventListener('touchstart', (e) => {
  startY = e.touches[0].clientY;
});

document.addEventListener('touchend', (e) => {
  const endY = e.changedTouches[0].clientY;
  if (startY - endY > 50) showNextVideo(); // Swipe up
  if (endY - startY > 50) showPrevVideo(); // Swipe down
});
