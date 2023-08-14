
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
 
rl.question('numberOfChild =', (numberA) => {
    rl.question('numberOfAdult = ', (numberB) => {
    rl.question('numberOfSeniors = ', (numberC) => {
        let CHILD = 100 
        let Adult =150  
        let Seniors =120

        let sum = numberA*CHILD+numberB*Adult+numberC*Seniors; 
       console.log(sum);
    })})});
;
