import { Router } from "express";
import { adminController } from "../entities/admin/AdminController";

export const adminRouter = Router();

adminRouter.post("/test", adminController.adminTest);
adminRouter.post("/signin", adminController.adminSignin);
