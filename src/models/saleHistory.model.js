import mongoose from "mongoose";

const { Schema } = mongoose;
// Esquema para la dirección del cliente
const AddressSchema = new Schema({
  street: String,
  number: String,
});

// Esquema para el cliente
const ClientSchema = new Schema({
  name: String,
  address: AddressSchema,
});

// Esquema para los productos listados
const ProductSchema = new Schema({
  name: String,
  type: String,
  serving: String,
  isVeggie: Boolean,
  price: Number,
  observations: String,
});

// Esquema para el ticket
const TicketSchema = new Schema({
  total: Number,
  client: ClientSchema,
  deliveryCost: Number,
  isTakeOut: Boolean,
  listProducts: [ProductSchema],
  listExtras: [Schema.Types.Mixed], // Utiliza Mixed para un array que puede contener cualquier cosa
  orderNumber: Number,
});

// Esquema principal para la venta
const SaleSchema = new Schema({
  sale: {
    ticket: TicketSchema,
    id: String, // Podrías considerar usar mongoose.Types.ObjectId para un identificador único
  },
  delivery: String,
  payMethod: String,
  date: String,
});

export default mongoose.model("SaleHistory", SaleSchema);
