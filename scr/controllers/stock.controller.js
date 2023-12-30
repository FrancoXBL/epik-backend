import Stock from "../models/stock.model.js";

const getStock = async (req, res) => {
  const stock = await Stock.find();
  res.json(stock);
};

const getItemStock = async (req, res) => {
  const findItemStock = await Stock.findById(req.params.id);
  if (!findItemStock)
    return res.status(404).json({ message: "Item Stock not found" });
  res.json(findItemStock);
};

const addStock = async (req, res) => {
  const { name, quantity } = req.body;
  const newStock = new Stock({
    name,
    quantity,
  });
  const saveStock = await newStock.save();
  res.json(saveStock);
};

const deleteStock = async (req, res) => {
  const findStock = await Stock.findByIdAndDelete(req.params.id);
  if (!findStock)
    return res.status(404).json({ message: "Stock not found" });
  res.json(findStock);
};

const updateStock = async (req, res) => {
    const { name, quantity } = req.body;
  
    const updatedStock = await Stock.findByIdAndUpdate(
      req.params.id,
      { name, quantity },
      { new: true, runValidators: true }
    );
  
    if (!updatedStock)
      return res.status(404).json({ message: "Stock not found" });
  
    res.json(updatedStock);
  };

export const stockControllers = {
  getStock,
  getItemStock,
  addStock,
  deleteStock,
  updateStock
};