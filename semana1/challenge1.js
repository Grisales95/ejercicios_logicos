const reverseString = (str) => {
  if (str.length > 15 || str.length <= 1 || typeof str !== "string") {
    throw new Error("Longitud o tipo de dato no admitid0");
  } else {
    strToArray = str.split("");
    strToArray.reverse();
    return strToArray.join("");
  }
};

module.exports = {
  reverseString,
};
