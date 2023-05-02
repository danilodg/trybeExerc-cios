let currentHour =5
let message;
if (currentHour >= 22) {
    message = 'Não deveriamos comer nada,é hora de dormir'
}
else if (currentHour >= 18 && currentHour < 22) {
    message = 'Rango da noite, vamos jantar:D' 
}
else if (currentHour >= 14 && currentHour < 18) {
    message = 'vamos fazer um bolo pro café da tarde?'
}
else if (currentHour >= 11 && currentHour < 14) {
    message = 'Hora do almoço'
}
else if (currentHour =11 || 10 || 9 || 8 || 7 || 6 || 5 || 4 ) {
    message = 'Hmmm, cheiro de café recém-passado'
}
console.log(message)