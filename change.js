const changePhoto = () => {
  const weatherImg = document.getElementById("weatherImg");

  weatherImg.addEventListener("click", () => {
    weatherImg.classList.toggle("weather");
    weatherImg.classList.toggle("nasa");
  });
};
changePhoto();
