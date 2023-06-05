import { Router } from "express";
import { UsersControllers } from "../controllers";

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

router.use("/api", router);

export default router;
