import { Router } from "express";
import { productControllers } from "../controllers/product.controller.js";
import { payMethodsControllers } from "../controllers/payMethods.controller.js";
import { deliveryControllers } from "../controllers/delivery.controller.js";
import { stockControllers } from "../controllers/stock.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { deliverySchema } from "../schemas/delivery.schema.js";
import { payMethodSchema } from "../schemas/payMethods.schema.js";
import { productSchema } from "../schemas/product.schema.js";
import { stockSchema } from "../schemas/stock.schema.js";
import { extrasSchema } from "../models/extras.schema.js";
import { extrasControllers } from "../controllers/extras.controller.js";

const router = Router();

// PRODUCTS ROUTES
router.get("/products", productControllers.getProducts);

router.post(
  "/products",
  validateSchema(productSchema),
  productControllers.addProduct
);

router.get("/products/:id", productControllers.getProduct);

router.delete("/products/:id", productControllers.deleteProduct);

router.put(
  "/products/:id",
  validateSchema(productSchema),
  productControllers.updateProduct
);

// PAYMETHODS ROUTES
router.get("/paymethods", payMethodsControllers.getPayMethods);

router.post(
  "/paymethods",
  validateSchema(payMethodSchema),
  payMethodsControllers.addPayMethod
);

router.get("/paymethods/:id", payMethodsControllers.getPayMethod);

router.delete("/paymethods/:id", payMethodsControllers.deletePayMethod);

router.put(
  "/paymethods/:id",
  validateSchema(payMethodSchema),
  payMethodsControllers.updatePayMethod
);

// DELIVERY ROUTERS
router.get("/deliverys", deliveryControllers.getDeliverys);

router.post(
  "/deliverys",
  validateSchema(deliverySchema),
  deliveryControllers.addDelivery
);

router.get("/deliverys/:id", deliveryControllers.getDelivery);

router.delete("/deliverys/:id", deliveryControllers.deleteDelivery);

router.put(
  "/deliverys/:id",
  validateSchema(deliverySchema),
  deliveryControllers.updateDelivery
);

// STOCK ROUTES
router.get("/stock", stockControllers.getStock);

router.get("/item-stock/:id", stockControllers.getItemStock);

router.post("/stock", validateSchema(stockSchema), stockControllers.addStock);

router.delete("/stock/:id", stockControllers.deleteStock);

router.put(
  "/stock/:id",
  validateSchema(stockSchema),
  stockControllers.updateStock
);

// EXTRAS ROUTERS
router.get("/extras", extrasControllers.getExtras);

router.post(
  "/extras",
  validateSchema(extrasSchema),
  extrasControllers.addExtras
);

router.get("/extras/:id", extrasControllers.getExtra);

router.delete("/extras/:id", extrasControllers.deleteExtras);

router.put(
  "/extras/:id",
  validateSchema(deliverySchema),
  extrasControllers.updateExtras
);

export default router;
