const infoSubmit = document.querySelector(".info-submit");
const infoDetail = document.querySelector(".info-detail");
const emailInput = document.querySelector("#email");
const moreInfo = document.querySelector(".more-info");
const submitBtn = document.querySelector(".submit-btn");
const workBtns = document.querySelectorAll(".work-btn");

submitBtn.addEventListener("click", validateEmail);

workBtns.forEach(btn => {
  btn.addEventListener("click", function() {
    viewWorkDetail(btn);
  });
});

// FUNCTIONS

// When clicking submit button,
// it shows detail information if the email is valid
// it shows an alert to re-submit if not valid
function validateEmail(event) {
  event.preventDefault();
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;

  if (emailRegex.test(emailInput.value)) {
    infoSubmit.classList.add("hidden");
    infoDetail.classList.remove("hidden");
    console.log("Valid email");
  } else {
    moreInfo.textContent = "Email không hợp lệ, vui lòng nhập lại!";
    moreInfo.style.color = "red";
    console.log("Invalid email");
  }
}

// When clicking "View More" button,
// it shows the details and change the button into "View Less"
// When clicking "View Less" button.
// it hides the details and change the button into "View more"
function viewWorkDetail(btn) {
  // Find the parent's class of the button
  // Stop the function if not found the parent
  const parentWorkBtn = btn.closest(".work-detail");
  if (!parentWorkBtn) {
    console.log("Can't find work-detail parent class");
    return;
  }

  /* If found, find the details's class*/
  const workDetail = parentWorkBtn.querySelector('[class*="detail"]');
  const btnText = btn.querySelector("span");
  const btnIcon = btn.querySelector("i");

  /* Stop the function if not found the details */
  if (!workDetail) {
    console.log("Can't find details class");
    return;
  }
  /* Hide/ Reveal if found */
  workDetail.classList.toggle("hidden");
  btnIcon.classList.toggle("icon-up-dir");
  btnIcon.classList.toggle("icon-down-dir");
  if (workDetail.classList.contains("hidden")) {
    btnText.textContent = "View More";
  } else {
    btnText.textContent = "View Less";
  }
}
