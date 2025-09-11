import { Sum } from "../src/common/Sum";

test('sum function should calculate sum of 2 numbers', () => {
    const res = Sum(2, 3);
    expect(res).toBe(5); // Assertion
});