// NAV drop down script
function openDropdown() {
  const moreDropdown = document.querySelector("#menu__dropdown");
  moreDropdown.style.display = "flex";
  moreDropdown.style.flexDirection = "column";
  moreDropdown.style.alignItems = "flex-start";
}

function closeDropdown() {
  const moreDropdown = document.querySelector("#menu__dropdown");
  moreDropdown.style.display = "none";
}

// Pop-up script
document.getElementById("open-map").addEventListener("click", function () {
  document.getElementById("mapPopUp").style.display = "flex";
  document.documentElement.scrollTop = document.documentElement.scrollHeight;
  document.getElementById("focus").focus();
});

document.getElementById("close-map").addEventListener("click", function () {
  document.getElementById("mapPopUp").style.display = "none";
});

// Error msg script
const emailInput = document.querySelector("#email");
const fnameInput = document.querySelector("#fname");
const lnameInput = document.querySelector("#lname");
const emailError = document.querySelector("#emailErrorMsg");
const fnameError = document.querySelector("#fnameErrorMsg");
const lnameError = document.querySelector("#lnameErrorMsg");

const validateEmail = () => {
  const emailPattern = /^[^\s@]+@[^\s@]+/;
  emailError.style.display =
    emailPattern.test(emailInput.value) || emailInput.value === ""
      ? "none"
      : "block";
};

const validateName = (input, errorElement) => {
  const namePattern = /^[a-zA-Z]+$/;
  errorElement.style.display =
    namePattern.test(input.value) || input.value === "" ? "none" : "block";
};

emailInput.addEventListener("input", validateEmail);
fnameInput.addEventListener("input", () =>
  validateName(fnameInput, fnameError)
);
lnameInput.addEventListener("input", () =>
  validateName(lnameInput, lnameError)
);
