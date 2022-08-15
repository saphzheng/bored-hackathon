const form = document.querySelector(".bored-form--activity");
const outputContainer = document.querySelector(".result");
const output = document.querySelector(".result__text");
const buttonYes = document.querySelector(".result__button--yes");
const buttonNo = document.querySelector(".result__button--no");
const friendsInput = document.querySelector(".bored-form__input--num");
const errorMessage = document.querySelector(".error-message");
const successMessage = document.querySelector(".success__message");

function handleSubmit(event) {
    event.preventDefault();

    friendsInput.classList.remove("bored-form__input--error");
    errorMessage.style.display = "none";
    
    const numParticipants = event.target.participants.value;

    axios.get("http://www.boredapi.com/api/activity/?participants=" + numParticipants).then((response) => {
        result = response.data.type;
        event.target.participants.value = "1";

        if (!result) {
            friendsInput.classList.add("bored-form__input--error");
            errorMessage.style.display = "block";
        } else {
            output.innerText="";
            output.innerText = response.data.activity;;

            outputContainer.style.display = "block";
            form.style.display = "none";
        }
       
    }) 
}

function handleNo(event) {
    outputContainer.style.display = "none";
    form.style.display = "flex";
    successMessage.style.display = "none";
}

function handleYes(event) {
    successMessage.style.display = "block";
}

form.addEventListener("submit", handleSubmit);
buttonNo.addEventListener("click", handleNo);
buttonYes.addEventListener("click", handleYes);