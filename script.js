console.log("script.js is running...");

// variables of stuff
const submitButton = document.getElementById("submit-button");

// functions
// returns average time til expiration for the item
function avg_expiration(item) {
  if (item == "apple") {
    return 14; // 2 weeks
  } // TODO: add more items
}

// returns average consumption per day for a single person
function avg_consumption(item) {
  if (item == "apple") {
    return 1; // An apple a day keeps the doctor away
  } // TODO: add more items
}

// the big one
function calculate_viability() {
  let numberOfPeople = document.forms["info"]["number-of-people"].value;
  let item = document.forms["info"]["item"].value;
  let amountOfItem = document.forms["info"]["amount-of-item"].value;
  numberOfPeople = Number(numberOfPeople);
  amountOfItem = Number(amountOfItem);

  console.log("ppl: " + numberOfPeople);
  console.log("itm: " + item);
  console.log("amt: " + amountOfItem);

  let expiration = avg_expiration(item);
  let consumption = avg_consumption(item);

  // Time to do some math
  itemPerPerson = amountOfItem / numberOfPeople;
  itemPerDay = itemPerPerson / expiration;
  roundedItemPerDay = Math.ceil(itemPerDay);

  // printing stuff to console
  console.log("item per person: " + itemPerPerson);
  console.log("item per day: " + itemPerDay);
  console.log("average time til exp: " + expiration);
  console.log("average consumption per day: " + consumption);
  console.log("rounded item per day: " + roundedItemPerDay);

  // If person eats less than or equal to average consumption per day by expiration date, GREEN
  if (0 < itemPerDay && itemPerDay <= consumption) {
    console.log("viability: GREEN");
  }
  // If person eats less than double average consumption per day by expiration date, YELLOW
  else if (itemPerDay <= (2*consumption)) {
    console.log("viability: YELLOW");
  }
  // Person eats more than double average consumption per day by expiration date, RED
  else {
    console.log("viability: RED");
  }
}

// Does the thing when "Submit" is clicked
submitButton.addEventListener('click', e => {
  calculate_viability();
});
