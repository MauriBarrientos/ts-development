// routes/EquipmentRoutes.ts
import { Router } from "express";
import EquipmentController from "../controllers/EquipmentController";
import { verifyToken, verifyRole } from "../middlewares/AuthMiddleware";

const router = Router();

router.get("/equipment", verifyToken, verifyRole("empleado"), EquipmentController.getAll);
router.get("/equipment/:id", verifyToken, verifyRole("empleado"), EquipmentController.getById);
router.post("/equipment", verifyToken, verifyRole("empleado"), EquipmentController.create);
router.put("/equipment/:id", verifyToken, verifyRole("empleado"), EquipmentController.update);
router.delete("/equipment/:id", verifyToken, verifyRole("empleado"), EquipmentController.delete);

export default router;
