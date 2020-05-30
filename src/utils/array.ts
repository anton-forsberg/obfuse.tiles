export const getArrayOfLength = (length: number) => [...Array(length)].map((e, i) => i);

export const swapElements = <T>(array: T[], index1: number, index2: number) => {
    const results = array.slice();
    const item1 = array[index1];
    results[index1] = array[index2];
    results[index2] = item1;
    return results;
}