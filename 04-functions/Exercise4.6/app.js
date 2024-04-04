function factorial(a){
    if (a === 0) return 1
    let factorial = a * factorial(a - 1)
    return factorial;

}

let a = parseInt(prompt("Enter the number = " + "!"));
console.log(factorial(a));