const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();
const asyncHandler = require('express-async-handler');

const chatbot = asyncHandler(async (req, res) => {
    try {
        const history = req.body.history || [];
        const message = req.body.message;
        const generationConfig = req.body.generationConfig || {};

        console.log(process.env.API_KEY);

        const genAI = new GoogleGenerativeAI(process.env.API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        // Include training data (example conversations)
        const trainingData = [
            { role: "system", content: "You are a helpful assistant." },
            { role: "user", content: "Hello, who won the World Series in 2020?" },
            { role: "assistant", content: "The Los Angeles Dodgers won the World Series in 2020." },
            // Add more example conversations here
        ];

        // Merge training data with the history from the request
        const extendedHistory = trainingData.concat(history);

        const chat = model.startChat({
            history: extendedHistory,
            generationConfig: generationConfig,
        });

        const result = await chat.sendMessage(message);
        const responseText = result.response.text();

        console.log(responseText);

        res.send({ acknowledged: true, text: responseText });
    } catch (err) {
        console.log(err);
        res.status(500).send({ error: 'An error occurred while processing your request.' });
    }
});

module.exports = chatbot;
