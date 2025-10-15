const nodemailer = require('nodemailer');

console.log('🧪 Testando conexão com Gmail...\n');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'gobrasil.guide@gmail.com',
        pass: 'wsfuumsfgncgclua'
    },
    tls: {
        rejectUnauthorized: false
    }
});

transporter.verify(function(error, success) {
    if (error) {
        console.log('❌ ERRO:', error.message);
        console.log('\n📋 Detalhes completos:', error);
    } else {
        console.log('✅ Servidor está pronto para enviar emails!');
        console.log('✅ Credenciais corretas!');
        
        // Enviar email de teste
        const mailOptions = {
            from: '"Go Brazil" <gobrasil.guide@gmail.com>',
            to: 'lelefernanda2002@gmail.com',
            subject: 'Teste de Email - Go Brazil',
            text: 'Se você recebeu este email, o sistema está funcionando!'
        };
        
        transporter.sendMail(mailOptions, function(error, info) {
            if (error) {
                console.log('❌ Erro ao enviar:', error.message);
            } else {
                console.log('✅ Email enviado com sucesso!');
                console.log('📧 ID:', info.messageId);
            }
        });
    }
});
