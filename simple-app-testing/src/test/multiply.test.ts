import {describe, expect, it, test} from '@jest/globals';
import { multiply } from '../index';

describe("multiply", () => {
    it("should should be able to multiply two positive numbers", () => {
        const ans = multiply(2, 3)
        expect(ans).toBe(6)
    })

    it("should should be able to multiply two negative numbers", () => {
        const ans = multiply(-2, -3)
        expect(ans).toBe(6)
    })

    it("should should be able to multiply a positive and a negative number", () => {
        const ans = multiply(2, -3)
        expect(ans).toBe(-6)
    })

    it("should should be able to multiply two zero numbers", () => {
        const ans = multiply(0, 0)
        expect(ans).toBe(0)
    })
})