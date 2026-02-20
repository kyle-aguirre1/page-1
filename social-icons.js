// Wait for the entire page to load before making changes
document.addEventListener('DOMContentLoaded', function() {

  // 1. Target Facebook Icon & Set Color
  const facebookIcon = document.querySelector('.fab.fa-facebook-f');
  if (facebookIcon) { // Only run if the icon exists on the page
    facebookIcon.style.color = '#1877F2'; // Official Facebook blue
  }

  // 2. Target Instagram Icon & Set Color
  const instagramIcon = document.querySelector('.fab.fa-instagram');
  if (instagramIcon) {
    // Instagram uses a gradient—we'll set that here
    instagramIcon.style.background = 'linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D)';
    instagramIcon.style.webkitBackgroundClip = 'text'; // Makes gradient apply to text/icon
    instagramIcon.style.color = 'transparent'; // Hides default color so gradient shows
  }

  // 3. Target YouTube Icon & Set Color
  const youtubeIcon = document.querySelector('.fab.fa-youtube');
  if (youtubeIcon) {
    youtubeIcon.style.color = '#FF0000'; // Official YouTube red
  }

});
