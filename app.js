// This is today's temperature, in Kelvin.
const Kelvin = 294;
console.log(Kelvin);

// This is today's temperature, in Celsius.
let Celsius = Kelvin - 293;
console.log(Celsius);

// This is today's temperature, in Fahrenheit. Math.floor rounds down the temperature.
let Fahrenheit = Math.floor(Celsius * (9/5) + 32);
console.log(Fahrenheit);

console.log(`The temperature is ${Fahrenheit} degrees Fahrenheit.`);