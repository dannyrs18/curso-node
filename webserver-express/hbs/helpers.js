const hbs = require('hbs')
// helpers 
// Son funciones que se ejecutan cuando el template lo requiere
hbs.registerHelper('getAnio', () => new Date().getFullYear());
hbs.registerHelper('capitalizar', (text) => {
    let palabra = text.split(' ');
    palabra.forEach((element, idx) => {
        palabra[idx] = element[0].toUpperCase()+element.slice(1).toLowerCase();
    });
    return palabra.join(' ');
});
