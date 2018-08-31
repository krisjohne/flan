console.log("script.js is running...");

let numberTag = document.querySelector("#number");
const button = document.querySelector("#button");

let num = Number(numberTag.innerHTML)
console.log(num);

function myFunction() {
  let x = document.forms["myForm"]["add"].value;
  x = Number(x);
  console.log(x);

  num = x + num;
  numberTag.innerHTML = num;
}

button.addEventListener('click', e => {
  console.log("button clicked");
  myFunction();
});
