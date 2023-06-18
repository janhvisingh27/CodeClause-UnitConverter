{
let kgRef = document.getElementById("kg");
let lbRef = document.getElementById("lb");
let ozRef = document.getElementById("oz");

let convertFromKg = () => {
  let kg = kgRef.value;
  lbRef.value = (kg * 2.205).toFixed(2);
  ozRef.value = (kg * 35.274).toFixed(2);
};

let convertFromLb = () => {
  let lb = lbRef.value;
  kgRef.value = (lb / 2.205).toFixed(2);
  ozRef.value = (lb * 16).toFixed(2);
};

let convertFromOz = () => {
  let oz = ozRef.value;
  kgRef.value = (oz / 35.274).toFixed(2);
  lbRef.value = (oz / 16).toFixed(2);
};

kgRef.addEventListener("input", convertFromKg);
lbRef.addEventListener("input", convertFromLb);
ozRef.addEventListener("input", convertFromOz);
window.addEventListener("load", convertFromKg);
}
{
let mRef = document.getElementById("m");
let ftRef = document.getElementById("ft");
let inRef = document.getElementById("inch");

let convertFromMet = () => {
  let m = mRef.value;
  ftRef.value = (m * 3.280).toFixed(2);
  inRef.value = (m * 39.307).toFixed(2);
};

let convertFromFeet = () => {
  let ft = ftRef.value;
  mRef.value = (ft / 3.280).toFixed(2);
  inRef.value = (ft * 12).toFixed(2);
};

let convertFromInch = () => {
  let inch = inRef.value;
  mRef.value = (inch / 39.37).toFixed(2);
  ftRef.value = (inch / 12).toFixed(2);
};

mRef.addEventListener("input", convertFromMet);
ftRef.addEventListener("input", convertFromFeet);
inRef.addEventListener("input", convertFromInch);
window.addEventListener("load", convertFromMet);
}
{
let hrRef = document.getElementById("hr");
let minRef = document.getElementById("mins");
let secRef = document.getElementById("sec");

let convertFromHrs = () => {
  let hr = hrRef.value;
  minRef.value = (hr *60).toFixed(2);
  secRef.value = (hr * 3600).toFixed(2);
};

let convertFromMins = () => {
  let mins = minRef.value;
  hrRef.value = (mins / 60).toFixed(2);
  secRef.value = (mins * 60).toFixed(2);
};

let convertFromSec = () => {
  let sec= secRef.value;
  hrRef.value = (sec / 3600).toFixed(2);
  minRef.value = (sec / 60).toFixed(2);
};

hrRef.addEventListener("input", convertFromHrs);
minRef.addEventListener("input", convertFromMins);
secRef.addEventListener("input", convertFromSec);
window.addEventListener("load", convertFromHrs);
}