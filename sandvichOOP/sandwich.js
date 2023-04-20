import { Sandwich } from "./sandwichClass.js";
import { ExtraSandwich } from "./sandwichClass.js";

const cheeseAndChicken = {
  name: "Cheese and Chicken",
  bread: "White special",
  filling: "Chicken",
  cheese: "Swiss Cheese",
  isGrilled: true,
  price: 11.99,
};
const hamParadise = {
  name: "Hamon paradice",
  bread: "whole white",
  filling: "spanish hamon",
  cheese: "iberico cheese",
  price: 14.99,
};

const veganWorld = {
  name: "Perfect Vegan World",
  bread: "whole grain vegan",
  filling: "plant-based meat",
  cheese: "treeline cheese",
  price: 15.99,
}


let result = new Sandwich(cheeseAndChicken);
console.log(result.printRecipe());
console.log("- - - - - - - - - - -");
console.log(result.printCheck());
console.log(result.printPrice());
console.log("---------------------");

cheeseAndChicken.isGrilled = false
result = new Sandwich(cheeseAndChicken);
console.log(result.printRecipe());
console.log("- - - - - - - - - - -");
console.log(result.printCheck());
console.log(result.printPrice());
console.log("---------------------");

result = new ExtraSandwich(hamParadise, 2, 3);
console.log(result.printRecipe());
console.log("- - - - - - - - - - -");
console.log(result.printCheck());
console.log(result.printPrice());
console.log("---------------------");

result = new ExtraSandwich(veganWorld, 3, 2);
console.log(result.printRecipe());
console.log("- - - - - - - - - - -");
console.log(result.printCheck());
console.log(result.printPrice());
console.log("---------------------");

// // //var sandwich
// let meat1 = 'Roasted Beaf';
// let meat2 = 'Grill Chicken';
// let cheese1 = 'American Cheese';
// let cheese2 = 'Swiss Cheese';

// // Создаем объект сэндвича по умолчанию
// let sandwich = {
//     bread: 'Whole Grain bread',
//     sauce: 'Sauce',
//     salad: 'Fresh Salad',
//     price: 5
//   };

//   // Создаем функцию для добавления компонентов в сэндвич и пересчета цены
//   function addIngredient(type) {
//     switch (type) {
//       case cheese1:
//       case cheese2:
//         sandwich[type] = true;
//         sandwich.price += 1;
//         break;
//       case meat1:
//       case meat2:
//         sandwich[type] = true;
//         sandwich.price += 2;
//         break;
//       default:
//         console.log('Invalid ingredient');
//     }
//   }

//   // Выводим состав сэндвича и его цену
//   function print(){
//   let ingredients = `Your sandwich with ${sandwich.bread}, ${sandwich.sauce}, ${sandwich.salad}`;
//   if (sandwich[cheese1]) {
//     ingredients += `, ${cheese1}`;
//   }
//   if (sandwich[cheese2]) {
//     ingredients += `, ${cheese2}`;
//   }
//   if (sandwich[meat1]) {
//     ingredients += `, ${meat1}`;
//   }
//   if (sandwich[meat2]) {
//     ingredients += `, ${meat2}`;
//   }
//   console.log(`Order: ${ingredients}. Price: ${sandwich.price}$`);
// }

//  /* Добавляем компоненты по желанию покупателя, хоть все */
// addIngredient(cheese1);
// addIngredient(cheese2);
// addIngredient(meat1);
// addIngredient(meat2);

// // Выводим в консоль результат
// print()
