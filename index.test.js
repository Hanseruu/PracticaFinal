const fs = require('fs');
const { JSDOM } = require('jsdom');
require('@testing-library/jest-dom');

test('La página contiene un encabezado Hola Mundo', () => {
    const html = fs.readFileSync('./index.html', 'utf8');
    const dom = new JSDOM(html);
    const h1 = dom.window.document.querySelector('h1');
    
    expect(h1).toHaveTextContent('Hola Mundo');
});
