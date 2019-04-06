const css = require('./styles/app.styl');
const articles = require('./blog.js');

const root = document.getElementById('app');

root.innerHTML = `
  <div class="${css.spaceShip}"></div>
  <div>${articles}</div>
`;
