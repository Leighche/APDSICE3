import express from "express";
import db from "../db/conn.mjs";
import pkg from 'mongodb';
const { ObjectId } = pkg;
const router = express.Router();

router.get("/", async(req, res) => {
    let collection = await db.collection("posts");
    let results = await collection.find({}).toArray();
    res.send(results).status(200);
});

router.post("/upload", async (req, res) => {
    let newDocument = {
        user: req.body.user,
        content: req.body.content,
        image: req.body.image
    };
    let collection = await db.collection("posts");
    let result = await collection.insertOne(newDocument);
    res.send(result).status(204);
});

// Add this line to export the router as the default export
export default router;
