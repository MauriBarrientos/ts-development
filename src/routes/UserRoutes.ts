import { Router } from "express";
import UserController from "../controllers/UserController";

const router = Router();


// Definir las rutas para los controladores
router.get("/user", UserController.findAll);
router.get("/user/:id", UserController.findById);
router.post("/user", UserController.create);
router.put("/user/:id", UserController.update);
router.delete("/user/:id", UserController.delete);

export default router;

