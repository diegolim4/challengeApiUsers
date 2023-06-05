import { Request, Response } from "express";
import { db } from "../../config/database";
import { hash } from "bcrypt";

interface IinsertUser {
  name: string;
  email: string;
  password: string;
}

export const updated = async (req: Request, res: Response) => {
  try {
    const { name, email, password }: IinsertUser = req.body;

    if (!name || !email || !password)
      return res
        .status(401)
        .json({ message: "Parameters must not be empty!" });

    const userId = parseInt(req.params.id);

    await db.user.update({
      where: {
        id: userId,
      },
      data: {
        name: name,
        email: email,
        password: await hash(password, 10),
      },
    });

    return res.status(201).json({ message: "Success in update!" });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
