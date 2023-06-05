import { Request, Response } from "express";
import { api } from "../../services/api";

export const searchUserGithub = async (req: Request, res: Response) => {
  try {
    let userName = req.params.user;

    if (!userName)
      return res.status(401).json({ message: "Username required!" });

    async function searchUserGithub(user: string) {
      let response = await api.get("/users/" + user);

      return response.data;
    }

    let foundUser = await searchUserGithub(userName);

    if (!foundUser) return res.status(404).json({ message: "Not found user!" });

    return res.status(200).json({ data: foundUser });
  } catch (error) {
    return res.status(404).json({ message: error });
  }
};
