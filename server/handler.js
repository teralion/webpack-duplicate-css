const fs = require('fs');
const url = require('url');
const path = require('path');
const mime = require('mime/lite');

const DIR = path.resolve(__dirname, '../');

function isAsset(pathname) {
  const paths = pathname.split('/').filter(Boolean);
  return paths[0] === 'assets'
}

function getAssetPath(pathname) {
  const paths = pathname.split('/').filter(Boolean);
  return paths.slice(1).join('/');
}

function isFavicon(pathname) {
  return pathname.includes('favicon.ico');
}

function getMime(pathname) {
  return mime.getType(pathname);
}

function fileRouter(pathname) {
  if (isAsset(pathname)) {
    const assetPath = getAssetPath(pathname);
    return path.join(DIR, 'build', assetPath)
  } else if (isFavicon(pathname)) {
    return path.join(DIR, 'public', 'favicon.ico');
  } else {
    return path.join(DIR, 'app', 'pages', 'index.html');
  }
}

function handler(req, res) {
  const pathname = url.parse(req.url).pathname;
  const filepath = fileRouter(pathname);

  const mimeType = getMime(pathname);
  res.setHeader('Content-Type', mimeType);

  const filestream = fs.createReadStream(filepath);
  filestream.pipe(res);
}

module.exports = handler;
