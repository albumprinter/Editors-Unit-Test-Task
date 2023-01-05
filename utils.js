
/**
 * Create a random id string with a given length
 * @param {number} size
 * @returns {string}
 */
export const makeId = (size) => {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < size; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

/**
 * Reverse a string
 * @param {string} text
 * @returns {string}
 */
export const reverse = (text) => {
  return text.split("").reverse().join("");
}
