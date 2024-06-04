/* eslint-disable */
import "bootstrap";
import "./style.css";

let entity = [
  " My dog",
  "My cat",
  "A Bear",
  "A squirrel",
  "The mailman",
  "My Grandma",
  "A tiger",
  "A mountain lion",
  "Ryan Reynolds",
  "My girlfriend"
];

const chosenEntity = chooseRandomItem(entity);

let action = [
  "destroyed",
  "kicked",
  "punched",
  "stalked",
  "slapped",
  "smacked",
  "burned",
  "incinerated",
  "broke",
  "ate",
  "bit"
];

const chosenAction = chooseRandomItem(action);

let object = [
  "my house",
  "my apartment",
  "my car",
  "my dog",
  "my cat",
  "my dishwasher",
  "my grandpa",
  "my brother",
  "my mom"
];

const chosenObject = chooseRandomItem(object);

const newHeader = `I'm sorry I'm late but what happened was, ${chosenEntity} ${chosenAction} ${chosenObject}.`;

const h1 = document.querySelector("h1");

h1.textContent = newHeader;

function chooseRandomItem(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}
