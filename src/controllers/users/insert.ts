import { Request, Response } from "express";
import { db } from "../../config/database";
import { hash } from "bcrypt";

interface IinsertUser {
  name: string;
  email: string;
  password: string;
}

export const insert = async (req: Request, res: Response) => {
  try {
    const { name, email, password }: IinsertUser = req.body;

    if (!name || !email || !password)
      return res
        .status(401)
        .json({ message: "Parameters must not be empty!" });

    await db.user.create({
      data: {
        name: name,
        email: email,
        password: await hash(password, 10),
      },
    });

    return res.status(201).json({ message: "Success!" });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
