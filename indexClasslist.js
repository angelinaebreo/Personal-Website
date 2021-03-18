document.addEventListener("DOMContentLoaded", () => {
    getFunFact();
revealSnowman();
revealRps();
revealJourney();
revealPokemon();

    
// let formspree = document.querySelector('input[type="submit"]')
//    formspree.addEventListener("submit", (e) => {
//      e.preventDefault()
//    })
  });
  



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


  



  function revealSnowman() {
    const snowmancard = document.querySelector("#snowmaninfo");
    const snowmantitle = document.querySelector("#snowmanouter");
    const snowmansubtitle = document.querySelector("#snowmaninner");

    snowmancard.addEventListener("mouseenter", () => {
      snowmantitle.classList.add("hide");
      if (snowmansubtitle.classList.contains("hide")) {
        snowmansubtitle.classList.remove("hide");
      } else if (snowmansubtitle.classList.value === "") {
        snowmansubtitle.classList.add("hide");
      }
    });

    snowmancard.addEventListener("mouseleave", () => {
      snowmantitle.classList.remove("hide");
      if (snowmansubtitle.classList.contains("hide")) {
        snowmansubtitle.classList.remove("hide");
      } else if (snowmansubtitle.classList.value === "") {
        snowmansubtitle.classList.add("hide");
      }
    });
  }


  function revealRps() {
    const rpscard = document.querySelector("#rpsinfo");
    const rpstitle = document.querySelector("#rpsouter");
    const rpssubtitle = document.querySelector("#rpsinner");

    rpscard.addEventListener("mouseenter", () => {
      rpstitle.classList.add("hide");
      if (rpssubtitle.classList.contains("hide")) {
        rpssubtitle.classList.remove("hide");
      } else if (rpssubtitle.classList.value === "") {
        rpssubtitle.classList.add("hide");
      }
    });

    rpscard.addEventListener("mouseleave", () => {
      rpstitle.classList.remove("hide");
      if (rpssubtitle.classList.contains("hide")) {
        rpssubtitle.classList.remove("hide");
      } else if (rpssubtitle.classList.value === "") {
        rpssubtitle.classList.add("hide");
      }
    });
  }





  function revealJourney() {
    const journeycard = document.querySelector("#journeyinfo");
    const journeytitle = document.querySelector("#journeyouter");
    const journeysubtitle = document.querySelector("#journeyinner");

    journeycard.addEventListener("mouseenter", () => {
      journeytitle.classList.add("hide");
      if (journeysubtitle.classList.contains("hide")) {
        journeysubtitle.classList.remove("hide");
      } else if (journeysubtitle.classList.value === "") {
        journeysubtitle.classList.add("hide");
      }
    });

    journeycard.addEventListener("mouseleave", () => {
      journeytitle.classList.remove("hide");
      if (journeysubtitle.classList.contains("hide")) {
        journeysubtitle.classList.remove("hide");
      } else if (journeysubtitle.classList.value === "") {
        journeysubtitle.classList.add("hide");
      }
    });
  }



  function revealPokemon() {
    const pokecard = document.querySelector("#pokecardinfo");
    const poketitle = document.querySelector("#pokecardouter");
    const pokesubtitle = document.querySelector("#pokecardinner");

    pokecard.addEventListener("mouseenter", () => {
      poketitle.classList.add("hide");
      if (pokesubtitle.classList.contains("hide")) {
        pokesubtitle.classList.remove("hide");
      } else if (pokesubtitle.classList.value === "") {
        pokesubtitle.classList.add("hide");
      }
    });

    pokecard.addEventListener("mouseleave", () => {
      poketitle.classList.remove("hide");
      if (pokesubtitle.classList.contains("hide")) {
        pokesubtitle.classList.remove("hide");
      } else if (pokesubtitle.classList.value === "") {
        pokesubtitle.classList.add("hide");
      }
    });
  }