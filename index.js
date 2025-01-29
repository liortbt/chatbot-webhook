import express from "express";

const express = import("express");
const app = express();

const VERIFY_TOKEN = process.env.MYSECURETOKEN; // Replace with your chosen token

app.get("/webhook", (req, res) => {

        console.log(req);
        res.status(200).send("challenge"); // Respond with the challenge token
    
});

app.post("/", (req, res) => {
    console.log(req);
    res.status(200).send("challenge"); // Respond with the challenge token

});

app.listen(3000, () => console.log("Server running on port 3000"));
