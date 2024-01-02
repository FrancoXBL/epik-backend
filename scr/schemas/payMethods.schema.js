import { z } from 'zod'

export const payMethodSchema = z.object({
    payMethod: z.string({
        required_error: "Ingrese un metodo de pago"
    })
})