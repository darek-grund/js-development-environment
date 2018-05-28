import numeral from 'numeral';
import './index.css';
const courseValue = numeral(999999).format('$0,0.00');

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('app').innerHTML = `I would like to pay ${courseValue} for this.`;
});

