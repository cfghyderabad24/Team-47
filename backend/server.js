const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const connectDB = require("./db");
const authMiddleware = require("./middleware/authMiddleware");
const authRouter = require("./routes/authRouter");
const actionRouter = require("./routes/actionRouter");
const chatbotRouter = require("./routes/chatbotRouter");
const path = require("path");
const upload = require("./middleware/multerMiddleware");
const { createProxyMiddleware } = require('http-proxy-middleware');
require("dotenv").config();

app.use(cors());
app.use(express.json());

app.use("/api/users/", authRouter);
app.use("/api/actions/", actionRouter);

app.post("/api/upload", upload.single('file'), async (req, res) => {
    console.log(req.file);
    res.json({ message: "File uploaded successfully" });
});

app.use("/api/chatbot/", chatbotRouter);

// Proxy middleware to handle CORS for Google Maps API
app.use('/api/places', createProxyMiddleware({
    target: 'https://maps.googleapis.com',
    changeOrigin: true,
    pathRewrite: {
        '^/api/places': '/maps/api/place/nearbysearch/json',
    },
    onProxyReq: (proxyReq, req) => {
        const url = new URL(proxyReq.path, 'https://maps.googleapis.com');
        url.searchParams.append('key', process.env.GOOGLE_MAPS_API_KEY);
        proxyReq.path = url.pathname + url.search;
    }
}));

connectDB().then(() => {
    const port = process.env.PORT || 5000;
    app.listen(port, () => {
        console.log(`Server is running at port ${port}`);
    });
});
