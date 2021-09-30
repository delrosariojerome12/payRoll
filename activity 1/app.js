// picking of element for compute payment button
const computePayment = document.getElementById("compute");

// sinelect ko lahat ng element ng inputs tas nilagay ko dito isang variable /Constant na to
const allInputs = document.querySelectorAll(".box input");
const allDisplayInputs = document.querySelectorAll(".salary input");
console.log(allDisplayInputs);

// counter para malaman ng system kung kelan mag eenabled si disabled compute payment
let ctr = 0;

// yung foreach method ay parang for loop, nag run sa lahat ng sinelect
// kong input element tas binigyan ng click event para di ko na ulit ulitin
// gumamit ako dito ng arrow function na same sa regular na function pero mas makili
// yung event na binigay ko sa bawat input ay keydown at after nun ma didisable yung input na yun
allInputs.forEach((userInput) => {
  userInput.addEventListener("keydown", (e) => {
    if (e.keyCode === 13 && e.currentTarget.value !== "") {
      ctr++;
      console.log(e.currentTarget.value);
      e.currentTarget.disabled = true;
      if (ctr === 6) {
        computePayment.disabled = false;
      }
    } else {
      e.currentTarget.placeholder = "Input Should Not Be Empty!";
    }
  });
});
computePayment.addEventListener("click", () => {
  const cloneUserInputs = [...allInputs];
  let positionOrDaysContainer = cloneUserInputs.filter(
    (userInput) =>
      userInput.id === "designation" || userInput.id === "dayPresent"
  );

  switch (positionOrDaysContainer[0].value) {
    case "Dean":
    case "dean":
    case "Program Head":
    case "program head":
    case "Assistant Professor":
    case "assistant professor":
    case "Instructor":
    case "instructor":
      allDisplayInputs[5].value = `₱ 100.00`;
      allDisplayInputs[6].value = `₱ 200.00`;

    case "Dean":
    case "dean":
      allDisplayInputs[0].value = `₱ 25000`;
      allDisplayInputs[1].value = `₱ 1136.36`;
      allDisplayInputs[2].value = `₱ 142.05`;
      allDisplayInputs[3].value = `₱  ${(
        parseFloat(positionOrDaysContainer[1].value) * 1136.36
      ).toFixed(2)}`;
      break;
    case "Program Head":
    case "program head":
      allDisplayInputs[0].value = `₱ 20000`;
      allDisplayInputs[1].value = `₱ 909.09`;
      allDisplayInputs[2].value = `₱ 113.64`;
      allDisplayInputs[3].value = `₱  ${(
        parseFloat(positionOrDaysContainer[1].value) * 909.09
      ).toFixed(2)}`;
      break;
    case "Assistant Professor":
    case "assistant professor":
      allDisplayInputs[0].value = `₱ 15000`;
      allDisplayInputs[1].value = `₱ 681.82`;
      allDisplayInputs[2].value = `₱ 85.23`;
      allDisplayInputs[3].value = `₱  ${(
        parseFloat(positionOrDaysContainer[1].value) * 681.82
      ).toFixed(2)}`;
      break;
    case "Instructor":
    case "instructor":
      allDisplayInputs[0].value = `₱ 10000`;
      allDisplayInputs[1].value = `₱ 454.55`;
      allDisplayInputs[2].value = `₱ 56.82`;
      allDisplayInputs[3].value = `₱  ${(
        parseFloat(positionOrDaysContainer[1].value) * 454.55
      ).toFixed(2)}`;
      break;
  }
});
