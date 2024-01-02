import { Router } from "express";
const router = Router();
import { saleHistoryControllers } from "../controllers/salesHistory.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { saleSchema } from "../schemas/saleHistory.schema.js";

router.get("/sales-history", saleHistoryControllers.getSaleHistory);

router.post(
  "/sales-history",
  validateSchema(saleSchema),
  saleHistoryControllers.addSaleHistory
);

router.get("/sales-history/:id", saleHistoryControllers.getSale);

router.put(
  "/sales-history/:id",
  validateSchema(saleSchema),
  saleHistoryControllers.updateSaleHistory
);

router.delete("/sales-history/:id", saleHistoryControllers.deleteSaleHistory);

export default router;
