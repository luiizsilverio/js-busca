import { notasService as service } from "./nota/service.js";
import { takeUntil, debounce } from "./utils/operators.js";
import { timeoutPromise, retry } from "./utils/promise-helpers.js";
import "./utils/array-helpers.js";

const ehDivisivel = (divisor, numero) => !(numero % divisor);
const ehDivisivelPorDois = ehDivisivel.bind(null, 2);

const action = debounce(500, 
    takeUntil(3, () =>
      retry(3, 3000, () => timeoutPromise(200, service.sumItems('2143')))
      .then(console.log)
      .catch(console.error)    
    )
  );

document
  .querySelector('#myButton')
  .onclick = action
;
