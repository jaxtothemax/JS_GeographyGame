const readline = require('readline-sync');

const countryAndCityArray = {
  "Slovenia":"Ljubljana", 
  "Croatia":"Zagreb", 
  "Serbia":"Belgrade", 
  "Spain":"Madrid", 
  "Austria":"Vienna", 
  "Hungary":"Budapest", 
  "Italy":"Rome", 
  "UK":"London", 
  "Slovakia":"Bratislava", 
  "Germany":"Berlin", 
  "Portugal":"Lisboa", 
  "Norway":"Oslo", 
  "Sweden":"Stockholm", 
  "Denmark":"Copenhagen", 
  "Russia":"Moscow", 
  "Japan":"Tokyo", 
  "Finland":"Helsinki",
  "China":"Beijing", 
  "India":"New Delhi" };

while (true) {
let countryKeys = Object.keys(countryAndCityArray);
let randomCountry = countryKeys[Math.round(Math.random() * countryKeys.length)];
let capitalCity = readline.question(`What's the capital city of ${randomCountry}: `);


const getKeyByValue = (object, value) => {
  // key are actual keys object[key] are values
  if (Object.keys(object).some(key => value === object[key] && randomCountry === key)) {
    console.log("That's correct!");
  } else {
    console.log("idiot");
  };
      
}
getKeyByValue(countryAndCityArray, capitalCity);

}
