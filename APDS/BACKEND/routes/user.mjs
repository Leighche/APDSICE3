import express from "express"
import db from "../db/conn.mjs";

import https from "https";
import http from "http";
import fs from "fs";
import posts from "./routes/post.mjs"
import cors from "cors"