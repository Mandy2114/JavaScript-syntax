///// Exercise 1 ////////

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

const doubled = nums.map(num => num * 2);

console.log(doubled)
console.log("Exercise 1");
///// Exercise 2 ////////

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

const [firstTopping, secondTopping] = pizzaToppings;

console.log(firstTopping);
console.log(secondTopping);
console.log("Exercise 2");
///// Exercise 3 ////////

const car = {
  make: 'Audi',
  model: 'q5',
};

const { make, model } = car;

console.log(make);
console.log(model);
console.log("Exercise 3");
///// Exercise 4 ////////

const controversialPizzaToppings = [...pizzaToppings];

console.log(controversialPizzaToppings);
console.log("Exercise 4");
///// Exercise 5 ////////
// const car = {
//   make: 'Audi',
//   model: 'q5',
// };

const myCar = { ...car, model: 'q7' };

console.log(car);
console.log(myCar);
console.log("Exercise 5");
///// Exercise 6 ////////

const userProfile = {};

const propertyName = 'username';
userProfile[propertyName] = 'Jane.Doe';

console.log(userProfile);
console.log("Exercise 6");
///// Exercise 7 ////////
console.log("Exercise 7");
///// Exercise 8 ////////

function describeAnimal(noun = 'cat', adjective = 'white') {
  console.log(`the ${noun} is ${adjective}`);
}

describeAnimal();
console.log("Exercise 8");
///// Exercise 9 ////////

let pizza = 'tasty';

if (pizza === 'tasty') {
  console.log('yum');
} else {
  console.log('yuck');
}

pizza === 'tasty' ? console.log('yum') : console.log('yuck');
console.log("Exercise 9");
///// Exercise 10 ////////

const localLangConfig = null;
const LANG = localLangConfig || 'English';
console.log('Language setting:', LANG);

const userSavedTheme = null;
const USER_THEME = userSavedTheme || 'light'
console.log('User theme setting:', USER_THEME);
console.log("Exercise 10");

///// Exercise 11 ////////

const adventurer = {
  name: 'Alice',

};

let cat = adventurer.cat?.name; 

console.log(cat);
console.log("Exercise 11");