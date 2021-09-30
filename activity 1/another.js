// user inputs
var designation = document.getElementById("designation");
var daysPresent = document.getElementById("dayPresent");
var computePayment = document.getElementById("compute");
// display results
var monthly = document.getElementById("monthly");
var daily = document.getElementById("daily");
var hourly = document.getElementById("hourly");
var grossPay = document.getElementById("grossPay");
var netPay = document.getElementById("netPay");
// statury variables
var hmdf = document.getElementById("hmdf");
var philHealth = document.getElementById("philhealth");
var sss = document.getElementById("sss");
var totalDeduction = document.getElementById("totalDeduction");

function checkSSS(grossPay) {
  let grossPayInt = parseFloat(grossPay.value.slice(1));
  if (grossPayInt >= 19750) {
    sss.value = `₱ 900`;
  } else if (grossPayInt >= 19250 && grossPayInt <= 19749.99) {
    sss.value = `₱ 877.5`;
  } else if (grossPayInt >= 18750 && grossPayInt <= 19249.99) {
    sss.value = `₱ 855`;
  } else if (grossPayInt >= 18250 && grossPayInt <= 18749.99) {
    sss.value = `₱ 832`;
  } else if (grossPayInt >= 17750 && grossPayInt <= 18249.99) {
    sss.value = `₱ 810`;
  } else if (grossPayInt >= 17250 && grossPayInt <= 17749.99) {
    sss.value = `₱ 787.50`;
  } else if (grossPayInt >= 16750 && grossPayInt <= 17249.99) {
    sss.value = `₱ 765`;
  } else if (grossPayInt >= 16250 && grossPayInt <= 16749.99) {
    sss.value = `₱ 742.50`;
  } else if (grossPayInt >= 15750 && grossPayInt <= 16249.99) {
    sss.value = `₱ 720`;
  } else if (grossPayInt >= 15250 && grossPayInt <= 15749.99) {
    sss.value = `₱ 697.50`;
  } else if (grossPayInt >= 14750 && grossPayInt <= 15249.99) {
    sss.value = `₱ 675`;
  } else if (grossPayInt >= 14250 && grossPayInt <= 14749.99) {
    sss.value = `₱ 652.50`;
  } else if (grossPayInt >= 13750 && grossPayInt <= 14249.99) {
    sss.value = `₱ 630`;
  } else if (grossPayInt >= 13250 && grossPayInt <= 13749.99) {
    sss.value = `₱ 607.50`;
  } else if (grossPayInt >= 12750 && grossPayInt <= 13249.99) {
    sss.value = `₱ 585`;
  } else if (grossPayInt >= 12250 && grossPayInt <= 12749.99) {
    sss.value = `₱ 562.50`;
  } else if (grossPayInt >= 11750 && grossPayInt <= 12249.99) {
    sss.value = `₱ 540`;
  } else if (grossPayInt >= 11250 && grossPayInt <= 11749.99) {
    sss.value = `₱ 517.50`;
  } else if (grossPayInt >= 10750 && grossPayInt <= 11249.99) {
    sss.value = `₱ 495`;
  } else if (grossPayInt >= 10250 && grossPayInt <= 10749.99) {
    sss.value = `₱ 472.50`;
  } else if (grossPayInt >= 9750 && grossPayInt <= 10249.99) {
    sss.value = `₱ 450`;
  } else if (grossPayInt >= 9250 && grossPayInt <= 9749.99) {
    sss.value = `₱ 427.50`;
  } else if (grossPayInt >= 8750 && grossPayInt <= 9249.99) {
    sss.value = `₱ 405`;
  } else if (grossPayInt >= 8250 && grossPayInt <= 8749.99) {
    sss.value = `₱ 382.50`;
  } else if (grossPayInt >= 7750 && grossPayInt <= 8249.99) {
    sss.value = `₱ 360`;
  } else if (grossPayInt >= 7250 && grossPayInt <= 7749.99) {
    sss.value = `₱ 337.50`;
  } else if (grossPayInt >= 6750 && grossPayInt <= 7249.99) {
    sss.value = `₱ 315`;
  } else if (grossPayInt >= 6250 && grossPayInt <= 6749.99) {
    sss.value = `₱ 292.50`;
  } else if (grossPayInt >= 5750 && grossPayInt <= 6249.99) {
    sss.value = `₱ 270`;
  } else if (grossPayInt >= 5250 && grossPayInt <= 5749.99) {
    sss.value = `₱ 247.50`;
  } else if (grossPayInt >= 4750 && grossPayInt <= 5249.99) {
    sss.value = `₱ 225`;
  } else if (grossPayInt >= 4250 && grossPayInt <= 4749.99) {
    sss.value = `₱ 202.50`;
  } else if (grossPayInt >= 3750 && grossPayInt <= 4249.99) {
    sss.value = `₱ 180`;
  } else if (grossPayInt >= 3250 && grossPayInt <= 3749.99) {
    sss.value = `₱ 157.50`;
  } else if (grossPayInt < 3250) {
    sss.value = `₱ 135`;
  }
}
function computePayroll() {
  switch (designation.value) {
    case "Dean":
    case "dean":
      monthly.value = `₱ 25000`;
      daily.value = `₱ 1136.36`;
      hourly.value = `₱ 142.05`;
      grossPay.value =
        "₱ " + (parseFloat(daysPresent.value) * 1136.36).toFixed(2);
      hmdf.value = `₱ 100.00`;
      philHealth.value = `₱ 200.00`;
      checkSSS(grossPay);
      totalDeduction.value =
        "₱ " +
        (parseFloat(hmdf.value.slice(1)) +
          parseFloat(philHealth.value.slice(1)) +
          parseFloat(sss.value.slice(1)));
      netPay.value =
        "₱ " +
        (
          parseFloat(grossPay.value.slice(1)) -
          parseFloat(totalDeduction.value.slice(1))
        ).toFixed(2);
      break;
    case "Program Head":
    case "program head":
      monthly.value = `₱ 20000`;
      daily.value = `₱ 909.09`;
      hourly.value = `₱ 113.64`;
      grossPay.value =
        "₱" + (parseFloat(daysPresent.value) * 909.09).toFixed(2);
      hmdf.value = `₱ 100.00`;
      philHealth.value = `₱ 200.00`;
      checkSSS(grossPay);
      totalDeduction.value =
        "₱ " +
        (parseFloat(hmdf.value.slice(1)) +
          parseFloat(philHealth.value.slice(1)) +
          parseFloat(sss.value.slice(1)));
      netPay.value =
        "₱ " +
        (
          parseFloat(grossPay.value.slice(1)) -
          parseFloat(totalDeduction.value.slice(1))
        ).toFixed(2);
      break;
    case "Assistant Professor":
    case "assistant professor":
      monthly.value = `₱ 15000`;
      daily.value = `₱ 681.82`;
      hourly.value = `₱ 85.23`;
      grossPay.value =
        "₱" + (parseFloat(daysPresent.value) * 681.82).toFixed(2);
      hmdf.value = `₱ 100.00`;
      philHealth.value = `₱ 200.00`;
      checkSSS(grossPay);
      totalDeduction.value =
        "₱ " +
        (parseFloat(hmdf.value.slice(1)) +
          parseFloat(philHealth.value.slice(1)) +
          parseFloat(sss.value.slice(1)));
      netPay.value =
        "₱ " +
        (
          parseFloat(grossPay.value.slice(1)) -
          parseFloat(totalDeduction.value.slice(1))
        ).toFixed(2);
      break;
    case "Instructor":
    case "instructor":
      monthly.value = `₱ 10000`;
      daily.value = `₱ 454.55`;
      hourly.value = `₱ 56.82`;
      grossPay.value =
        "₱" + (parseFloat(daysPresent.value) * 454.55).toFixed(2);
      hmdf.value = `₱ 100.00`;
      philHealth.value = `₱ 200.00`;
      checkSSS(grossPay);
      totalDeduction.value =
        "₱ " +
        (parseFloat(hmdf.value.slice(1)) +
          parseFloat(philHealth.value.slice(1)) +
          parseFloat(sss.value.slice(1)));
      netPay.value =
        "₱ " +
        (
          parseFloat(grossPay.value.slice(1)) -
          parseFloat(totalDeduction.value.slice(1))
        ).toFixed(2);
      break;
  }
}
