import Product from "../models/product.model.js";
import PayMethods from "../models/payMethods.model.js";
import Delivery from "../models/delivery.model.js";
import Stock from "../models/stock.model.js"


export const home = async (req, res) => {
  const products = await Product.find();
  const payMethods = await PayMethods.find();
  const deliverys = await Delivery.find();
  const stock = await Stock.find()

  const data = {
    products,
    payMethods,
    deliverys,
    stock
  };

  res.json(data);
};
