import { Router } from "express";
import { productControllers } from "../controllers/product.controller.js";
import { payMethodsControllers } from "../controllers/payMethods.controller.js";
import { deliveryControllers } from "../controllers/delivery.controller.js";
import { stockControllers } from "../controllers/stock.controller.js";
const router = Router();

// PRODUCTS ROUTES
router.get("/products", productControllers.getProducts);

router.post("/products", productControllers.addProduct);

router.get("/products/:id", productControllers.getProduct);

router.delete("/products/:id", productControllers.deleteProduct);

router.put("/products/:id", productControllers.updateProduct);

// PAYMETHODS ROUTES
router.get("/paymethods", payMethodsControllers.getPayMethods);

router.post("/paymethods", payMethodsControllers.addPayMethod);

router.get("/paymethods/:id", payMethodsControllers.getPayMethod);

router.delete("/paymethods/:id", payMethodsControllers.deletePayMethod);

router.put("/paymethods/:id", payMethodsControllers.updatePayMethod);

// DELIVERY ROUTERS
router.get("/deliverys", deliveryControllers.getDeliverys);

router.post("/deliverys", deliveryControllers.addDelivery);

router.get("/deliverys/:id", deliveryControllers.getDelivery);

router.delete("/deliverys/:id", deliveryControllers.deleteDelivery);

router.put("/deliverys/:id", deliveryControllers.updateDelivery);

// STOCK ROUTES
router.get("/stock", stockControllers.getStock);

router.get("/item-stock/:id", stockControllers.getItemStock);

router.post("/stock", stockControllers.addStock);

router.delete("/stock/:id", stockControllers.deleteStock);

router.put("/stock/:id", stockControllers.updateStock);

export default router;
