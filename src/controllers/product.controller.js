import Product from "../models/product.model.js";

const getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};
const addProduct = async (req, res) => {
  const { name, type, specs } = req.body;

  const newProduct = new Product({
    name,
    type,
    specs,
  });

  const saveProduct = await newProduct.save();

  res.json(saveProduct);
};
const getProduct = async (req, res) => {
  const findProduct = await Product.findById(req.params.id);

  if (!findProduct)
    return res.status(404).json({ message: "product not found" });

  res.json(findProduct);
};
const deleteProduct = async (req, res) => {
  const findProduct = await Product.findByIdAndDelete(req.params.id);

  if (!findProduct)
    return res.status(404).json({ message: "product not found" });

  res.json(findProduct);
};

const updateProduct = async (req, res) => {
  const { name, type, specs } = req.body;

  const toEditProduct = new Product({
    name,
    type,
    specs,
  });

  const findProduct = await Product.findByIdAndUpdate(
    req.params.id,
    toEditProduct,
    { new: true }
  );

  if (!findProduct)
    return res.status(404).json({ message: "product not found" });

  res.json(findProduct);
};

export const productControllers = {
  getProducts,
  addProduct,
  getProduct,
  updateProduct,
  deleteProduct,
};
