const cardFooter = document.getElementsByClassName('card-footer');
Array.from(cardFooter).forEach(e => {
  e.innerHTML += `<div class="share"><img src="assets/icon-share.svg" alt=""><p>275</p></div>`;
  e.innerHTML += `<div class="views"><img src="assets/icon-views.svg" alt=""><p>275</p></div>`;
  e.innerHTML += `<div class="comments"><img src="assets/icon-comments.svg" alt=""><p>12</p></div>`;
})
