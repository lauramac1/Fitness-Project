const userHeight = document.querySelector("#height");
const userWeight = document.querySelector("#weight");
const calculate = document.querySelector("#calculate");
const finalBMI = document.querySelector("#finalBMI");

calculate.addEventListener("click", () => {
  if (userHeight.value != "" && userWeight.value != "") {
    let totalBMI =
      (userWeight.value / (userHeight.value * userHeight.value)) * 10000;
    finalBMI.innerHTML = `Your BMI is : ${totalBMI.toFixed(2)}`;
  } else {
    finalBMI.innerHTML = `Please Enter a Numeric Value`;
  }
});
