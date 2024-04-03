function factorial(a) {

        if(a === 0){ // verify if a is strictment equal at 0 
            return 1 ;  
        }
    console.log("Factorielle : "+ a + " !"); // display the factorial number, x, x2, x3... x^n
    return a * factorial(a - 1); // traitement 
    
}


let a = parseInt(prompt("Enter the factorial : " + " !")); // ask to user to choose a factorial 

console.log("Factorielle  : "+ factorial(a));
