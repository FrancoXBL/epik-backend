import { z } from "zod";

export const saleSchema = z.object({
  sale: z.object({
    ticket: z.object({
      total: z.number({
        required_error: "El campo 'total' es requerido",
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
      deliveryCost: z.number({
        required_error: "Precio del envio es requerido",
      }),
      isTakeOut: z.boolean(),
      listProducts: z.array(
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
          isVeggie: z.boolean({
            required_error: "Se requiere especificar si es veggie o no",
          }),
          price: z.number({
            required_error: "Se requiere precio del producto",
          }).min(0),
          observations: z.string().optional(),
        })
      ),
      listExtras: z.array(
        z.object({
          name: z.string({
            required_error: "Se requiere nombre del extra",
          }),
          type: z.string({
            required_error: "Se requiere el tipo de extra",
          }),
          price: z.number({
            required_error: "Se requiere precio del extra",
          }).min(0),
        }).optional()
      ),
      orderNumber: z.number(),
    }),
    id: z.string(),
  }),
  delivery: z.string(),
  payMethod: z.string({
    required_error: "Método de pago es requerido",
  }),
  date: z.string(),
});
