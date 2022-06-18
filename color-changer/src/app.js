const colors = ["green", "red", "violet", "orange"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

const getRandomNumber = () => {
  return Math.floor(Math.random() * colors.length)
}

btn.addEventListener("click", function () {
  const rand = getRandomNumber();

  document.body.style.backgroundColor = colors[rand];
  color.textContent = colors[rand];
});