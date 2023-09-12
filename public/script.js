var navbar = document.querySelector("nav");
var isScrolled = false;
var prevScrollPos = window.pageYOffset;

window.addEventListener("scroll", function () {
  var currentScrollPos = window.pageYOffset;

  if (currentScrollPos > prevScrollPos) {
    navbar.classList.add("scrolled");
    isScrolled = true;
  } else {
    isScrolled = false;
  }

  if (!isScrolled && currentScrollPos === 0) {
    navbar.classList.remove("scrolled");
  }

  prevScrollPos = currentScrollPos;
});

const button = document.querySelector("#menu-button");
const menu = document.querySelector("#menubar");
const menuOpenIconLight = "../svg/menu-to-close-transition.svg";
const menuCloseIconLight = "../svg/close-to-menu-transition.svg";
const menuOpenIconDark = "../svg/menu-to-close-transition-dark.svg";
const menuCloseIconDark = "../svg/close-to-menu-transition-dark.svg";

const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

window.addEventListener("DOMContentLoaded", function () {
  const darkModeStatus = localStorage.getItem("darkModeStatus");
  if (darkModeStatus === "enabled") {
    html.classList.add("dark");
    darkToggle.checked = true;
    updateMenuIcon(true);
  }
});

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.setItem("darkModeStatus", "enabled");
    updateMenuIcon(true);
  } else {
    html.classList.remove("dark");
    localStorage.setItem("darkModeStatus", "disabled");
    updateMenuIcon(false);
  }
});

button.addEventListener("click", () => {
  navbar.classList.toggle("active");
  menu.classList.toggle("hidden");

  if (menu.classList.contains("hidden")) {
    button.src = isDarkMode() ? menuCloseIconDark : menuCloseIconLight;
  } else {
    button.src = isDarkMode() ? menuOpenIconDark : menuOpenIconLight;
  }
});

function isDarkMode() {
  return html.classList.contains("dark");
}

function updateMenuIcon(isDarkMode) {
  if (menu.classList.contains("hidden")) {
    button.src = isDarkMode ? menuCloseIconDark : menuCloseIconLight;
  } else {
    button.src = isDarkMode ? menuOpenIconDark : menuOpenIconLight;
  }
}
window.addEventListener("DOMContentLoaded", function () {
  const darkModeStatus = localStorage.getItem("darkModeStatus");
  if (darkModeStatus === "enabled") {
    enableDarkMode();
  }
});

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    enableDarkMode();
    localStorage.setItem("darkModeStatus", "enabled");
  } else {
    disableDarkMode();
    localStorage.setItem("darkModeStatus", "disabled");
  }
});

function enableDarkMode() {
  html.classList.add("dark-mode");
}

function disableDarkMode() {
  html.classList.remove("dark-mode");
}

var searchBtn = document.getElementById("search-btn");
var searchForm = document.getElementById("search-form");
var searchInput = document.getElementById("search-input");
var searchBtn1 = document.getElementById("search-btn1");
var searchForm1 = document.getElementById("search-form1");
var searchInput1 = document.getElementById("search-input1");

searchBtn.addEventListener("click", function () {
  searchForm.classList.toggle("hidden");
  searchInput.focus();
});

searchForm.addEventListener("submit", function (event) {
  event.preventDefault();
  performSearch();
});

searchInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    performSearch();
  }
});

searchBtn1.addEventListener("click", function () {
  searchForm1.classList.toggle("hidden");
  searchInput1.focus();
});

searchForm1.addEventListener("submit", function (event) {
  event.preventDefault();
  performSearch();
});

searchInput1.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    performSearch();
  }
});

function performSearch() {
  var searchQuery = searchInput.value;
  window.open(
    "https://www.google.com/search?q=" + encodeURIComponent(searchQuery),
    "_blank"
  );
  searchInput.value = "";
  searchForm.classList.add("hidden");
}

