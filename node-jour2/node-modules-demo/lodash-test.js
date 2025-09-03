const _ = require('lodash');

const numbers = [0,1,2,3,4,5];
const mel = _.shuffle(numbers);  // une seule fois

console.log("Numbers :", numbers);
console.log("Mélangé :", mel);
console.log("Premier élément :", _.first(numbers));
console.log("Premier élément mélangé:", _.first(mel));
