/**
 * @name deduplicate
 * @param {Array[string]|Array[Object]} array An array of locales to deduplicate
 * @returns {Array[string]|Array[Object]} Deduplicated array of locales
 * @example <caption>Deduplicate a string array</caption>
 * deduplicate([ 'en-US', 'en-US']) // [ 'en-GB, 'en-US' ]
 * @example <caption>Deduplicate an object array</caption>
 * deduplicate([ { locale: 'en-US' }, { locale: 'en-US' } ]) // [ { locale: 'en-US' } ]
*/
export default array => {
  if (!Array.isArray(array)) return array
  switch (typeof array[0]) {
    case 'string':
      return array.filter((item, index) => array.indexOf(item) === index)
    case 'object':
      return array.filter((item, index, arr) => arr.findIndex(arrItem => arrItem.locale === item.locale) === index)
    default:
      return array
  }
}
