import { handleStatus } from "../utils/promise-helpers.js";
import { partialize, pipe, compose } from "../utils/operators.js";

const API = 'http://localhost:3000/notas';

const getItemsFromNotas = notas => notas.$flatMap(nota => nota.itens);
const filterItemsByCode = (code, items) => items.filter(item => item.codigo === code);
const sumItemsValue = items => items.reduce((total, item) => total + item.valor, 0);

const sumItems = (code) => (notas) => notas
  
export const notasService = {

  async listAll() {
    return await fetch(API)
      .then(handleStatus)
      .catch(err => {
        return Promise.reject('Não foi possível obter as notas');
      })
  },

  sumItems(code) {
    const filterItems = partialize(filterItemsByCode, code);
    const sumItems = pipe(getItemsFromNotas, filterItems, sumItemsValue);

    return this.listAll()
      .then(sumItems);
  }
}
