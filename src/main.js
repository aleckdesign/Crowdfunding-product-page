const bookmark = document.querySelector(".bookmark");
const bookmarkText = document.querySelector("#bookmark-text");
const bookmarkCircle = document.querySelector("#icon-circle");
const bookmarkPath = document.querySelector("#icon-path");

const navbar = document.querySelector("#navbar");
const navMenu = document.querySelector("#nav-menu");
const navMenuClose = document.querySelector("#close-menu");
const navOverlay = document.querySelector("#nav-overlay");

const completeOrder = document.querySelectorAll(".custom__inputs");
const btnComplete = document.querySelector("#complete");
const overlay = document.querySelector("#overlay");

const btnBack = document.querySelector("#back");
const btnClose = document.querySelector(".select__close");
const modalSelect = document.querySelector("#select");
const modalComplete = document.querySelector("#complete");

const pledgeNone = document.querySelector("#no-reward");
const noneCustom = document.querySelector("#no-reward-c");

const btnRewardBamboo = document.querySelector("#reward-1");
const pledgeBamboo = document.querySelector("#bamboo");
const bambooCustom = document.querySelector("#bamboo-c");

const btnRewardBlack = document.querySelector("#reward-2");
const pledgeBlack = document.querySelector("#black");
const blackCustom = document.querySelector("#black-c");

const radioBamboo = document.querySelector("#bamboo-radio");
const radioNoReward = document.querySelector("#no-reward-radio");
const radioBlack = document.querySelector("#black-radio");

const container = document.querySelector(".container");

const classes = [
  "nav open",
  "navbar__list",
  "navbar__item",
  "navbar__link",
  "header__menu",
  "header__icon",
];

////////////////////////////////////////////////
// NAVBAR

navMenu.addEventListener("click", () => {
  navbar.classList.add("open");

  navOverlay.classList.remove("hidden");
  navMenu.classList.add("hidden");
  navMenuClose.classList.remove("hidden");
});

navMenuClose.addEventListener("click", () => {
  navbar.classList.remove("open");

  navOverlay.classList.add("hidden");
  navMenu.classList.remove("hidden");
  navMenuClose.classList.add("hidden");
});

container.addEventListener("click", (e) => {
  console.log(e.target.className);
  if (!classes.includes(e.target.className)) {
    navbar.classList.remove("open");
    navOverlay.classList.add("hidden");
    navMenu.classList.remove("hidden");
    navMenuClose.classList.add("hidden");
  }
});

////////////////////////////////////////////////
// SELECT REWARD MODAL

btnBack.addEventListener("click", () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  modalSelect.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

btnClose.addEventListener("click", () => {
  modalSelect.classList.add("hidden");
  noneCustom.classList.add("hidden");
  bambooCustom.classList.add("hidden");
  blackCustom.classList.add("hidden");
  overlay.classList.add("hidden");
});

////////////////////////////////////////////////
// COMPLETE ORDER

completeOrder.forEach((form) => {
  form.addEventListener("submit", () => {
    setTimeout(function () {
      modalSelect.classList.add("hidden");
    }, 1000);
    setTimeout(function () {
      modalComplete.classList.remove("hidden");
    }, 1500);
  });
});

btnComplete.addEventListener("click", () => {
  modalComplete.classList.add("hidden");
  overlay.classList.add("hidden");
});

////////////////////////////////////////////////
// BAMBOO

btnRewardBamboo.addEventListener("click", () => {
  window.scroll({
    top: 60,
    left: 0,
    behavior: "smooth",
  });
  modalSelect.classList.remove("hidden");
  overlay.classList.remove("hidden");
  radioBamboo.checked = true;
  bambooCustom.classList.remove("hidden");
});

pledgeBamboo.addEventListener("click", () => {
  if (radioBamboo.checked) {
    bambooCustom.classList.remove("hidden");
    blackCustom.classList.add("hidden");
    noneCustom.classList.add("hidden");
  }
});

////////////////////////////////////////////////
// BLACK EDIION

btnRewardBlack.addEventListener("click", () => {
  window.scroll({
    top: 120,
    left: 0,
    behavior: "smooth",
  });
  modalSelect.classList.remove("hidden");
  overlay.classList.remove("hidden");
  radioBlack.checked = true;
  blackCustom.classList.remove("hidden");
});

pledgeBlack.addEventListener("click", () => {
  if (radioBlack.checked) {
    console.log("bob");
    blackCustom.classList.remove("hidden");
    bambooCustom.classList.add("hidden");
    noneCustom.classList.add("hidden");
  }
});

////////////////////////////////////////////////
// NONE

pledgeNone.addEventListener("click", () => {
  if (radioNoReward.checked) {
    noneCustom.classList.remove("hidden");
    bambooCustom.classList.add("hidden");
    blackCustom.classList.add("hidden");
  }
});

pledgeNone.addEventListener("keydown", (e) => {
  console.log(e.key);
  if (radioNoReward.checked) {
    noneCustom.classList.remove("hidden");
    bambooCustom.classList.add("hidden");
    blackCustom.classList.add("hidden");
  }
});

////////////////////////////////////////////////
// BOOKMARK

bookmark.addEventListener("click", () => {
  bookmark.classList.toggle("bookmark--active");
  if (bookmarkText.textContent === "Bookmark") {
    bookmarkText.textContent = "Bookmarked";
  } else {
    bookmarkText.textContent = "Bookmark";
  }
});
