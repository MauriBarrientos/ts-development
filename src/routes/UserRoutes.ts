import { Router } from "express";
import UserController from "../controllers/UserController";
import { verifyToken, verifyRole } from "../middlewares/AutthMiddleware";

const router = Router();

router.get("/user", verifyToken, UserController.findAll);
router.get("/user/:id", verifyToken, UserController.findById);
router.post("/user", UserController.create); // Solo los admins pueden crear usuarios
router.put("/user/:id", verifyToken, UserController.update);
router.delete("/user/:id", verifyToken, verifyRole("admin"), UserController.delete); // Solo los admins pueden eliminar

export default router;
