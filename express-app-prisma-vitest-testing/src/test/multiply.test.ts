// import {describe, expect, it} from '@jest/globals';
import {describe, expect, it, vi} from 'vitest';
import { app } from '..';
import request from 'supertest';
import { prismaClient } from '../__mocks__/db';

// vi.mock("../db", () => {
//     return {               
//         prismaClient: {
//             request: {
//                 create: vi.fn(), //prismaClient.request.create
//                 delete: vi.fn() //prismaClient.request.delete
//             }
//         }
//     }
// })

vi.mock("../db")

describe("multiply", () => {
    it("should should be able to multiply two positive numbers", async () => {
        prismaClient.request.create.mockResolvedValue({ 
            id: 1,
            a: 1,
            b: 2,
            answer: 2,
            type: "multiply"
        });

        const res = await request(app).post("/multiply").send({ 
            a: 1, 
            b: 2 
        })
        expect(res.body.answer).toBe(2)
        expect(res.body.id).toBe(1)
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