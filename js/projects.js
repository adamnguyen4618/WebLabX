document.addEventListener("DOMContentLoaded", function() {

  // Modal elements
  const modal = document.getElementById("game-modal");
  const viewGameBtn = document.getElementById("view-game");
  const closeBtn = document.querySelector(".close");

  viewGameBtn.addEventListener("click", function(e) {
    e.preventDefault();
    modal.style.display = "block";
  });

  closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
    endGame();
  });

  window.addEventListener("click", function(e) {
    if (e.target === modal) {
      modal.style.display = "none";
      endGame();
    }
  });

  // CSS Animation Lab Modal elements
  const cssModal = document.getElementById("css-animation-modal");
  const viewCssBtn = document.getElementById("view-css");
  const cssCloseBtn = cssModal.querySelector(".close");

  viewCssBtn.addEventListener("click", function(e) {
    e.preventDefault();
    cssModal.style.display = "block";
  });

  cssCloseBtn.addEventListener("click", function() {
    cssModal.style.display = "none";
  });

  window.addEventListener("click", function(e) {
    if (e.target === cssModal) {
      cssModal.style.display = "none";
    }
  });

  // Meme Generator Modal elements
  const memeModal = document.getElementById("meme-modal");
  const viewMemeBtn = document.getElementById("view-meme");
  const memeCloseBtn = memeModal.querySelector(".close");
  const memeImg = document.getElementById("meme-img");
  const newMemeBtn = document.getElementById("new-meme-btn");

  const memes = [
    "https://i.imgflip.com/30b1gx.jpg",
    "https://i.imgflip.com/1bij.jpg",
    "https://i.imgflip.com/1g8my4.jpg",
    "https://i.imgflip.com/4t0m5.jpg"
  ];

  function getRandomMeme() {
    const randomIndex = Math.floor(Math.random() * memes.length);
    return memes[randomIndex];
  }

  viewMemeBtn.addEventListener("click", function(e) {
    e.preventDefault();
    memeImg.src = getRandomMeme();
    memeModal.style.display = "block";
  });

  memeCloseBtn.addEventListener("click", function() {
    memeModal.style.display = "none";
  });

  window.addEventListener("click", function(e) {
    if (e.target === memeModal) {
      memeModal.style.display = "none";
    }
  });

  newMemeBtn.addEventListener("click", function() {
    memeImg.src = getRandomMeme();
  });

  // Game elements
  const box = document.getElementById('box');
  const scoreDisplay = document.getElementById('score');
  const timerDisplay = document.getElementById('timer');
  const startBtn = document.getElementById('start-btn');
  const gameArea = document.getElementById('game-area');

  let score = 0;
  let timeLeft = 30;
  let gameInterval;
  let timerInterval;

  function randomPosition() {
    const maxX = gameArea.clientWidth - box.clientWidth;
    const maxY = gameArea.clientHeight - box.clientHeight;
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
    box.style.left = x + 'px';
    box.style.top = y + 'px';
  }

  function boxClicked() {
    score++;
    scoreDisplay.textContent = 'Score: ' + score;
    randomPosition();
  }

  function startGame() {
    score = 0;
    timeLeft = 30;
    scoreDisplay.textContent = 'Score: 0';
    timerDisplay.textContent = 'Time: 30s';
    startBtn.disabled = true;
    box.style.display = 'block';

    box.addEventListener('click', boxClicked);

    gameInterval = setInterval(randomPosition, 1000);
    timerInterval = setInterval(() => {
      timeLeft--;
      timerDisplay.textContent = 'Time: ' + timeLeft + 's';
      if (timeLeft <= 0) endGame();
    }, 1000);
  }

  function endGame() {
    clearInterval(gameInterval);
    clearInterval(timerInterval);
    box.style.display = 'none';
    startBtn.disabled = false;
    scoreDisplay.textContent = 'Score: 0';
    timerDisplay.textContent = 'Time: 30s';
    box.removeEventListener('click', boxClicked);
  }

  startBtn.addEventListener('click', startGame);

  // Add project-active class to body
  const projectLink = document.querySelector('nav a[href="projects.html"]');
  projectLink.addEventListener("click", function () {
    console.log("Projects link clicked");
    document.body.classList.add("project-active");
  });

  // Random Quote Generator Modal elements
  const quoteModal = document.getElementById("quote-modal");
  if (quoteModal) {
    console.log("quote-modal found:", quoteModal); // Debug log
    const viewQuoteBtn = document.getElementById("view-quote");
    const quoteText = document.getElementById("quote-text");
    const quoteBtn = document.getElementById("quote-btn");

    if (viewQuoteBtn && quoteText && quoteBtn) {
      // Scope the querySelector to the quoteModal
      const quoteCloseBtn = quoteModal.querySelector(".close");
      if (!quoteCloseBtn) {
        console.error("The close button for the Random Quote Generator modal is missing.");
        console.log("quote-modal innerHTML:", quoteModal.innerHTML); // Debug log
        return;
      }

      console.log("quoteCloseBtn found:", quoteCloseBtn); // Debug log
      const quotes = [
        "The best way to predict the future is to invent it.",
        "Life is 10% what happens to us and 90% how we react to it.",
        "Success is not the key to happiness. Happiness is the key to success.",
        "Your time is limited, so don't waste it living someone else's life."
      ];

      function getRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];
      }

      viewQuoteBtn.addEventListener("click", function(e) {
        e.preventDefault();
        quoteText.textContent = "Click the button to get a quote!";
        quoteModal.style.display = "block";
      });

      quoteCloseBtn.addEventListener("click", function() {
        quoteModal.style.display = "none";
      });

      window.addEventListener("click", function(e) {
        if (e.target === quoteModal) {
          quoteModal.style.display = "none";
        }
      });

      quoteBtn.addEventListener("click", function() {
        quoteText.textContent = getRandomQuote();
      });
    } else {
      console.error("One or more elements for the Random Quote Generator modal are missing.");
    }
  } else {
    console.error("The Random Quote Generator modal does not exist in the DOM.");
  }

}); // DOMContentLoaded
