import { Request, Response } from "express";
import { db } from "../../config/database";

export const remove = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.id);

    if (!userId)
      return res
        .status(401)
        .json({ message: "Parameters must not be empty!" });

    await db.user.delete({
      where: {
        id: userId,
      },
    });
    return res.status(200).json({ message: "Success remove user!" });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
