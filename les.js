// let arr = [80, 117, 115, 104, 45, 85, 112, 115];
// let arr = ['t', 'e', 's', 't']; 
// function check(a,x){
//   let b =  a.indexOf(x);
//   console.log(b);
//   return b >= 0;
// };

// function check(a,x){
//   return a.includes(x);  
// }

// console.log(check(arr, 'e'))
// console.log(check(arr, 112))


//let arr = ["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"];
//let arr = ["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"];
//let arr = ["wolf"]


// function warnTheSheep(queue) {
//     if(queue[queue.length - 1] == 'wolf'){
//         return "Pls go away and stop eating my sheep"
//       } else {
//         let a = queue.length - (queue.indexOf('wolf') + 1); // 8 - 6
//         return `Oi! Sheep number ${a}! You are about to be eaten by a wolf!`
//       }
      
//    }

// console.log(warnTheSheep(arr));

// function warnTheSheep (queue) {
//     if (queue.indexOf('wolf') == queue.length -1) 
//     return `Pls go away and stop eating my sheep`;
//     let r = queue.indexOf('sheep', queue.lastIndexOf('wolf'))
//     return `oi! sheep number ${queue.length - r}! You are about to be eaten by a wolf!`
//   }
//   console.log(warnTheSheep (arr))

// let arr1 = ["tail", "body", "head", "legs"];

// function fixTheMeerkat(arr) {
// //let arrTemp = [];
//   for(let i = 0; i < arr.length; i++){
//     arr[i] = arr[i].split('').reverse().join('')
//     //arrTemp.push(arr[i].split('').reverse().join(''))
//   }  
//     return arr;// arr.reverse();
// }

// console.log(fixTheMeerkat(arr1));


// coffeeType Kalinka
// let regularLatte = "Latte";
// let almondLatte = "Almond latte"
// let americano = "Americano";
// let icedCoffee = "Iced Coffee"

// // setPrice 
// let smallCup = "small";
// let mediumCup = "medium";
// let largeCup = "large";

// function setPrice(cupSize, price = 3) {
//    if (cupSize == smallCup) {
//       return price;
//    } else if (cupSize == mediumCup) {
//       return price * 1.5;
//    } else if (cupSize == largeCup) {
//       return price * 2;
//    }
// }

// // content 
// const setWater = coffeeType => (coffeeType == icedCoffee) ? "cold water" : "hot water";
// const setMilk = coffeeType => (coffeeType == regularLatte) ? "regular milk" : (coffeeType == almondLatte) ? "almond milk" : "";

// // receipt 
// function getReceipt(name, cupSize, coffeeType) {

//    const getWelcomeMessage = name => `\t\t\t` + "** Welcome, " + name + "! **" + `\n`;
//    let choice = "Your choice: " + cupSize + " " + coffeeType + `\n`;
//    let content = "Please add coffee and " + setWater(coffeeType) + `\n`;
//    let contentMilk = "Please add coffee, " + setMilk(coffeeType) + " and " + setWater(coffeeType) + `\n`;
//    let orderPrice = "Your order price is " + setPrice(cupSize) + "$" + `\n`;
//    let enjoy = "Enjoy!";

//    if (coffeeType == americano || coffeeType == icedCoffee) {
//       console.log(getWelcomeMessage(name) + choice + content + orderPrice + enjoy);
//    } else {
//       console.log(getWelcomeMessage(name) + choice + contentMilk + orderPrice + enjoy);
//    }
// }

// getReceipt("John", mediumCup, almondLatte);


// // coffeeType 
// const REGULAR_LATTE = "Latte";
// const ALMOND_LATTE = "Almond latte"
// const AMERICANO = "Americano";
// const ICED_COFFEE = "Iced Coffee"

// // setPrice 
// const CUP_SMALL = "Small";
// const CUP_MEDIUM = "Medium";
// const CUP_LARGE = "Large";

// // receipt 
// function getReceipt(name, cupSize, coffeeType) {
//     const coffeeContent = ({coffeeType}) => {
//         let res = "Please add coffee";

//         switch (coffeeType) {
//             case ICED_COFFEE:
//                 res += " and cold water";
//                 break;
//             case AMERICANO:
//                 res += " and hot water";
//                 break;
//             case REGULAR_LATTE:
//                 res += ", regular milk and hot water";
//                 break;
//             case ALMOND_LATTE:
//                 res += ", almond milk and hot water";
//                 break;
//             default:
//                 break;
//         }

//         return res;
//     };

//     const getPrice = ({cupSize = CUP_SMALL, price = 3}) => {
//         let coffeePrice;
        
//         if (cupSize === CUP_MEDIUM) {
//             coffeePrice = price * 1.5;
//         } else if (cupSize === CUP_LARGE) {
//             coffeePrice = price * 2;
//         } else {
//             coffeePrice = price;
//         }

//         return coffeePrice.toFixed(2);
//     };

//     const getWelcomeMessage = `\t\t\t** Welcome, ${name}! **`;
//     const choice = `Your choice: ${cupSize} ${coffeeType}`;
//     const orderPrice = `Your order price is $${getPrice(cupSize)}`;
//     const enjoy = "Enjoy!";

//     return `${getWelcomeMessage} \n ${choice} \n ${coffeeContent(coffeeType)} \n ${orderPrice} \n ${enjoy}`;
// }


// console.log(getReceipt("John", CUP_MEDIUM, ALMOND_LATTE));



//obj

//nested objects
const person2 = {
    id: "02",
    personalInfo: {
        name: {
            first: "Jane",
            last: "Dow1111``",
        },
        dob: "01/01/1990",
        "contactinfo": {
            phone: "+123456789",
            email: null,
            address: {
                city: "Boston",
                state: "M"
            }
        }
    },
    purchases: [null],
    car: "Suzuki1122"
}
console.log(person2.personalInfo['name'].last)

console.log(typeof person2.personalInfo)


let myObj = {
    name: "Bob",
    "age": 21,
    "isAdult": true,
    "salary": undefined,
    4: null,
    adress: [],
    linkToObject: 2
}

myObj.linkToObject = person2

console.log(myObj)