import { Router } from "express";
import {
  UsersControllers,
  UserGithubControllers,
  Midias,
} from "../controllers";
import { upload } from "../config/multer";

const router = Router();

router.get("/about", (_, res) => {
  return res.status(200).json({
    message:
      "API resposável por inserir, atualizar e deleta usuários no banco de dados",
  });
});

router.post("/insertUser", UsersControllers.insert);

router.get("/getUsers", UsersControllers.get);

router.put("/updateUser/:id", UsersControllers.updated);

router.delete("/deleteUser/:id", UsersControllers.remove);

router.get("/searchUser/:user", UserGithubControllers.searchUserGithub);

router.post("/uploadImage", upload.single("image"), Midias.uploadImage);

router.post("/uploadAudio", upload.single("audio"), Midias.uploadAudio);

router.get("/getMidia", Midias.getMidias);

router.use("/api", router);

export default router;