var searchInput = document.getElementById("search-input");
var searchPlaceholder = searchInput.getAttribute("placeholder");
var searchQueries = [
  "What are you looking for",
  "Air Jordan",
  "T-Shirt",
  "Jacket",
];
var currentIndex = 0;
var typingSpeed = 50;
var deleteSpeed = 50;
var delayBetweenQueries = 500;

function typeSearchQuery() {
  if (currentIndex < searchQueries.length) {
    var currentSearchQuery = searchQueries[currentIndex];
    typeText(currentSearchQuery, 0, typingSpeed);
  }
}

function deleteSearchQuery() {
  var currentSearchQuery = searchQueries[currentIndex];
  deleteText(currentSearchQuery.length, deleteSpeed);
}

function typeText(text, index, speed) {
  if (index < text.length) {
    searchInput.value += text.charAt(index);
    index++;
    setTimeout(function () {
      typeText(text, index, speed);
    }, speed);
  } else {
    setTimeout(deleteSearchQuery, delayBetweenQueries);
  }
}

function deleteText(length, speed) {
  if (length > 0) {
    searchInput.value = searchInput.value.slice(0, -1);
    length--;
    setTimeout(function () {
      deleteText(length, speed);
    }, speed);
  } else {
    currentIndex++;
    if (currentIndex >= searchQueries.length) {
      currentIndex = 0;
    }
    setTimeout(typeSearchQuery, delayBetweenQueries);
  }
}

searchInput.addEventListener("input", function (event) {
  var currentSearchQuery = event.target.value;
  if (currentSearchQuery !== "") {
    searchQueries.push(currentSearchQuery);
  }
});

searchInput.addEventListener("focus", function () {
  if (searchInput.value === "") {
    searchInput.setAttribute("placeholder", "");
    currentIndex = 0;
    typeSearchQuery();
  }
});

searchInput.addEventListener("blur", function () {
  if (searchInput.value === "") {
    searchInput.setAttribute("placeholder", searchPlaceholder);
  }
});

function performSearch() {
  var encodedQuery = encodeURIComponent(searchQueries.join(" ").trim());
  window.open("https://www.google.com/search?q=" + encodedQuery, "_blank");
  searchInput.value = "";
  searchQueries = [];
  currentIndex = 0;
  searchInput.setAttribute("placeholder", searchPlaceholder);
}

searchInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    performSearch();
  }
});

var popupButton = document.getElementById("popup-button");
var popupOverlay = document.getElementById("popup-overlay");
var closeButton = document.getElementById("close-button");
var videoPlayer = document.getElementById("video-player");
var zoomButton = document.getElementById("zoom-button");
var minimizeButton = document.getElementById("minimize-button");

popupButton.addEventListener("click", function () {
  popupOverlay.classList.remove("hidden");
  videoPlayer.play();
});

closeButton.addEventListener("click", function () {
  videoPlayer.pause();
  popupOverlay.classList.add("hidden");
});

zoomButton.addEventListener("click", function () {
  if (videoPlayer.requestFullscreen) {
    videoPlayer.requestFullscreen();
  } else if (videoPlayer.mozRequestFullScreen) {
    videoPlayer.mozRequestFullScreen();
  } else if (videoPlayer.webkitRequestFullscreen) {
    videoPlayer.webkitRequestFullscreen();
  } else if (videoPlayer.msRequestFullscreen) {
    videoPlayer.msRequestFullscreen();
  }
});

minimizeButton.addEventListener("click", function () {
  if (videoPlayer.requestPictureInPicture) {
    videoPlayer.requestPictureInPicture();
    popupOverlay.classList.add("hidden");
  } else if (videoPlayer.mozRequestPictureInPicture) {
    videoPlayer.mozRequestPictureInPicture();
    popupOverlay.classList.add("hidden");
  } else if (videoPlayer.webkitRequestPictureInPicture) {
    videoPlayer.webkitRequestPictureInPicture();
    popupOverlay.classList.add("hidden");
  } else if (videoPlayer.msRequestPictureInPicture) {
    videoPlayer.msRequestPictureInPicture();
    popupOverlay.classList.add("hidden");
  }
});

var macButtons = document.getElementsByClassName("mac-button");

