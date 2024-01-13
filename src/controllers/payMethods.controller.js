import PayMethods from "../models/payMethods.model.js";

const getPayMethods = async (req, res) => {
  const payMethods = await PayMethods.find();
  res.json(payMethods);
};
const addPayMethod = async (req, res) => {
  const { payMethod } = req.body;

  const newPayMethod = new PayMethods({
    payMethod,
  });

  const savePayMethod = await newPayMethod.save();

  res.json(savePayMethod);
};
const getPayMethod = async (req, res) => {
  const findPayMethod = await PayMethods.findById(req.params.id);

  if (!findPayMethod)
    return res.status(404).json({ message: "pay method not found" });

  res.json(findPayMethod);
};
const deletePayMethod = async (req, res) => {
  const findPayMethod = await PayMethods.findByIdAndDelete(req.params.id);

  if (!findPayMethod)
    return res.status(404).json({ message: "pay method not found" });

  res.json(findPayMethod);
};

const updatePayMethod = async (req, res) => {
  const { payMethod } = req.body;

  const findPayMethod = await PayMethods.findByIdAndUpdate(
    req.params.id,
    { payMethod },
    { new: true }
  );

  if (!findPayMethod)
    return res.status(404).json({ message: "pay method not found" });

  res.json(findPayMethod);
};

export const payMethodsControllers = {
  getPayMethods,
  addPayMethod,
  getPayMethod,
  updatePayMethod,
  deletePayMethod,
};
