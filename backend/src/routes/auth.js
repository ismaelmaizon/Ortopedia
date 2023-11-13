import express from "express";
import { login, generateCode } from "../controller/auth.js";

const router = express.Router()


router.post('/login/:email', login)
router.post('/login/:email/code', generateCode)


export default router