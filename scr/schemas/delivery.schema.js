import { z } from "zod";

export const deliverySchema = z.object({
  name: z
    .string({
      required_error: "Se requiere nombre del cadete",
    })
    .min(3, {
      message: "Ingrese un nombre de 3 a 15 caracteres",
    }).max(15, {
        message: "Ingrese un nombre de 3 a 15 caracteres"
    }),
  minPayment: z.number({
    required_error: "Se requiere un pago minimo",
  }),
});
