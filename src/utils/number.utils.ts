export const isEven = (value: number) => value % 2 === 0;

export const getPositionInPulse = (i: number, length: number) => Math.abs((i % ((length - 1) * 2)) - (2 * (i % (length - 1))))