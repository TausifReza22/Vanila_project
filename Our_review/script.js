let arr = [
    {
        id: 1,
        image: "image/robert.webp",
        name:"Robert Downey jr",
        job:"Actor of Marvel Cinematic",
        description:"Robert John Downey Jr. (born April 4, 1965)[1] is an American actor. His films as a leading actor have grossed over $14 billion worldwide, making him one of the highest-grossing actors of all time. Downey's career has been characterized by some early success"

    },
      {
        id: 2,
        image: "image/chris.webp",
        name:"Chris Hemsworth",
        job:"Lead Actor",
        description:"Christopher Hemsworth AM (born 11 August 1983) is an Australian actor. He rose to prominence playing Kim Hyde in the Australian television series Home and Away (2004–2007) before beginning a film career in Hollywood. In the Marvel Cinematic Universe (MCU), Hemsworth starred as Thor in the 2011 film of the same name and reprised the role in several films, including in Thor: Love and Thunder (2022)"

    },
      {
        id: 3,
        image: "image/emiwatson.jpeg",
        name:"Ema Watson",
        job:"Actress",
        description:"Emma Charlotte Duerre Watson (born 15 April 1990) is an English actress. Known for her roles in both blockbusters and independent films, she has received a selection of accolades, including a Young Artist Award and three MTV Movie Awards. Watson has been ranked among the world's highest-paid actresses by Forbes and Vanity Fair, and was named one of the 100 most influential people in the world by Time magazine in 2015"

    },
]


const photo = document.querySelector("#person-img");

// console.log(photo)
const author = document.querySelector(".name");
// console.log(author)
const job = document.querySelector(".job");
const info = document.querySelector(".description");

const left = document.querySelector(".left");
const right = document.querySelector(".right");
const random = document.querySelector(".random")


let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {

  showPerson();
});



function showPerson() {
  const item = arr[currentItem];
  photo.src = item.image;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.description;
}



right.addEventListener("click", () => {
  currentItem++;
  if (currentItem > arr.length - 1) {
    currentItem = 0;
  }
  showPerson();
});



left.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = arr.length - 1;
  }
  showPerson();
});


random.addEventListener("click", () => {
  currentItem = Math.floor(Math.random() * arr.length);
  showPerson();

  console.log(currentItem);
});