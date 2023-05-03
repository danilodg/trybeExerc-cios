let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for(let index = 0;index < numbers.length;index += 1){ 
    result += numbers[index];
}
let médiaAritmética = (result / numbers.length)

if(médiaAritmética > 20){
    console.log("O valor da média aritmética é maior que 20")
} else if (médiaAritmética <= 20){
    console.log("O valor da média aritmética é menor ou igual a 20")
}