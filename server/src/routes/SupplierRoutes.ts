// routes/SupplierRoutes.ts
import { Router } from "express";
import SupplierController from "../controllers/SupplierController";
import { verifyToken, verifyRole } from "../middlewares/AuthMiddleware";

const router = Router();

router.get("/supplier", verifyToken, verifyRole("empleado"), SupplierController.getAll);
router.get("/supplier/:id", verifyToken, verifyRole("empleado"), SupplierController.getById);
router.post("/supplier", verifyToken, verifyRole("empleado"), SupplierController.create);
router.put("/supplier/:id", verifyToken, verifyRole("empleado"), SupplierController.update);
router.delete("/supplier/:id", verifyToken, verifyRole("empleado"), SupplierController.delete);

export default router;
