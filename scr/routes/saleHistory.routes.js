import { Router } from "express";
const router = Router();
import { saleHistoryControllers } from "../controllers/salesHistory.controller.js";

router.get("/sales-history", saleHistoryControllers.getSaleHistory);

router.post("/sales-history", saleHistoryControllers.addSaleHistory);

router.get("/sales-history/:id", saleHistoryControllers.getSale);

router.put("/sales-history/:id", saleHistoryControllers.updateSaleHistory);

router.delete("/sales-history/:id", saleHistoryControllers.deleteSaleHistory);


export default router