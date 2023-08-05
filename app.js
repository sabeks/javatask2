function isPersonalNumberValid() {
  if (personalNumber.value.trim() === "") {
    personalNumber.classList.remove("correct");
    personalNumber.classList.add("error");
    personalNumberError.innerText = "personal number is required";
    return false;
  } else if (!/^\d+$/.test(personalNumber.value)) {
    personalNumber.classList.remove("correct");
    personalNumber.classList.add("error");
    personalNumberError.innerText = "personal number must be only numbers";
    return false;
  } else if (personalNumber.value.length !== 11) {
    personalNumber.classList.remove("correct");
    personalNumber.classList.add("error");
    personalNumberError.innerText = "personalNumber must be 11 charachter";
    return false;
  } else {
    personalNumber.classList.add("correct");
    personalNumber.classList.remove("error");
    personalNumberError.innerText = "";
    return true;
  }
}

function isMobileNumberValid() {
  if (mobileNumber.value.trim() === "") {
    mobileNumber.classList.remove("correct");
    mobileNumber.classList.add("error");
    mobileNumberError.innerText = "required";
    return false;
  } else if (!/^\d+$/.test(mobileNumber.value)) {
    mobileNumber.classList.remove("correct");
    mobileNumber.classList.add("error");
    mobileNumberError.innerText = "mobile number must be only numbers";
    return false;
  } else if (mobileNumber.value.length !== 9) {
    mobileNumber.classList.remove("correct");
    mobileNumber.classList.add("error");
    mobileNumberError.innerText = "must be 9 charachter";
    return false;
  } else {
    mobileNumber.classList.add("correct");
    mobileNumber.classList.remove("error");
    mobileNumberError.innerText = "";
    return true;
  }
}

function isJobValid() {
  if (jobDescription.value.length >= 50) {
    jobDescription.classList.remove("correct");
    jobDescription.classList.add("error");
    jobDescriptionError.innerText = "must not be more than 50 charachter";
    return false;
  } else {
    jobDescription.classList.add("correct");
    jobDescription.classList.remove("error");
    jobDescriptionError.innerText = "";
    return true;
  }
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const isIdValid = isPersonalNumberValid();
  const isPhoneValid = isMobileNumberValid();
  const isJObValid = isJobValid();
  if (isIdValid && isPhoneValid && isJObValid) {
    form.reset();
    inputs.forEach((el) => el.classList.remove("correct"));
    modalAction("#sign-up-modal");
  }
});
