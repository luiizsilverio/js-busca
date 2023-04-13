import { notasService as service } from "./nota/service.js";
import { takeUntil, debounce } from "./utils/operators.js";
import "./utils/array-helpers.js";

const ehDivisivel = (divisor, numero) => !(numero % divisor);
const ehDivisivelPorDois = ehDivisivel.bind(null, 2);

const action = debounce(500, 
  takeUntil(3, () =>
    service
    .sumItems('2143')
    .then(console.log)
    .catch(console.warn)
  )
);

document
  .querySelector('#myButton')
  .onclick = action
;
