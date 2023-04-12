import { notasService as service } from "./nota/service.js";
import "./utils/array-helpers.js";

const ehDivisivel = (divisor, numero) => !(numero % divisor);
const ehDivisivelPorDois = ehDivisivel.bind(null, 2);


document
  .querySelector('#myButton')
  .onclick = () => service
    .sumItems('2143')
    .then(console.log)
    .catch(console.warn)

