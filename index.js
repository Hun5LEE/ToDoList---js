const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
  title.classList.toggle(CLICKED_CLASS);
  // const hasClass = title.classList.contains(CLICKED_CLASS);

  // if(hasClass) {
  //   title.classList.remove(CLICKED_CLASS);
  // } else {
  //   title.classList.add(CLICKED_CLASS);
  // }
}

function init() {
  title.addEventListener("click", handleClick);
}
init();

/*
const BASE_COLOR = "green";
const OTHER_COLOR = "aqua";

function handleClick() {
  const currentColor = title.style.color;
  if (currentColor === BASE_COLOR) {
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
}*/