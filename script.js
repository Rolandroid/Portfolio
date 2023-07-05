document.addEventListener('keydown', function(event) {
    var lista = document.getElementById('miLista');
    var elementos = lista.getElementsByTagName('li');
    var indiceActual = Array.prototype.indexOf.call(elementos, document.activeElement);
  
    if (event.keyCode === 38) { // Flecha arriba
      event.preventDefault();
      if (indiceActual > 0) {
        elementos[indiceActual - 1].focus();
      } else {
        elementos[elementos.length - 1].focus();
      }
    } else if (event.keyCode === 40) { // Flecha abajo
      event.preventDefault();
      if (indiceActual < elementos.length - 1) {
        elementos[indiceActual + 1].focus();
      } else {
        elementos[0].focus();
      }
    }
  });