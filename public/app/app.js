import { notasService as service } from "./nota/service.js";
import "./utils/array-helpers.js";

document
  .querySelector('#myButton')
  .onclick = () => service
    .sumItems('2143')
    .then(console.log)
    .catch(console.warn)

