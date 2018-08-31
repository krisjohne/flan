console.log("script.js is running...");

let numberTag = document.querySelector("#number");
let dropResult = document.querySelector("#drop-result");

const button = document.querySelector("#button");

let initial_num = Number(numberTag.innerHTML)
console.log(initial_num);

function add_to_numberTag() {
  let addend = document.forms["myForm"]["add"].value;
  addend = Number(addend);
  console.log(addend);

  let sum = addend + initial_num;
  numberTag.innerHTML = sum;
}

function show_dropdown_result() {
  let selected_value = document.forms["myForm"]["dropdown"].value;

  if (selected_value == "1") {
    dropResult.innerHTML = "1 was selected";
  } else if (selected_value == "2") {
    dropResult.innerHTML = "2 was selected";
  }

}

button.addEventListener('click', e => {
  console.log("button clicked");
  add_to_numberTag();
  show_dropdown_result();
});
