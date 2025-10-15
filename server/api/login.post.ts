import prisma from '../utils/prisma'
import bcrypt from 'bcrypt'

export default defineEventHandler(async (event) => {
    try {
        // Ler dados do corpo da requisição
        const body = await readBody(event)

        // Validar dados obrigatórios
        if (!body.email || !body.senha) {
            throw createError({
                statusCode: 400,
                message: 'Email e senha são obrigatórios'
            })
        }

        // Buscar usuário pelo email
        const usuario = await prisma.usuario.findUnique({
            where: { email: body.email }
        })

        // Verificar se usuário existe
        if (!usuario) {
            throw createError({
                statusCode: 401,
                message: 'Email ou senha incorretos'
            })
        }

        // Verificar senha
        const senhaValida = await bcrypt.compare(body.senha, usuario.senha)

        if (!senhaValida) {
            throw createError({
                statusCode: 401,
                message: 'Email ou senha incorretos'
            })
        }

        // Login bem-sucedido - retornar dados do usuário (sem a senha)
        return {
            success: true,
            message: 'Login realizado com sucesso!',
            usuario: {
                id: usuario.id,
                nome: usuario.nome,
                email: usuario.email,
                dataNascimento: usuario.dataNascimento,
                telefone: usuario.telefone,
                fotoPerfil: usuario.fotoPerfil,
                criadoEm: usuario.criadoEm
            }
        }

    } catch (error: any) {
        // Se for um erro criado por nós, retornar ele
        if (error.statusCode) {
            throw error
        }

        // Erro genérico
        console.error('Erro ao fazer login:', error)
        throw createError({
            statusCode: 500,
            message: 'Erro ao processar login'
        })
    }
})
