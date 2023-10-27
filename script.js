const catGifContainer = document.getElementById("catGifContainer");
const catGif = document.getElementById("catGif");
const showCatButton = document.getElementById("showCatButton");

const catGifFiles = [
  "cat1.gif",
  "cat2.gif",
  "cat3.jpg",
  "cat4.gif",
  "cat5.gif",
  "cat6.gif",
  "cat7.gif"
];

let last = ""

showCatButton.addEventListener("click", function () {
   let randomIndex;

  do {
     randomIndex = Math.floor(Math.random() * catGifFiles.length);
   } while (last === randomIndex)
  
   last = randomIndex 
  const randomCatGif = catGifFiles[randomIndex];
  
  catGif.src = "assets/" + randomCatGif;
  catGifContainer.style.display = "block";
});
