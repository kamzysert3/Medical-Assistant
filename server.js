const express = require('express');
const path = require('path');
const Answer = require('./middleware/answer.js').answer;

const port = process.env.PORT || 8700;

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.post('/ask', async (req, res) => {
    const { message } = req.body;
    const answer = await Answer(message);    

    res.json({
        answer
    });
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})