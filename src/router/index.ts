import { Router } from "express";
import { adminRouter } from "./admin";

export const globalRouter = Router();

globalRouter.use("/admin", adminRouter);
