const chunk = (array, size) => {
  const chuncked = [];

  for (let element of array) {
    const last = chuncked[chuncked.length - 1];

    if (!last || last.length === size) {
      chuncked.push([element]);
    } else {
      last.push(element);
    }
  }

  return chuncked;
};

module.exports = chunk;
