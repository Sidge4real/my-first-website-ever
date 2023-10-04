// script like-button
// let likeBtn = document.querySelector("#like");
// let aantalLikes = document.querySelector("#aantalLikes");

// likeBtn.addEventListener("click", verhoogLikes);

// function verhoogLikes(){
//     aantalLikes += 1;
//     console.log(aantalLikes); //werkt
//     alert(aantalLikes); //werkt
//     aantalLikes.textContent++;
// }


const likeBtn = document.querySelector(".like__btn");
let likeIcon = document.querySelector("#icon"),
  count = document.querySelector("#count");

let clicked = false;


likeBtn.addEventListener("click", () => {
  if (!clicked) {
    clicked = true;
    likeIcon.innerHTML = `<i class="fas fa-heart"></i>`;
    count.textContent++;
  } else {
    clicked = false;
    likeIcon.innerHTML = `<i class="far fa-heart"></i>`;
    count.textContent--;
  }
});