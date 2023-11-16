import express from "express";
import { login, generateCode, createUser } from "../controller/auth.js";

const router = express.Router()


router.post('/login/:email', login)
router.get('/login/:email/code', generateCode)
router.post('/createUser', createUser)


export default router