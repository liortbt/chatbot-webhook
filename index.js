import express from "express";
const app = express();

const VERIFY_TOKEN = "mysecuretoken123"; // Use the same token as in Facebook Console

app.get("/webhook", (req, res) => {
    const mode = req.query["hub.mode"];
    const token = req.query["hub.verify_token"];
    const challenge = req.query["hub.challenge"];

    if (mode === "subscribe" && token === VERIFY_TOKEN) {
        console.log("Webhook verified successfully!");
        res.status(200).send(challenge); // Send back the challenge token
    } else {
        res.sendStatus(403); // Forbidden
    }
});

app.post("/webhook", (req, res) => {
    console.log("Webhook POST request received");
    res.status(200).send("Webhook POST request successful");
});

app.listen(3000, () => console.log("Webhook running on port 3000"));
