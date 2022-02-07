// From https://github.com/snipcart/vue-blog-demo/blob/master/src/helpers.js
const prettyDate = (date) => new Date(date)
  .toString()
  .split(' ')
  .slice(0, 4)
  .join(' ')
  .replace(/( \d+)$/, ',$1');

export default prettyDate;
