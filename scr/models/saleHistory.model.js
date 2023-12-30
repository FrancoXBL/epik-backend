import mongoose from "mongoose";

const saleSchema = new mongoose.Schema({
  total: {
    type: Number,
    required: true,
    default: 0,
  },
  client: {
    name: {
      type: String,
      required: true,
      default: "",
    },
    address: {
      street: {
        type: String,
        required: true,
        default: "",
      },
      number: {
        type: String,
        required: true,
        default: "",
      },
    },
  },
  delivery: {
    deliveryCost: {
      type: Number,
      default: 0
    },
    name:{
      type: String,
      default: ''
    }
  },
  isTakeOut: {
    type: Boolean,
    required: true,
    default: false,
  },
  listSaleProducts: {
    type: Array,
    required: true,
    default: [],
  },
  listSaleExtras: {
    type: Array,
    required: true,
    default: [],
  },
  payMethod: {
    type: String,
    required:true,
    default:"No especifico metodo de pago"
  }
});

export default mongoose.model("SaleHistory", saleSchema);
