// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

function main() {
  const hearts = document.querySelectorAll('.like-glyph');
  hearts.forEach(heart => {
    heart.addEventListener('click', likeFunction);
  });
}
function likeFunction(e) {
  const heart = e.target;
  mimicServerCall()
    .then(resp => {
      if (heart.textContent === FULL_HEART) {
        resp = "you notified the server that you disliked the post";
        alert(resp);
        heart.innerText = EMPTY_HEART;
        heart.classList.remove("activated-heart");
      } else {
        resp = "you notified the server that you liked the post";
        alert(resp);
        heart.innerText = FULL_HEART;
        heart.classList.add('activated-heart')
      }
    }).catch(err => {
      setTimeout(function () {
        errModel.className = "hidden";
      }, 3000);
      const errModel = document.getElementById('modal');
      const p = errModel.querySelector('p');
      p.textContent = err;
      errModel.classList.remove("hidden");
    })

}
main();



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      console.log(isRandomFailure);
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
