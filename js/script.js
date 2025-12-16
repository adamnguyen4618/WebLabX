console.log("Welcome to WebLabX! 🚀");
document.addEventListener("DOMContentLoaded", function() {

    const cssModal = document.getElementById("css-animation-modal");
    const viewCSSBtn = document.getElementById("view-css-animation");
    const cssCloseBtn = cssModal?.querySelector(".close");
  
    // Open modal
    if (viewCSSBtn) {
      viewCSSBtn.addEventListener("click", function(e){
        e.preventDefault();
        if (cssModal) cssModal.style.display = "block";
      });
    }
  
    // Close modal on X
    if (cssCloseBtn) {
      cssCloseBtn.addEventListener("click", function(){
        if (cssModal) cssModal.style.display = "none";
      });
    }
  
    // Close modal if click outside
    window.addEventListener("click", function(e){
      if(e.target === cssModal){
        if (cssModal) cssModal.style.display = "none";
      }
    });
  
    const viewMiniGameBtn = document.getElementById("view-mini-game");
    if (viewMiniGameBtn) {
      viewMiniGameBtn.addEventListener("click", (e) => {
        e.preventDefault();
        // open Mini JS Game modal
        const modal = document.getElementById("mini-game-modal");
        if (modal) modal.style.display = "block";
      });
    }

    const cssViewBtn = document.getElementById("view-css");
    const allCloseBtns = document.querySelectorAll(".close");

    // Open CSS modal
    if (cssViewBtn) {
      cssViewBtn.addEventListener("click", function(e) {
        e.preventDefault();
        if (cssModal) cssModal.style.display = "block";
      });
    }

    // Close modal when X is clicked
    allCloseBtns.forEach(btn => {
      btn.addEventListener("click", function() {
        const modal = btn.closest(".modal");
        if (modal) modal.style.display = "none";
      });
    });

    // Close modal when clicking outside of it
    window.addEventListener("click", function(e) {
      if (e.target.classList.contains("modal")) {
        e.target.style.display = "none";
      }
    });

    // --- Meme Generator ---
    const memeModal = document.getElementById("meme-modal");
    const viewMeme = document.getElementById("view-meme");
    const memeImg = document.getElementById("meme-img");
    const memeBtn = document.getElementById("new-meme-btn");

    // Check if meme elements exist
    if (memeModal && viewMeme && memeImg && memeBtn) {
        const memeClose = memeModal.querySelector(".close");
        
        if (memeClose) {
            const memes = [
                "https://i.imgflip.com/30b1gx.jpg",
                "https://i.imgflip.com/1bij.jpg",
                "https://i.imgflip.com/26am.jpg"
            ];

            viewMeme.addEventListener("click", e => {
                e.preventDefault();
                memeModal.style.display = "block";
                memeImg.src = memes[Math.floor(Math.random() * memes.length)];
            });

            memeBtn.addEventListener("click", () => {
                memeImg.src = memes[Math.floor(Math.random() * memes.length)];
            });

            memeClose.addEventListener("click", () => memeModal.style.display = "none");
        }
    }
});

