/**
 * Finds the maximum element in the given array (if any)
 * @param data      Array of numbers
 * @returns {number|null}
 */
export function findMax(data: number[]) : number {
    if (data.length > 0) {
        return data.reduce( (a, b) => a > b ? a : b, data[0]);
    }
    return null;
}