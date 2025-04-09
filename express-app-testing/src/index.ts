import express from 'express';

export const app = express();
app.use(express.json());

app.post("/sum", (req, res): any => {
    const a = req.body.a;
    const b = req.body.b;

    if (a > 1000 || b > 1000) {
        return res.status(422).json({ message: "Numbers must be less than 1,000" });
    }

    const result = a + b;

    res.json({ answer: result });
})

app.post("/multiply", (req, res): any => {
    const a = req.body.a;
    const b = req.body.b;

    if (a > 1000 || b > 1000) {
        return res.status(422).json({ message: "Numbers must be less than 1,000" });
    }

    const result = a * b;

    res.json({ answer: result });
})