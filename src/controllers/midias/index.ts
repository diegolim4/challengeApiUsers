import * as uploadImage from "./uploadImage";
import * as uploadAudio from "./uploadAudio";
import * as getMidias from "./getMidias";

export const Midias = {
  ...uploadImage,
  ...uploadAudio,
  ...getMidias,
};
