
let totalJapa = 0;
let todayJapa =0;
let malaCount = 0;
let clickCount = 0;

const totalJapaEl = document.getElementById("totalJapa");
const todayJapaEl = document.getElementById("todayJapa");
const malaEl = document.getElementById("malaCount");


const circleMobile = document.getElementById("circleMobile");
const circleDesktop = document.getElementById("circleDesktop");
const circleMobileText = document.getElementById("circleMobileText");
const circleDesktopText = document.getElementById("circleDesktopText");

const countBtn = document.getElementById("countBtn");
const nameSelect = document.getElementById("name-select");
const animationContainer = document.getElementById("naamAnimationContainer");
 
const bell = document.getElementById("bellSound");

// 108 clicks = 1 mala
const maxCount = 108;

// Circle radius
const circleMobileLength = 2 * Math.PI * 77;
const circleDesktopLength = 2 * Math.PI * 96;

countBtn.addEventListener("click", () => {
  totalJapa++;
  todayJapa++;
  clickCount++;

  totalJapaEl.innerText = totalJapa;
  todayJapaEl.innerText = todayJapa;

  // Update circle
  const mobileProgress = (clickCount / maxCount) * circleMobileLength;
  const desktopProgress = (clickCount / maxCount) * circleDesktopLength;

  circleMobile.setAttribute("stroke-dasharray", `${mobileProgress} ${circleMobileLength}`);
  circleDesktop.setAttribute("stroke-dasharray", `${desktopProgress} ${circleDesktopLength}`);

  circleMobileText.innerText = clickCount;
  circleDesktopText.innerText = clickCount;

  // 108 clicks -> 1 mala
  if (clickCount === maxCount) {
    malaCount++;
    malaEl.innerText = malaCount;
    clickCount = 0;

    bell.currentTime = 0;
    bell.play().catch(() => {});

    // 📳 Mobile vibration
    if (navigator.vibrate) {
      navigator.vibrate([100, 50, 100]); // soft bhakti vibration
    }
  }
  

  // Naam animation
  showNaamAnimation(nameSelect.value);
});

// Naam float animation function
function showNaamAnimation(naam) {
  const span = document.createElement("span");
  span.innerText = naam;

  const x = window.innerWidth / 2; // center
  const y = window.innerHeight - 100; // bottom

  span.style.position = "absolute";
  span.style.left = `${x}px`;
  span.style.top = `${y}px`;
  span.style.transform = "translateX(-50%)";

  span.className = "text-orange-600 font-bold text-lg animate-float pointer-events-none";

  animationContainer.appendChild(span);

  setTimeout(() => {
    span.remove();
  }, 4000);
}



//
const musicBtn = document.getElementById("musicBtn");
const music = document.getElementById("bgMusic");
const icon = document.getElementById("musicIcon");
const text = document.getElementById("musicText");


let isPlaying = false;

musicBtn.addEventListener("click", () => {
  if (!isPlaying) {
    music.play();
    icon.textContent = "🔊";
    text.textContent = "On";
  } else {
    music.pause();
    icon.textContent = "🔇";
    text.textContent = "Off";
  }
  isPlaying = !isPlaying;
});

let seconds = 0;
let minutes = 0;
let hours = 0;
let timerInterval = null;
let timerRunning = false;
let timerPaused = false;

// ⏱ Start timer (sirf ek baar)
function startTimer() {
  if (!timerRunning) {
    timerRunning = true;

    document.getElementById("controlBtn").classList.remove("hidden"); // pause dikhao

    timerInterval = setInterval(() => {
      if (!timerPaused) {
        seconds++;

        if (seconds === 60) {
          minutes++;
          seconds = 0;
        }
        if (minutes === 60) {
          hours++;
          minutes = 0;
        }
        document.getElementById("timer").innerText =
          String(hours).padStart(2, "0") + ":" +
          String(minutes).padStart(2, "0") + ":" +
          String(seconds).padStart(2, "0");
      }
      }
    }, 1000);
  }
}

// ⏸ / ▶️ Toggle
function togglePause() {
  timerPaused = !timerPaused;

  document.getElementById("controlBtn").innerText =
    timerPaused ? "▶️" : "⏸";
}

// 🌍 Kahin bhi click → timer start
document.addEventListener("click", () => {
  startTimer();
});

//dropdown
 const btn = document.getElementById("dropdownBtn");
  const menu = document.getElementById("dropdownMenu");
  const selected = document.getElementById("selectedName");
  const arrow = document.getElementById("arrow");

  btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    arrow.classList.toggle("rotate-180");
  });

  document.querySelectorAll(".dropdown-item").forEach(item => {
    item.addEventListener("click", () => {
      selected.textContent = item.textContent;
      menu.classList.add("hidden");
      arrow.classList.remove("rotate-180");
    });
  });

  // click outside close
  document.addEventListener("click", (e) => {
    if (!document.getElementById("customDropdown").contains(e.target)) {
      menu.classList.add("hidden");
      arrow.classList.remove("rotate-180");
    }
  });

  function showNaamAnimation(text) {
    const container = document.getElementById("naamAnimationContainer");

    const span = document.createElement("span");
    span.textContent = text;
    span.className = "animate-float";

    // 🔀 random position (pure screen)
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    span.style.left = x + "px";
    span.style.top = y + "px";

    container.appendChild(span);

    // animation खत्म होने पर remove
    setTimeout(() => {
      span.remove();
    }, 2000);
  }


  //ganti bajegi buttton pai click karte 



