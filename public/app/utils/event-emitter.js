const events = new Map();

export const EventEmitter = {

  on(event, listener) {
    if (!events.has(event)) events.set(event, []);
    events.get(event).push(listener);
  },

  emit(event, data) {
    const listeners = events.get(event);
    if (listeners) 
      listeners.forEach(listener => listener(data));
  }

}

// Através do método get obtemos o dado associado à chave passada como parâmetro para o método.
// Adicionamos novas chaves/valores através do método set.
// Através do método has verificamos se a chave procurada já foi definida.
