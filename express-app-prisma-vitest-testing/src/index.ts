import express from 'express';
import { prismaClient } from './db';

export const app = express();
app.use(express.json());

app.post("/sum", async (req, res): Promise<any> => {
    const a = req.body.a;
    const b = req.body.b;

    if (a > 1000 || b > 1000) {
        return res.status(422).json({ message: "Numbers must be less than 1,000" });
    }

    const result = a + b;

    await prismaClient.request.create({
        data: {
            a: a,
            b: b,
            answer: result,
            type: "sum"
        }
    })

    res.json({ answer: result });
})

app.post("/multiply", async (req, res): Promise<any> => {
    const a = req.body.a;
    const b = req.body.b;

    if (a > 1000 || b > 1000) {
        return res.status(422).json({ message: "Numbers must be less than 1,000" });
    }

    const result = a * b;

    const request = await prismaClient.request.create({
        data: {
            a: a,
            b: b,
            answer: result,
            type: "multiply"
        }
    })

    res.json({ answer: result, id: request.id });
})