import { z } from "zod";

export const extrasSchema = z.object({
  name: z
    .string({
      required_error: "Se requiere nombre del cadete",
    })
    .min(3, {
      message: "Ingrese un nombre de 3 a 15 caracteres",
    })
    .max(15, {
      message: "Ingrese un nombre de 3 a 15 caracteres",
    }),
  price: z.number({
    required_error: "Se requiere un monto",
  }),
  serving: z.string({
    required_error: "Se requiere un serving",
  }),
});
