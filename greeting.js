const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault(); // submit 되는 기본동작을 막음. 
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}!`
}

function loadName() {
  const currentuser = localStorage.getItem(USER_LS);
  if(currentuser === null) { // null user case
    askForName();
  } else { // exist user case
    paintGreeting(currentuser);
  }
}

function init() {
  loadName();
}

init();