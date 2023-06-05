import { Request, Response } from "express";
import { db } from "../../config/database";
import {
  filePath,
  resizedImage,
  setNameFile,
  validateMidiaLength,
} from "../../helpers";

export const uploadImage = async (req: Request, res: Response) => {
  try {
    let imgFile = req.file;

    if (!imgFile)
      return res.status(400).json({ message: "Parameters must not be empty!" });

    let validateLength = await validateMidiaLength(imgFile.buffer);

    if (!validateLength)
      return res.status(401).json({
        message: "The image file size not the allowed limits!",
      });

    let imagePath = filePath(imgFile.originalname);

    await resizedImage(imgFile.buffer, imagePath);

    let nameMida = setNameFile(imgFile.originalname);

    await db.midias.create({
      data: {
        nameMidia: nameMida,
        src: imagePath,
      },
    });

    return res.status(201).json({ message: "Success!" });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};
