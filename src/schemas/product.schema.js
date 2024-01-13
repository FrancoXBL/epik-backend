import { z } from 'zod'

export const productSchema = z.object({
    name: z.string({
        required_error: "Se requiere nombre para el producto"
    }).min(3, {
    message: "El nombre deve tener mas de 3 caracteres"
    }),
    type: z.string({
        required_error: "Se requiere el tipo de producto"
    }),
    specs: z.array(z.object({
        serving: z.string(),
        price: z.number(),
    }))
})