import numeral from 'numeral';
const courseValue = numeral(999999).format('$0,0.00');

document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById('app').innerHTML = `I would like to pay ${courseValue} for this.`;
});

