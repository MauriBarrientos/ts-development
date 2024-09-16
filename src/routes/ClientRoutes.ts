// routes/ClientRoutes.ts
import { Router } from "express";
import ClientController from "../controllers/ClientController";
import { verifyToken, verifyRole } from "../middlewares/AuthMiddleware";

const router = Router();


router.get("/client", verifyToken, verifyRole("empleado"), ClientController.findAll);
router.get("/client/:id", verifyToken, verifyRole("empleado"), ClientController.findById);
router.post("/client", verifyToken, verifyRole("empleado"), ClientController.create);
router.put("/client/:id", verifyToken, verifyRole("empleado"), ClientController.update);
router.delete("/client/:id", verifyToken, verifyRole("empleado"), ClientController.delete);

export default router;
