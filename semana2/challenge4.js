function landMass(country, area) {
  let earth = 148940000;
  let calculate = (area / earth) * 100;
  let result = Number(calculate.toFixed(2));
  return {
    percent: result,
    message: `${country} representa el ${result}% de la masa de la tierra`,
  };
}

module.exports = landMass;
