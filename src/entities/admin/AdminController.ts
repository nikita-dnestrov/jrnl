import { Request, Response } from "express";
import { BadRequestError, NotFoundError } from "../../common";
import { adminService } from "./AdminService";
import jwt from "jsonwebtoken";
import CONFIG from "../../config";

class AdminController {
  async adminTest(req: Request, res: Response) {
    await adminService.createSuperAdmin();
    res.status(200).json("Success");
  }

  async adminSignin(req: Request, res: Response) {
    const { username, password } = req.body;
    const admin = await adminService.get({ username });

    if (!admin) throw new NotFoundError();

    if (!(await adminService.comparePasswords(password, admin.password)))
      throw new BadRequestError("Wrong Password");

    const token = jwt.sign(JSON.stringify(admin), CONFIG.JWT_SECRET);

    res.status(200).json({ status: "ok", data: token });
  }
}

export const adminController = new AdminController();
