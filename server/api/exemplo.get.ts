import prisma from '../utils/prisma'

export default defineEventHandler(async () => {
    const usuarios = await prisma.usuario.findMany()
    return usuarios
})
