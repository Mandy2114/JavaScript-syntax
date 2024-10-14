///// Exercise 1 ////////

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

const doubled = nums.map(num => num * 2);

console.log(doubled)
///// Exercise 2 ////////

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

const [firstTopping, secondTopping] = pizzaToppings;

console.log(firstTopping);
console.log(secondTopping);
///// Exercise 3 ////////

const car = {
  make: 'Audi',
  model: 'q5',
};

const { make, model } = car;

console.log(make);
console.log(model);
///// Exercise 4 ////////

const controversialPizzaToppings = [...pizzaToppings];

console.log(controversialPizzaToppings);
///// Exercise 5 ////////

const myCar = { ...car, model: 'q7' };
///// Exercise 6 ////////

const userProfile = {};

const propertyName = 'username';
userProfile[propertyName] = 'Jane.Doe';

console.log(userProfile);
///// Exercise 7 ////////

///// Exercise 8 ////////

function describeAnimal(noun = 'cat', adjective = 'white') {
  console.log(`the ${noun} is ${adjective}`);
}

describeAnimal();
///// Exercise 9 ////////

let pizza = 'tasty';

if (pizza === 'tasty') {
  console.log('yum');
} else {
  console.log('yuck');
}

pizza === 'tasty' ? console.log('yum') : console.log('yuck');
///// Exercise 10 ////////

const localLangConfig = null;
const LANG = localLangConfig || 'English';
console.log('Language setting:', LANG);

const userSavedTheme = null;
const USER_THEME = userSavedTheme || 'light'
console.log('User theme setting:', USER_THEME);

///// Exercise 11 ////////
// Now check for `cat.age` on `adventurer`. See how it errors out? Use optional chaining in a console.log that it returns undefined instead.

const adventurer = {
  name: 'Alice',

};

let cat = adventurer.cat?.name; 

console.log(cat);
