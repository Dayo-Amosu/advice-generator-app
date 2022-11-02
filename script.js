const adviceText = document.querySelector("#advice-text");
const adviceId = document.querySelector("#advice-id");
const generateBtn = document.querySelector("#generate-btn");
const url = "https://api.adviceslip.com/advice";

async function getAdvice(){
    const res = await fetch(url);
    const { slip: { id, advice } } = await res.json();
    adviceId.innerText = id;
    adviceText.innerText = advice;
}

getAdvice()

generateBtn.addEventListener("click", getAdvice)
