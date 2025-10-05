import express from "express";
const router = express.Router();


import indexRouter from "./indexRouter.js";
router.use("/", indexRouter);


export default router;