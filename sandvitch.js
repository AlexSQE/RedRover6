// let bread = "wholeWheat bread";
// //gluten free
// let cheese = "American cheese";
// //vegan cheese
// let turkey = "Smoked turkey";
// let salmon = "Wild salmon";
// // tuna
// // chicken
// // fresh salad
// // soys ranch
// let salami = "salami";
// let prompt;
// let ask;

// let turkeySandwich = "sandwich with turkey";
// let salamiSandwich = "sandwich with salami";
// let salmonSandwich = "sandwich with salmon"

//  prompt = 'Would you like to order?'
// while(ask != "yes"){
//     ask = prompt('Would you like to order?')
// }
// let askToppings = prompt('Choose from bellow topings: turkey - 1, salami - 2; salmon -3')

// if (askTopping == 1){
//     topping = turkey;
//     sandwich = turkeySandwich;
// }
// else if (askTopping == 3){
//     topping = salami
//     sandwich = salamiSandwich
// }
// else {
//     topping = salmon
//     sandwich = salmonSandwich
// }
// let step1 = `1. Take a pice of $(bread)`
// let step2 = `2. Take a slice of $(cheese)`
// let step3 = `3. Put cheese on bread`
// let step4 = `4. Take a slise of $(toppings)`
// let step5 = `5. Put $(topping) on $(cheese)`
// let result = `Your $(sandwich) is ready!`


//var sandwich
let meat1 = 'Roasted Beaf';
let meat2 = 'Grill Chicken';
let cheese1 = 'American Cheese';
let cheese2 = 'Swiss Cheese';


// Создаем объект сэндвича по умолчанию
let sandwich = {
    bread: 'Whole Grain bread',
    sauce: 'Sauce',
    salad: 'Fresh Salad',
    price: 5
  };
  
  // Создаем функцию для добавления компонентов в сэндвич и пересчета цены
  function addIngredient(type) {
    switch (type) {
      case cheese1:
      case cheese2:
        sandwich[type] = true;
        sandwich.price += 1;
        break;
      case meat1:
      case meat2:
        sandwich[type] = true;
        sandwich.price += 2;
        break;
      default:
        console.log('Invalid ingredient');
    }
  }
  
  
  // Выводим состав сэндвича и его цену
  function print(){
  let ingredients = `Your sandwich with ${sandwich.bread}, ${sandwich.sauce}, ${sandwich.salad}`;
  if (sandwich[cheese1]) {
    ingredients += `, ${cheese1}`;
  }
  if (sandwich[cheese2]) {
    ingredients += `, ${cheese2}`;
  }
  if (sandwich[meat1]) {
    ingredients += `, ${meat1}`;
  }
  if (sandwich[meat2]) {
    ingredients += `, ${meat2}`;
  }
  console.log(`Order: ${ingredients}, Price: ${sandwich.price}$`);
}

 /* Добавляем компоненты по желанию покупателя, хоть все */
addIngredient(cheese1);
//addIngredient(cheese2);
addIngredient(meat1);
//addIngredient(meat2);

// Выводим в консоль результат
print()

// //Marina 
// const chickenSandwich = {
//   name: "Sandwich with chicken",
//   bread: "whole wheat",
//   cheese: "american",
//   salad: "fresh salad",
//   meat: "chicken",
// };
// const tunaSandwich = {
//   name: "Sandwich with tuna",
//   bread: "whole wheat",
//   cheese: "american",
//   salad: "fresh salad",
//   meat: "tuna",
// };
// const glutenFreeSandwich = {
//   name: "Gluten free sandwich",
//   bread: "gluten free",
//   cheese: "vegan",
//   salad: "fresh salad",
//   meat: "gluten free",
// };
// const sandwichName = {
//   chicken: "Sandwich with chicken",
//   tuna: "Sandwich with tuna",
//   "gluten free": "Sandwich gluten free",
// };
// function chooseIngredients(meat) {
//   console.log(`Here are ingredients for your:  ${sandwichName[meat]}\n`);
//   if (meat == "chicken") {
//     for (let el in chickenSandwich) {
//       if (el == "name") continue;
//       console.log(el + " : " + chickenSandwich[el]);
//     }
//   } else if (meat == "tuna") {
//     for (let el in tunaSandwich) {
//       if (el == "name") continue;
//       console.log(el + " : " + tunaSandwich[el]);
//     }
//   } else if (meat == "gluten free") {
//   for (let el in glutenFreeSandwich) {
//     if (el == "name") continue;
//     console.log(el + " : " + glutenFreeSandwich[el]);
//   }
// }
// }

// function setPrice(meat) {
//   if (meat == "chicken") {
//     console.log(`Price for your order is: $${price * 0.5}`);
//   } else if (meat == "tuna") {
//     console.log(`Price for your order is: $${price * 2}`);
//   } else {
//     console.log(`Price for your order is: $${price * 2.5}`);
//   }
// }

// let price = 5;
// let meat = "gluten free";

// chooseIngredients(meat);
// setPrice(meat);