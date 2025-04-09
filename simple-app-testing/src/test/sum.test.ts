import {describe, expect, it, test} from '@jest/globals';
import { sum } from '../index';

describe("sum", () => {
    it("should should be able to add two positive numbers", () => {
        const ans = sum(1, 2)
        expect(ans).toBe(3)
    })

    it("should should be able to add two negative numbers", () => {
        const ans = sum(-1, -2)
        expect(ans).toBe(-3)
    })

    it("should should be able to add a positive and a negative number", () => {
        const ans = sum(1, -2)
        expect(ans).toBe(-1)
    })

    it("should should be able to add two zero numbers", () => {
        const ans = sum(0, 0)
        expect(ans).toBe(0)
    })
})