import SaleHistory from "../models/saleHistory.model.js";
import Product from '../models/product.model.js'
import PayMethods from '../models/payMethods.model.js'
import Delivery from '../models/delivery.model.js'
// Obtener todas las entradas de historial de ventas
const getSaleHistory = async (req, res) => {
  try {
    const saleHistory = await SaleHistory.find()
    res.json(saleHistory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener una entrada de historial de ventas por su ID
const getSale = async (req, res) => {
  try {
    const findSale = await SaleHistory.findById(req.params.id);
    if (!findSale)
      return res
        .status(404)
        .json({ message: "Historial de venta no encontrado" });
    res.json(findSale);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Agregar una nueva entrada de historial de ventas
const addSaleHistory = async (req, res) => {
  try {
    const {
      sale,
      delivery,
      payMethod,
      date
    } = req.body;

    const newSaleHistory = new SaleHistory({
      sale,
      delivery,
      payMethod,
      date
    });
    const saveSaleHistory = await newSaleHistory.save();
    res.status(201).json(saveSaleHistory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Eliminar una entrada de historial de ventas por su ID
const deleteSaleHistory = async (req, res) => {
  try {
    const findSaleHistory = await SaleHistory.findByIdAndDelete(req.params.id);
    if (!findSaleHistory)
      return res
        .status(404)
        .json({ message: "Historial de venta no encontrado" });
    res.json(findSaleHistory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar una entrada de historial de ventas por su ID
const updateSaleHistory = async (req, res) => {
  try {
    const {
      total,
      client,
      delivery,
      isTakeOut,
      listSaleProducts,
      listSaleExtras,
      payMethod
    } = req.body;


    const updatedSaleHistory = await SaleHistory.findByIdAndUpdate(
      req.params.id,
      {
        total,
        client,
        delivery,
        isTakeOut,
        listSaleProducts,
        listSaleExtras,
        payMethod
      },
      { new: true, runValidators: true }
    );
    if (!updatedSaleHistory)
      return res
        .status(404)
        .json({ message: "Historial de venta no encontrado" });
    res.json(updatedSaleHistory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const saleHistoryControllers = {
  getSaleHistory,
  getSale,
  addSaleHistory,
  deleteSaleHistory,
  updateSaleHistory,
};
