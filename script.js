function openDropdown(){
    const moreDropdown = document.querySelector('#menu__dropdown');
    moreDropdown.style.display = 'flex';
    moreDropdown.style.flexDirection = 'column';
    moreDropdown.style.alignItems = 'flex-start';
}

function closeDropdown(){
    const moreDropdown = document.querySelector('#menu__dropdown');
    moreDropdown.style.display = 'none';
}

document.getElementById("open-map").addEventListener("click", function () {
    document.getElementById("mapPopUp").style.display = "flex";
    document.documentElement.scrollTop = document.documentElement.scrollHeight;
    document.getElementById("focus").focus();
});

document.getElementById("close-map").addEventListener("click", function () {
    document.getElementById("mapPopUp").style.display = "none";
});



const emailInput = document.querySelector('#email');
const emailError = document.querySelector('#errorMsg');

emailInput.addEventListener('input', () => {
  const emailPattern = /^[^\s@]+@[^\s@]+/;

  emailError.style.display = emailPattern.test(emailInput.value) || emailInput.value === '' ? 'none' : 'block';
});
