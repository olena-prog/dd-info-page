/**
 * Before/After Experience Section - Video Player
 */
function playExperienceVideo() {
  const video = document.getElementById('experience-video');
  const overlay = document.getElementById('video-overlay');

  if (video && overlay) {
    video.controls = true;
    video.muted = false;
    video.play();
    overlay.style.display = 'none';
  }
}
