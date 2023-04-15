import { handleStatus } from "../utils/promise-helpers.js";
import { partialize, pipe, compose } from "../utils/operators.js";
import { Maybe } from "../utils/maybe.js";

const API = 'http://localhost:3000/notas';

const getItemsFromNotas = notasM => notasM.map(notas => 
  notas.$flatMap(nota => nota.itens));

const filterItemsByCode = (code, itemsM) => itemsM.map(items => 
  items.filter(item => item.codigo === code));

const sumItemsValue = itemsM => itemsM.map(items =>
  items.reduce((total, item) => total + item.valor, 0));

const sumItems = (code) => (notas) => notas
  
export const notasService = {

  async listAll() {
    return await fetch(API)      
      .then(handleStatus)
      .then(notas => Maybe.of(notas))
      .catch(err => {
        return Promise.reject('Não foi possível obter as notas');
      })
  },

  sumItems(code) {
    const filterItems = partialize(filterItemsByCode, code);
    const sumItems = pipe(getItemsFromNotas, filterItems, sumItemsValue);

    return this.listAll()
      .then(sumItems)
      .then(result => result.getDef(0));
  }
}