document
  .getElementById("popup-overlay")
  .addEventListener("mouseenter", function () {
    for (var i = 0; i < macButtons.length; i++) {
      macButtons[i].classList.add("fade-in");
    }
  });
document
  .getElementById("popup-overlay")
  .addEventListener("mouseleave", function () {
    for (var i = 0; i < macButtons.length; i++) {
      macButtons[i].classList.remove("fade-in");
    }
  });

window.addEventListener("scroll", muncul);

function muncul() {
  let elements = document.querySelectorAll(".elemen");
  for (let i = 0; i < elements.length; i++) {
    //   mengambil ukuran tinggi layar
    let tinggiLayar = window.innerHeight;
    let jarakAtasElemen = elements[i].getBoundingClientRect().top;
    let ukuranScroll = 150;
    if (jarakAtasElemen < tinggiLayar - ukuranScroll) {
      elements[i].classList.add("tampil");
    } else {
      elements[i].classList.remove("tampil");
    }
  }
}

function showPopupImage(imageUrl) {
  var popupImageContainer = document.getElementById("popupImageContainer");
  var popupImageContent = document.getElementById("popupImageContent");

  popupImageContent.src = imageUrl;
  popupImageContainer.style.display = "flex";
}

function hidePopupImage() {
  var popupImageContainer = document.getElementById("popupImageContainer");
  popupImageContainer.style.display = "none";
}

window.addEventListener("scroll", function () {
  if (window.scrollX !== 0) {
    window.scrollTo(0, window.scrollY);
  }
});

document.addEventListener("copy", function (event) {
  event.preventDefault();
  var clipboardData =
    event.clipboardData ||
    window.clipboardData ||
    event.originalEvent.clipboardData;
  if (clipboardData) {
    clipboardData.setData(
      "text/plain",
      "Copying is not allowed on this website."
    );
  }
});

var images = document.getElementsByTagName("img");
for (var i = 0; i < images.length; i++) {
  images[i].ondragstart = function () {
    return false;
  };
}

