export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
export const randomInRange = (min, max) => Math.floor(Math.random() * (((max + 1) - min) + min));
export const randomIndexOf = (array) => randomInRange(0, array.length - 1);
export const randomElementOf = (array) => array[randomIndexOf(array)];
