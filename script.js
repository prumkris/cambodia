const buttonLeft = document.querySelector(".left");
const buttonRight = document.querySelector(".right");
const background = document.querySelector(".header");
const welcome = document.querySelector(".welcome")

// List of background image URLs
const images = [
  'url("./img/wp3304555-hd-angkor-wat-wallpaper.jpg")',
  'url("./img/cambodia_physical_map.gif")',
  'url("./img/wp2196310-cambodia-wallpapers.jpg")'
];

let currentIndex = 0;
function welcomeToCambodia() {
    if (currentIndex === 0) {
        welcome.innerHTML = `
            <h2 class="welcomet">WELCOME TO:</h2>
            <h1 class="cambodia">CAMBODIA <br> Angkor Wat</h1>`;
    } else if (currentIndex === 1) {
        welcome.innerHTML = `
            <h2 class="welcomet">WELCOME TO:</h2>
            <h1 class="cambodia" style="color:rgb(80, 170, 80)">CAMBODIA <br> Map</h1>`;
    } else if (currentIndex === 2) {
        welcome.innerHTML = `
            <h2 class="welcomet">WELCOME TO:</h2>
            <h1 class="cambodia" style="color:rgb(231, 166, 44);">CAMBODIA <br> Phnom Penh</h1>`;
} 
}


// Set the initial background
background.style.backgroundImage = images[currentIndex];
// Event listeners
buttonLeft.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  background.style.backgroundImage = images[currentIndex];
  welcomeToCambodia()
});

buttonRight.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  background.style.backgroundImage = images[currentIndex];
  console.log(currentIndex)
  welcomeToCambodia()
});
