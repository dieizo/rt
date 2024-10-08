
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");

const placeholderName = document.getElementById("name");
const placeholderEmail = document.getElementById("email");

const submitButton = document.querySelector("#submit-button");

const items = document.querySelector(".items");

submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  const nameValue = nameInput.value;
  const emailValue = emailInput.value;

  if (nameValue === "" || emailValue === "") {
    placeholderName.placeholder = "Name required";
    placeholderEmail.placeholder = "Email required";

    return;
  }

 function validatedemail (email){
  const regex=/^{^/s@}+@{^/s@}+/.{^/s@}+$/;
  return regex.test (email);

  if (passawod. length  < 6){ 
    volid =false;
    error passswordmessage. textcontent=
    "a senha deve ter pelo menos 6 caracteres.";
    errorpasswordelement.appendchild(errorpasswordmessage);
     
   }
  

 
  
 