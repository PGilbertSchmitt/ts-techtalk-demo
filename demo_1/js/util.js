
const mult = (x, y) => x * y;

// Returns a string heading based on the degrees off of absolute north in a clockwise rotation
// Nothing super contrived about this
const getHeading = deg => {
  const degOffset = deg % 360;

  if (degOffset > 45 && degOffset <= 135) {
    return "East";
  } else if (degOffset > 135 && degOffset <= 255) {
    return "South";
  } else if (degOffset > 255 && degOffset <= 315) {
    return "West";
  } else {
    return "North";
  }
}

module.exports = {
  mult,
  getHeading
};
