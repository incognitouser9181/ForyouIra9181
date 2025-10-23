document.addEventListener('DOMContentLoaded', () => {
  const letterImage = document.querySelector('.letter-image');
  const body = document.body;
  const surpriseBtn = document.getElementById('surprise-btn');
  let clickCount = 0;

  if (letterImage) {
    letterImage.addEventListener('click', () => {
      if (clickCount === 0) {
        // First click: open envelope
        letterImage.classList.add('opened');
        clickCount = 1;
      } else if (clickCount === 1) {
        // Second click: show message
        body.classList.add('love-revealed');
        clickCount = 2;
      }
    });
  }

  // When button clicked → open Facebook link
  if (surpriseBtn) {
    surpriseBtn.addEventListener('click', () => {
      window.open("https://www.facebook.com/share/p/1BNnorBwuB/", "_blank");
    });
  }
});