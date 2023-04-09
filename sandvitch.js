let bread = "wholeWheat bread";
//gluten free
let cheese = "American cheese";
//vegan cheese
let turkey = "Smoked turkey";
let salmon = "Wild salmon";
// tuna
// chicken
// fresh salad
// soys ranch
let salami = "salami";
let prompt;
let ask;

let turkeySandwich = "sandwich with turkey";
let salamiSandwich = "sandwich with salami";
let salmonSandwich = "sandwich with salmon"

 prompt = 'Would you like to order?'
while(ask != "yes"){
    ask = prompt('Would you like to order?')
}
let askToppings = prompt('Choose from bellow topings: turkey - 1, salami - 2; salmon -3')

if (askTopping == 1){
    topping = turkey;
    sandwich = turkeySandwich;
}
else if (askTopping == 3){
    topping = salami
    sandwich = salamiSandwich
}
else {
    topping = salmon
    sandwich = salmonSandwich
}
let step1 = `1. Take a pice of $(bread)`
let step2 = `2. Take a slice of $(cheese)`
let step3 = `3. Put cheese on bread`
let step4 = `4. Take a slise of $(toppings)`
let step5 = `5. Put $(topping) on $(cheese)`
let result = `Your $(sandwich) is ready!`