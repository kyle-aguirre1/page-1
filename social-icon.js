// social-icons.js
document.addEventListener("DOMContentLoaded", function () {

    // Facebook
    const facebook = document.querySelector(".fa-facebook-f");
    if (facebook) {
        facebook.style.color = "#1877F2";
    }

    // YouTube
    const youtube = document.querySelector(".fa-youtube");
    if (youtube) {
        youtube.style.color = "#FF0000";
    }

    // Instagram (gradient needs special setup)
    const instagram = document.querySelector(".fa-instagram");
    if (instagram) {
        instagram.style.display = "inline-block";
        instagram.style.background = 
            "linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D)";
        instagram.style.webkitBackgroundClip = "text";
        instagram.style.backgroundClip = "text";
        instagram.style.webkitTextFillColor = "transparent";
        instagram.style.color = "transparent";
    }

});
