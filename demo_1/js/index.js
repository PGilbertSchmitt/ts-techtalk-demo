// Second most contrived thing you'll see all day
const { mult, getHeading } = require('./util');

const rotation = mult(45, 677);

const direction = getHeading(rotation);

console.log(direction);
