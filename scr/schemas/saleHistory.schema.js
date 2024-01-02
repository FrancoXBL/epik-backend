import { z } from "zod";

export const saleSchema = z.object({
  total: z.number({
    message: "El campo 'total' es requerido",
  }),
  client: z.object({
    name: z.string({
      required_error: "Nombre del cliente es requerido",
    }),
    address: z.object({
      street: z.string({
        required_error: "Nombre de la calle es requerido",
      }),
      number: z.string({
        required_error: "Número es requerido",
      }),
    }),
  }),
  delivery: z.object({
    deliveryCost: z.number({
      required_error:"Precio del envio es requerido"
    }),
    name: z.string({
      required_error: "Nombre de la entrega es requerido",
    }),
  }),
  isTakeOut: z.boolean(),
  listSaleProducts: z.array(
    z.object({
      name: z.string({
        required_error: "Se requiere nombre del producto",
      }),
      type: z.string({
        required_error: "Se requiere el tipo de producto",
      }),
      serving: z.string({
        required_error: "Se requiere el serving del producto",
      }),
      price: z
        .number({
          required_error: "Se requiere precio del producto",
        })
        .min(0),
      veggie: z.boolean({
        required_error: "Se requiere especificar si es veggie o no",
      }),
      extra: z
        .number({
          required_error: "Se requiere especificar la cantidad de extras",
        })
        .min(0),
    })
  ),
  listSaleExtras: z.array(
    z
      .object({
        name: z.string({
          required_error: "Se requiere nombre del extra",
        }),
        type: z.string({
          required_error: "Se requiere el tipo de extra",
        }),
        price: z
          .number({
            required_error: "Se requiere precio del extra",
          })
          .min(0),
      })
      .optional()
  ),
  payMethod: z.string({
    required_error: "Método de pago es requerido",
  }),
});
