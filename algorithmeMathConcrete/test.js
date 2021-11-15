let getSumExpo = (indice, sommet,exponent) => {
    let sum = 0;
    for (let i = indice; i <= sommet; i++) {
        sum = sum + Math.pow(i, exponent);
    }
    return sum; 
}
console.log("reponse sigma coef: " + getSumExpo(1, 4, 2));

let getSum = (indice, sommet) => {
    let sum = 0;
    for (let i = indice; i <= sommet; i++) {
         sum += i;
    }
    return sum; 
}

console.log("reponse sigma: " + getSum(1, 4));