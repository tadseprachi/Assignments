const images = [
    "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    "https://images.unsplash.com/photo-1521747116042-5a810fda9664",
    "https://images.unsplash.com/photo-1496345875659-11f7dd282d1d"
];


let currentIndex = 0;
const slider = document.getElementById("slider");

// Function to update the image
function updateImage() {
    slider.style.opacity = "0"; // Fade out effect
    setTimeout(() => {
        slider.src = images[currentIndex];
        slider.style.opacity = "1"; // Fade in effect
    }, 300);
}

// Show first image initially
window.onload = () => {
    slider.src = images[currentIndex];
};

// Next Image
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

// Previous Image
function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
}
