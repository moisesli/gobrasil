import prisma from '../utils/prisma'
import bcrypt from 'bcrypt'

export default defineEventHandler(async (event) => {
    try {
        // Ler dados do corpo da requisição
        const body = await readBody(event)

        // Validar dados obrigatórios
        if (!body.nome || !body.email || !body.senha || !body.dataNascimento) {
            throw createError({
                statusCode: 400,
                message: 'Todos os campos são obrigatórios'
            })
        }

        // Verificar se email já existe
        const usuarioExistente = await prisma.usuario.findUnique({
            where: { email: body.email }
        })

        if (usuarioExistente) {
            throw createError({
                statusCode: 400,
                message: 'Email já cadastrado'
            })
        }

        // Criptografar senha
        const senhaHash = await bcrypt.hash(body.senha, 10)

        // Criar usuário no banco
        const novoUsuario = await prisma.usuario.create({
            data: {
                nome: body.nome,
                email: body.email,
                senha: senhaHash,
                dataNascimento: new Date(body.dataNascimento)
            }
        })

        // Retornar sucesso (sem enviar a senha)
        return {
            success: true,
            message: 'Usuário cadastrado com sucesso!',
            usuario: {
                id: novoUsuario.id,
                nome: novoUsuario.nome,
                email: novoUsuario.email
            }
        }

    } catch (error: any) {
        // Se for um erro criado por nós, retornar ele
        if (error.statusCode) {
            throw error
        }

        // Erro genérico
        console.error('Erro ao cadastrar usuário:', error)
        throw createError({
            statusCode: 500,
            message: 'Erro ao cadastrar usuário'
        })
    }
})
