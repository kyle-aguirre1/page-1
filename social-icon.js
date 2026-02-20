// social-icons.js - Handles color styling for footer social media icons
document.addEventListener('DOMContentLoaded', function() {
    // Target Facebook Icon
    const facebookIcon = document.querySelector('.fab.fa-facebook-f');
    if (facebookIcon) {
        facebookIcon.style.color = '#1877F2';
    }

    // Target Instagram Icon
    const instagramIcon = document.querySelector('.fab.fa-instagram');
    if (instagramIcon) {
        instagramIcon.style.background = 'linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D)';
        instagramIcon.style.webkitBackgroundClip = 'text';
        instagramIcon.style.color = 'transparent';
    }

    // Target YouTube Icon
    const youtubeIcon = document.querySelector('.fab.fa-youtube');
    if (youtubeIcon) {
        youtubeIcon.style.color = '#FF0000';
    }
});
