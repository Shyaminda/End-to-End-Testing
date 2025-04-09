import express from 'express';

export const app = express();
app.use(express.json());

app.post("/sum", (req, res) => {
    const a = req.body.a;
    const b = req.body.b;

    const result = a + b;

    res.json({ sum: result });
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});