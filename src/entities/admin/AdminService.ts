import { dbAdmin } from "../../db";

class AdminService {
  async get(filter) {
    return await dbAdmin.findFirst({ where: filter });
  }

  async createSuperAdmin() {
    const created = await dbAdmin.create({
      data: {
        username: "superadmin",
        password: "superadmin",
      },
    });
    console.log(created);
  }

  async comparePasswords(first, second) {
    return first === second;
  }
}

export const adminService = new AdminService();
