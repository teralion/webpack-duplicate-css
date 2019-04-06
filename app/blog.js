const css = require('./styles/sypher.styl');

function getSypher() {
  const max = 10000000;
  const min = 100000;

  const sypher = Math.floor(
    Math.random() * (min - max + 1)
  ) + min;

  return `
    <p class="${css.article}">
      ${sypher}
    </p>
  `
}

function renderSyphers() {
  const articlesNum = 10;
  let articles = `<div class="${css.wrap}">`;

  for (let i = 0; i < articlesNum; i++) {
    const articleText = getSypher();
    articles += articleText;
  }

  articles += `</div>`;
  return articles;
}

module.exports = renderSyphers();
