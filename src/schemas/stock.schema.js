import { z } from 'zod'

export const stockSchema = z.object({
    name: z.string({
        required_error:"Se requiere nombre del producto"
    }),
    quantity: z.number({
        required_error:"Se requiere una cantidad del producto"
    }).min(0, {
        message:"Ingrese como minimo 0 unidades"
    })
})