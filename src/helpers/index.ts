import path from "path";
import sharp from "sharp";
import moment from "moment";
import fs from "fs";

export const filePath = (nameMidia: string) => {
  let fileName = nameMidia,
    filePath = path.join(__dirname, "../uploads", fileName);

  return filePath;
};

export const setNameFile = (nameMidia: string) => {
  let now = moment().format(),
    midiaName = `${now}_${nameMidia}`;

  return midiaName;
};

export const validateMidiaLength = async (bufferFile: Buffer) => {
  let minMidiaSize = 1024,
    maxMidiaSize = 5 * 1024 * 1024,
    fileByteLength = bufferFile.byteLength;

  if (fileByteLength < minMidiaSize || fileByteLength > maxMidiaSize)
    return false;
  else return true;
};

export const resizedImage = async (bufferFile: Buffer, midiaPath: string) => {
  let resizedImage = await sharp(bufferFile)
    .resize(500, 500)
    .jpeg({ quality: 80 })
    .toBuffer();
  await sharp(resizedImage).toFile(midiaPath);

  return resizedImage;
};

export const saveAudioFile = async (bufferFile: Buffer, filePath: string) => {
  let saveAudioFile = await fs.promises.writeFile(filePath, bufferFile);

  return saveAudioFile;
};
