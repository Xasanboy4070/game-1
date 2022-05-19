const luch = document.querySelector(".luch");
const text = document.querySelector(".title");
const foot = document.querySelector(".foot");
const box = document.querySelector(".box1");

let BOX_SIZE = 25;
let step = 0;

let randomX = Math.ceil(Math.random() * 440) + 540;
let randomY = Math.ceil(Math.random() * 440) + 150;

function fut() {
  foot.classList.add("foot2");
  foot.style.top = `${randomY}px`;
  foot.style.left = `${randomX}px`;
  BOX_SIZE += 3;
  BOX_SIZE += 3;
  step += 5;
}

document.addEventListener("mousemove", (e) => {
  luch.style.top = `${e.y - 12}px`;
  luch.style.left = `${e.x - 12}px`;
  if (
    randomX + 5 >= e.x &&
    randomX - 5 <= e.x &&
    randomY + 5 >= e.y &&
    randomY - 5 <= e.y
  ) {
    foot.classList.remove("foot2");
    luch.style.width = `${BOX_SIZE}px`;
    luch.style.height = `${BOX_SIZE}px`;
    text.innerText = step;
  }
});

fut();
