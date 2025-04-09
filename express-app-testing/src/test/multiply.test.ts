import {describe, expect, it} from '@jest/globals';
import { app } from '..';
import request from 'supertest';

describe("multiply", () => {
    it("should should be able to multiply two positive numbers", async () => {
        const res = await request(app).post("/multiply").send({ 
            a: 1, 
            b: 2 
        })
        expect(res.body.answer).toBe(2)
        expect(res.statusCode).toBe(200)
    })

    it("should fail when a number is too big", async () => {
            const res = await request(app).post("/multiply").send({ 
                a: 1001, 
                b: 2 
            })
            
            expect(res.body.message).toBe("Numbers must be less than 1,000")
            expect(res.statusCode).toBe(422)
        })
})