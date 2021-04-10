// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const errorBanner = document.querySelector('#modal')

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', () => {
  errorBanner.classList.add("hidden")
  const likeHearts = document.querySelectorAll(".like-glyph")
  for (const glyph of likeHearts){
    glyph.addEventListener('click', handleHeartClick)
  }
})

function handleHeartClick(event){
  const heart = event.target
  mimicServerCall()
  .then(() => {
    if(heart.innerText === EMPTY_HEART){
      heart.innerText = FULL_HEART
      heart.classList.add("activated-heart")
    } else if(heart.innerText === FULL_HEART){
      heart.innerText = EMPTY_HEART
      heart.classList.remove("activated-heart")
    }
  })
  .catch(error => {
    errorBanner.classList.remove("hidden")
    errorBanner.innerText = error
    setTimeout(function(){errorBanner.classList.add("hidden")}, 5000)
  })
}



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
