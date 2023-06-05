import { Request, Response } from "express";
import { db } from "../../config/database";

export const getMidias = async (req: Request, res: Response) => {
  try {
    let midia = await db.midias.findMany();

    if (!midia) return res.status(401).json({ message: "Not found midia!" });

    return res.status(200).json({ result: midia });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
