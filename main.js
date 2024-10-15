// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', () => {
  const hearts = document.querySelectorAll('.like-glyph');
  const errorModal = document.getElementById('modal');
  const errorMessage = document.getElementById('modal-message');

  // Add click event listener to each heart
  hearts.forEach(heart => {
    heart.addEventListener('click', () => {
      mimicServerCall()
        .then(() => {
          if (heart.textContent === EMPTY_HEART) {
            heart.textContent = FULL_HEART;
            heart.classList.add('activated-heart');
          } else {
            heart.textContent = EMPTY_HEART;
            heart.classList.remove('activated-heart');
          }
        })
        .catch((error) => {
          // Show the error modal and display error message
          errorMessage.textContent = error;
          errorModal.classList.remove('hidden');
          
          // Hide the error modal after 3 seconds
          setTimeout(() => {
            errorModal.classList.add('hidden');
          }, 3000);
        });
    });
  });
});



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
