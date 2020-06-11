function log (msg) {
  const date = new Date();
  console.log(`[${date.toLocaleDateString()} ${date.toLocaleTimeString()}]: ${msg}`);
}

module.exports = log;
