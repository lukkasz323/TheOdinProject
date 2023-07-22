export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export const randomInRange = (min: number, max: number) => Math.floor(Math.random() * (((max + 1) - min) + min));

export const randomIndexOf = (array: any[]) => randomInRange(0, array.length - 1);

export const randomElementOf = (array: any[]) => array[randomIndexOf(array)];