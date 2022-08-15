const jokeForm = document.querySelector(".bored-form--joke");
const outputContainer = document.querySelector(".result");
const questionContainer = document.querySelector(".result__question");
const punchlineContainer = document.querySelector(".result__punchline");
const buttonYes = document.querySelector(".result__button--yes");
const buttonNo = document.querySelector(".result__button--no");
const errorMessage = document.querySelector(".error-message");
const successMessage = document.querySelector(".success__message");

function handleJoke(event) {
    event.preventDefault();

    axios.get("https://backend-omega-seven.vercel.app/api/getjoke").then((response) => {
        console.log(response);
        questionContainer.innerText = response.data[0].question;
        punchlineContainer.innerText = "";

        outputContainer.style.display = "block";
        jokeForm.style.display = "none";
        buttonNo.style.display = "none";
        buttonYes.style.display = "none";

        setTimeout(() => {
            punchlineContainer.innerText = response.data[0].punchline;
            buttonNo.style.display = "inline-block";
            buttonYes.style.display = "inline-block";
        }, 5000);
    })
}

function handleNo(event) {
    outputContainer.style.display = "none";
    jokeForm.style.display = "flex";
    successMessage.style.display = "none";
}

function handleYes(event) {
    successMessage.style.display = "block";
}

jokeForm.addEventListener("submit", handleJoke);
buttonNo.addEventListener("click", handleNo);
buttonYes.addEventListener("click", handleYes);