console.info(`
\u2592\u2588\u2591\u2592\u2588 \u2588\u2580\u2580\u2588 \u2588\u2580\u2580 \u2588\u2591\u2588 \u2588\u2580\u2580 \u2588\u2580\u2580\u2588 
\u2592\u2588\u2580\u2580\u2588 \u2588\u2584\u2584\u2588 \u2588\u2591\u2591 \u2588\u2580\u2584 \u2588\u2580\u2580 \u2588\u2584\u2584\u2580 
\u2592\u2588\u2591\u2592\u2588 \u2580\u2591\u2591\u2580 \u2580\u2580\u2580 \u2580\u2591\u2580 \u2580\u2580\u2580 \u2580\u2591\u2580\u2580 

\u2591\u2591\u2591\u2592\u2588 \u2588\u2580\u2580\u2588 \u2588\u2580\u2580\u2584 \u2588\u2580\u2580\u2580 \u2588\u2580\u2580\u2588 \u2588\u2580\u2580\u2584 
\u2591\u2584\u2591\u2592\u2588 \u2588\u2584\u2584\u2588 \u2588\u2591\u2591\u2588 \u2588\u2591\u2580\u2588 \u2588\u2584\u2584\u2588 \u2588\u2591\u2591\u2588 
\u2592\u2588\u2584\u2584\u2588 \u2580\u2591\u2591\u2580 \u2580\u2591\u2591\u2580 \u2580\u2580\u2580\u2580 \u2580\u2591\u2591\u2580 \u2580\u2591\u2591\u2580 

\u2592\u2588\u2580\u2584\u2580\u2588 \u2588\u2580\u2580 \u2588\u2580\u2580\u2584 \u2588\u2591\u2591\u2588 \u2588\u2580\u2580 \u2588\u2580\u2580\u2588 \u2588\u2580\u2580\u2588 \u2588\u2580\u2580\u2584 \u2588\u2580\u2580\u2580 \u2588 
\u2592\u2588\u2592\u2588\u2592\u2588 \u2588\u2580\u2580 \u2588\u2591\u2591\u2588 \u2588\u2584\u2584\u2588 \u2588\u2580\u2580 \u2588\u2584\u2584\u2580 \u2588\u2584\u2584\u2588 \u2588\u2591\u2591\u2588 \u2588\u2591\u2580\u2588 \u2580 
\u2592\u2588\u2591\u2591\u2592\u2588 \u2580\u2580\u2580 \u2580\u2591\u2591\u2580 \u2584\u2584\u2584\u2588 \u2580\u2580\u2580 \u2580\u2591\u2580\u2580 \u2580\u2591\u2591\u2580 \u2580\u2591\u2591\u2580 \u2580\u2580\u2580\u2580 \u2584`),
  console.info(
    `\u{1F1ED}\u200B\u200B\u200B\u200B\u200B\u{1F1E6}\u200B\u200B\u200B\u200B\u200B\u{1F1E8}\u200B\u200B\u200B\u200B\u200B\u{1F1F0}\u200B\u200B\u200B\u200B\u200B\u{1F1EA}\u200B\u200B\u200B\u200B\u200B\u{1F1F7}\u200B\u200B\u200B\u200B\u200B \u{1F1EF}\u200B\u200B\u200B\u200B\u200B\u{1F1E6}\u200B\u200B\u200B\u200B\u200B\u{1F1F3}\u200B\u200B\u200B\u200B\u200B\u{1F1EC}\u200B\u200B\u200B\u200B\u200B\u{1F1E6}\u200B\u200B\u200B\u200B\u200B\u{1F1F3}\u200B\u200B\u200B\u200B\u200B \u{1F1F2}\u200B\u200B\u200B\u200B\u200B\u{1F1EA}\u200B\u200B\u200B\u200B\u200B\u{1F1F3}\u200B\u200B\u200B\u200B\u200B\u{1F1FE}\u200B\u200B\u200B\u200B\u200B\u{1F1EA}\u200B\u200B\u200B\u200B\u200B\u{1F1F7}\u200B\u200B\u200B\u200B\u200B\u{1F1E6}\u200B\u200B\u200B\u200B\u200B\u{1F1F3}\u200B\u200B\u200B\u200B\u200B\u{1F1EC}\u200B\u200B\u200B\u200B\u200B!`
  ),
  console.info(
    `\u{1F1ED}\u200B\u200B\u200B\u200B\u200B\u{1F1E6}\u200B\u200B\u200B\u200B\u200B\u{1F1E8}\u200B\u200B\u200B\u200B\u200B\u{1F1F0}\u200B\u200B\u200B\u200B\u200B\u{1F1EA}\u200B\u200B\u200B\u200B\u200B\u{1F1F7}\u200B\u200B\u200B\u200B\u200B \u{1F1EF}\u200B\u200B\u200B\u200B\u200B\u{1F1E6}\u200B\u200B\u200B\u200B\u200B\u{1F1F3}\u200B\u200B\u200B\u200B\u200B\u{1F1EC}\u200B\u200B\u200B\u200B\u200B\u{1F1E6}\u200B\u200B\u200B\u200B\u200B\u{1F1F3}\u200B\u200B\u200B\u200B\u200B \u{1F1F2}\u200B\u200B\u200B\u200B\u200B\u{1F1EA}\u200B\u200B\u200B\u200B\u200B\u{1F1F3}\u200B\u200B\u200B\u200B\u200B\u{1F1FE}\u200B\u200B\u200B\u200B\u200B\u{1F1EA}\u200B\u200B\u200B\u200B\u200B\u{1F1F7}\u200B\u200B\u200B\u200B\u200B\u{1F1E6}\u200B\u200B\u200B\u200B\u200B\u{1F1F3}\u200B\u200B\u200B\u200B\u200B\u{1F1EC}\u200B\u200B\u200B\u200B\u200B!`
  );

const floatingElements = document.querySelectorAll(".floating");
floatingElements.forEach((element) => {
  element.classList.add("floating");
});