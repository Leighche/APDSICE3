import https from "https";
import http from "http";
import pkg from 'mongodb';
const { ObjectId } = pkg;
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import ExpressBrute from "express-brute";
 
const router = express.Router();

var store = new ExpressBrute.MemoryStore();
var bruteforce = new ExpressBrute(store);

router.post("/signup", async (req, res)=>
{
const password = bcrypt.hash(req.body.password, 10)
let newDocument ={
name: req.body.name,
password: (await password).toString()
};
let collection = await db.collection("users");
let result = await collection.insertOne(newDocument);
console.log(password);
res.send(result).status(204);
});