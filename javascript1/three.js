const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
 
   
rl.question('Enter amount: ', (amount) => {
    rl.question('Enter currency you want to convert doller/inr: ', (currency) => {
        if ( currency === 'inr') {
            console.log("Ruppes"+amount*82);
        } else if ( currency === 'doller') {
            console.log("Doller"+amount/82);
        }
        rl.close();
    });
});