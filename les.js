// let log = console.log;
// class Mammalias {
//     constructor (name, eyes, skin, legs){
//         this.name = name;
//         this.eyes = eyes;
//         this.skin = skin;
//         this.legs = legs;
//      }
//        canEat(){
//         log(`This Mammalias can eat milk.`);
//         log(`${this.name} has ${this.legs} legs, ${this.eyes} eyes and ${this.skin} skin.`);
//     }
// }
// let animal1 = new Mammalias(`Cow`, `green`, `brown`, 4);
// animal1.canEat();
// class Predators extends Mammalias {
//     constructor (name, eyes, skin, legs, claws, fangs, lungs){
//             super(name, eyes, skin, legs)
//                this.claws = claws;
//                 this.fangs = fangs;
//                 this.lungs = lungs;
//              }
//                canEatMeat(){
//                 log(`This predators can eat meat.`);
//                 log(`${this.name} has ${this.claws} claws, ${this.fangs} fangs and ${this.lungs} lungs.`);
//             }
//             canReproduceCubs(){
//                 log(`This predators can reproduce cubs`);
//         }
//     }
//         let animal2 = new Predators (`Wolf`, `blue`, `grey`, 4, 4, `medium`, `unhealthy`);
//         animal2.canEatMeat();
//         animal2.canReproduceCubs();
// class Feline extends Predators {
//     constructor (name, eyes, skin, legs, claws, fangs, lungs){
//         super(name, eyes, skin, legs, claws, fangs, lungs);
//     }
//        canMeow(){
//         log(`This feline can meow.`);
//         log(`${this.name} has ${this.claws} claws, ${this.fangs} fangs and ${this.lungs} lungs.`);
//     }
//     canWalkSmoothly(){
//         log(`This feline can walk smoothly`);
// }
// }
// let Prosha = new Feline(`Tiger`, `green`, `fluffy`, 4, `sharp`, `long`, `healthy`)
// Prosha.canMeow()
// Prosha.canEat()


// function twiceAsOld(dadYearsOld, sonYearsOld) {
//     let count = 0;
//     if(dadYearsOld > sonYearsOld * 2){
//       while(dadYearsOld === sonYearsOld * 2) {
//         dadYearsOld--; 
//         count++;
//       } } else if (dadYearsOld < sonYearsOld * 2){
//       while(dadYearsOld === sonYearsOld * 2) {
//         dadYearsOld++;  
//         count ++;
//       }
//       } 
//       return count;
//     }
    
