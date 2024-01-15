import Extras from "../models/extras.model.js";

const getExtras = async (req, res) => {
  const extras = await Extras.find();
  res.json(extras);
};

const getExtra = async (req, res) => {
  const findExtra = await Extras.findById(req.params.id);
  if (!findExtra)
    return res.status(404).json({ message: "Extra not found" });
  res.json(findExtra);
};

const addExtras = async (req, res) => {
  const { name, price, serving } = req.body;
  const newExtras = new Extras({
    name,
    price,
    serving
  });
  const saveExtras = await newExtras.save();
  res.json(saveExtras);
};

const deleteExtras = async (req, res) => {
  const findExtras = await Extras.findByIdAndDelete(req.params.id);
  if (!findExtras)
    return res.status(404).json({ message: "Extras not found" });
  res.json(findExtras);
};

const updateExtras = async (req, res) => {
    const { name, price, serving } = req.body;
  
    const updatedExtras = await Extras.findByIdAndUpdate(
      req.params.id,
      { name, price, serving },
      { new: true, runValidators: true }
    );
  
    if (!updatedExtras)
      return res.status(404).json({ message: "Extras not found" });
  
    res.json(updatedExtras);
  };

  export const extrasControllers = {
    getExtras,
    getExtra,
    addExtras,
    deleteExtras,
    updateExtras
  }