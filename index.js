document.addEventListener("DOMContentLoaded", () => {
  getFunFact();
  revealProject();

  const para = document.querySelector("#advice");
  para.addEventListener("mouseenter", getAdvice);
  para.addEventListener("mouseleave", () => {
    para.textContent = "Here is your daily advice: ";
  });
});

async function getAdvice(e) {
  const para = document.querySelector("#advice");
  let advice = await axios.get("https://api.adviceslip.com/advice");
  console.log(advice);
  para.textContent += advice.data.slip.advice;
}

function revealProject() {
  const cards = document.querySelectorAll(".card");
  const titles = document.querySelectorAll(".title");
  const subtitles = document.querySelectorAll(".subtitle");

  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("mouseenter", () => {
      titles[i].classList.add("hide");
      subtitles[i].classList.remove("hide");
    });

    cards[i].addEventListener("mouseleave", () => {
      titles[i].classList.remove("hide");
      subtitles[i].classList.add("hide");
    });
  }
}

function getFunFact() {
  const funFactBtn = document.querySelector("#funfactbutton");
  funFactBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const randomFactP = document.querySelector("#showfact");
    factArray = [
      "Summer is my favorite season",
      "I do not eat carrots",
      "My favorite ice cream flavor is mint chocolate chp",
      "I want to see aurora borealis",
      "I am learning Spanish",
      "I do not drink coffee",
      "I can't swim",
      "I play the piano",
    ];
    let randomFact = "";
    for (let i = 0; i < factArray.length; i++) {
      min = Math.ceil(0);
      max = Math.floor(factArray.length - 1);
      let randomN = Math.floor(Math.random() * (max - min + 1) + min);
      randomFact = factArray[randomN];
    }
    randomFactP.textContent = randomFact;
  });
}
