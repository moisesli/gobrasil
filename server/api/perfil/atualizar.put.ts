import prisma from '../../utils/prisma'

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event)

        // Validar ID do usuário
        if (!body.id) {
            throw createError({
                statusCode: 400,
                message: 'ID do usuário é obrigatório'
            })
        }

        // Buscar usuário existente
        const usuarioExistente = await prisma.usuario.findUnique({
            where: { id: body.id }
        })

        if (!usuarioExistente) {
            throw createError({
                statusCode: 404,
                message: 'Usuário não encontrado'
            })
        }

        // Preparar dados para atualização (apenas campos permitidos)
        const dadosAtualizacao: any = {}

        if (body.nome) dadosAtualizacao.nome = body.nome
        if (body.dataNascimento) dadosAtualizacao.dataNascimento = new Date(body.dataNascimento)
        if (body.telefone !== undefined) dadosAtualizacao.telefone = body.telefone
        if (body.fotoPerfil !== undefined) dadosAtualizacao.fotoPerfil = body.fotoPerfil

        // Se está mudando o email, verificar se já existe
        if (body.email && body.email !== usuarioExistente.email) {
            const emailJaExiste = await prisma.usuario.findUnique({
                where: { email: body.email }
            })

            if (emailJaExiste) {
                throw createError({
                    statusCode: 400,
                    message: 'Este email já está em uso'
                })
            }

            dadosAtualizacao.email = body.email
        }

        // Atualizar usuário
        const usuarioAtualizado = await prisma.usuario.update({
            where: { id: body.id },
            data: dadosAtualizacao
        })

        // Retornar dados atualizados (sem senha)
        return {
            success: true,
            message: 'Perfil atualizado com sucesso!',
            usuario: {
                id: usuarioAtualizado.id,
                nome: usuarioAtualizado.nome,
                email: usuarioAtualizado.email,
                dataNascimento: usuarioAtualizado.dataNascimento,
                telefone: usuarioAtualizado.telefone,
                fotoPerfil: usuarioAtualizado.fotoPerfil,
                criadoEm: usuarioAtualizado.criadoEm
            }
        }

    } catch (error: any) {
        if (error.statusCode) {
            throw error
        }

        console.error('Erro ao atualizar perfil:', error)
        throw createError({
            statusCode: 500,
            message: 'Erro ao atualizar perfil'
        })
    }
})
