import { Request, Response } from "express";
import { db } from "../../config/database";

export const get = async (req: Request, res: Response) => {
  try {
    let users = await db.user.findMany();

    if (!users || users.length == 0)
      return res.status(401).json({ message: "Not found Datas!" });

    return res.status(200).json({ Users: users });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
