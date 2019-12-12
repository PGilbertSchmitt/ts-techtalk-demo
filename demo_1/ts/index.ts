import { mult, getHeading } from './util';

const rotation = mult(420, 77);

const direction = getHeading(rotation);

console.log(direction);