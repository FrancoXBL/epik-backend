import Delivery from "../models/delivery.model.js";

const getDeliverys = async (req, res) => {
  const deliverys = await Delivery.find();
  res.json(deliverys);
};

const getDelivery = async (req, res) => {
  const findDelivery = await Delivery.findById(req.params.id);
  if (!findDelivery)
    return res.status(404).json({ message: "delivery not found" });
  res.json(findDelivery);
};

const addDelivery = async (req, res) => {
  const { name, minPayment } = req.body;
  const newDelivery = new Delivery({
    name,
    minPayment,
  });
  const saveDelivery = await newDelivery.save();
  res.json(saveDelivery);
};

const deleteDelivery = async (req, res) => {
  const findDelivery = await Delivery.findByIdAndDelete(req.params.id);
  if (!findDelivery)
    return res.status(404).json({ message: "delivery not found" });
  res.json(findDelivery);
};

const updateDelivery = async (req, res) => {
    const { name, minPayment } = req.body;
  
    const updatedDelivery = await Delivery.findByIdAndUpdate(
      req.params.id,
      { name, minPayment },
      { new: true, runValidators: true }
    );
  
    if (!updatedDelivery)
      return res.status(404).json({ message: "Delivery not found" });
  
    res.json(updatedDelivery);
  };

  export const deliveryControllers = {
    getDeliverys,
    getDelivery,
    addDelivery,
    deleteDelivery,
    updateDelivery
  }
