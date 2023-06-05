import { Request, Response } from "express";
import { db } from "../../config/database";
import {
  filePath,
  saveAudioFile,
  setNameFile,
  validateMidiaLength,
} from "../../helpers";

export const uploadAudio = async (req: Request, res: Response) => {
  try {
    let audioFile = req.file;

    if (!audioFile)
      return res.status(400).json({ message: "Parameters must not be empty!" });

    let validateLength = await validateMidiaLength(audioFile.buffer);

    if (!validateLength)
      return res.status(401).json({
        message: "The image file size not the allowed limits!",
      });

    let audioPath = filePath(audioFile.originalname);

    await saveAudioFile(audioFile.buffer, audioPath);

    let nameMida = setNameFile(audioFile.originalname);

    await db.midias.create({
      data: {
        nameMidia: nameMida,
        src: audioPath,
      },
    });

    return res.status(201).json({ message: "Success!" });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};
