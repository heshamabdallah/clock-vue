/**
 * Add left zero for values less than 10.
 * @return string.
 */
export const checkLeftZero = (value) => value < 10 ? `0${value}` : value
