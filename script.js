const circleToggle = document.querySelector(".theme-circle");
const themeText = document.querySelectorAll("span");
const bodyTheme = document.querySelector("body");
const displayCalc = document.querySelector("#displayCalc");
const previousOp = document.querySelector(".previous-op");
const inputs = document.querySelectorAll(".calc-btn");
const resetBtn = document.querySelector(".reset-btn");
const equalBtn = document.querySelector(".equals");

let previous = "";
// console.log(typeof previous);

inputs.forEach(function (e) {
  e.addEventListener("click", takeInput);
});

equalBtn.addEventListener("click", calculate);

function calculate() {
  if (displayCalc.value == "") return;

  previousOp.innerHTML = previous + "=";
  try {
    displayCalc.value = eval(displayCalc.value);
  } catch {
    displayCalc.value = "Error!";
    previousOp.innerHTML = "";
  }
}

function takeInput(event) {
  console.log(event.target.innerHTML);
  switch (event.target.value) {
    case "=":
      if (displayCalc.value !== "") {
        calculate();
      }
      break;

    case "DEL":
      if (displayCalc.value == "") return;
      displayCalc.value = displayCalc.value.slice(0, -1);
      break;

    default:
      displayCalc.value += event.target.value;
      previous = displayCalc.value;
    // console.log("pOP:", previous);
  }
}

resetBtn.addEventListener("click", () => {
  displayCalc.value = "";
  previousOp.innerHTML = "";
});

//console logs
// console.log("Circle: ", circleToggle);
// console.log("DisplayCalc: ", displayCalc);
// console.log("DeleteDemo: ", deleteDemo);
//Theme switcher
themeText.forEach((e) => {
  //   console.log(e.parentElement, e.parentNode);
  e.addEventListener("click", function () {
    if (e.innerHTML == 1) {
      bodyTheme.setAttribute("id", "theme-1");
      circleToggle.parentElement.style.alignItems = "flex-start";
    }
    if (e.innerHTML == 2) {
      bodyTheme.setAttribute("id", "theme-2");
      circleToggle.parentElement.style.alignItems = "center";
    }
    if (e.innerHTML == 3) {
      bodyTheme.setAttribute("id", "theme-3");
      circleToggle.parentElement.style.alignItems = "flex-end";
    }
  });
});
