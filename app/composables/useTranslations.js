import { ref, computed } from 'vue'

// Estado global do idioma
const currentLanguage = ref('pt')

// Todas as traduções da aplicação
const translations = {
  pt: {
    // Header
    language: 'Idioma',
    home: 'Início',
    about: 'Sobre Nós',
    plans: 'Planos',
    guide: 'Guia do Brasil',
    faq: 'FAQ',
    contact: 'Contato',
    chatbot: 'Chatbot',
    login: 'Entrar',
    register: 'Cadastrar',
    
    // Hero Section
    heroTitle: 'Descubra o Brasil',
    heroSubtitle: 'Explore a beleza e a cultura do Brasil com nosso suporte completo para estrangeiros.',
    heroButton: 'Comece a explorar',
    
    // Destinos Populares
    popularDestinationsTitle: 'Destinos Populares',
    rioDescription: 'Praias icônicas e paisagens deslumbrantes.',
    saoPauloDescription: 'Centro financeiro e cultural vibrante.',
    salvadorDescription: 'Cidade histórica com rica cultura afro-brasileira.',
    
    // Planeje Viagem
    planTripTitle: 'Planeje sua Viagem',
    planTripSubtitle: 'Oferecemos ferramentas e suporte para que sua viagem ao Brasil seja inesquecível.',
    chatbotSupportTitle: 'Suporte via Chatbot',
    chatbotSupportDescription: 'Obtenha respostas rápidas para suas dúvidas com nosso chatbot inteligente.',
    personalizedAdviceTitle: 'Assessoria Personalizada',
    personalizedAdviceDescription: 'Receba ajuda especializada para planejar sua viagem dos sonhos.',
    destinationGuideTitle: 'Guia de Destinos',
    destinationGuideDescription: 'Explore nossos guias detalhados para os melhores destinos no Brasil.',
    
    // Formulários
    email: 'E-mail',
    password: 'Senha',
    name: 'Nome',
    birthDate: 'Data de Nascimento',
    emailPlaceholder: 'Digite seu e-mail',
    passwordPlaceholder: 'Digite sua senha',
    namePlaceholder: 'Digite seu nome completo',
    birthDatePlaceholder: 'DD/MM/AAAA',
    rememberMe: 'Lembrar de mim',
    forgotPassword: 'Esqueceu a senha?',
    noAccount: 'Não tem conta?',
    signUpHere: 'Cadastre-se aqui',
    alreadyHaveAccount: 'Já tem conta?',
    loginHere: 'Entre aqui',
    
    // Página Sobre Nós
    aboutTitle: 'Sobre Nós',
    aboutText1: 'Planejar uma viagem ou mudança para o Brasil envolve muitas perguntas — desde as mais importantes, como documentação e custo de vida, até as mais simples, como quanto custa um café, um Uber ou até mesmo um produto no supermercado.',
    aboutText2: 'Nós acreditamos que toda dúvida importa e pode fazer diferença na sua experiência. Por isso, nosso trabalho é oferecer informações claras e atualizadas para estrangeiros que querem viajar, morar ou conhecer melhor o Brasil.',
    aboutFindHere: 'Aqui você encontra:',
    aboutVisa: 'Orientações sobre vistos e documentação;',
    aboutDestinations: 'Dicas de destinos turísticos e culturais;',
    aboutLiving: 'Informações sobre moradia, transporte e custo de vida;',
    aboutQuestions: 'Respostas para as suas curiosidades do dia a dia;',
    aboutRecommendations: 'Recomendações úteis para quem deseja aproveitar ao máximo o país.',
    aboutConclusion: 'Seja qual for a sua pergunta grande ou pequena, estamos aqui para responder e ajudar você a se sentir seguro, confiante e bem informado.',
    aboutCTA: 'Entre em contato, faça suas perguntas e descubra o Brasil com a gente!',
    aboutContactButton: 'Entre em Contato',
    aboutHeroSubtitle: 'Conectando você ao Brasil com informação de qualidade e suporte especializado',
    aboutMissionLabel: 'Nossa Missão',
    aboutMissionTitle: 'Facilitando sua experiência no Brasil',
    aboutServicesLabel: 'O que oferecemos',
    aboutServicesSubtitle: 'Suporte completo para tornar sua jornada no Brasil segura e inesquecível',
    aboutServiceDoc: 'Documentação',
    aboutServiceDest: 'Destinos',
    aboutServiceCost: 'Custo de Vida',
    aboutServiceConsult: 'Consultoria',
    aboutServiceRec: 'Recomendações',
    aboutServiceSupport: 'Suporte 24/7',
    aboutServiceSupportDesc: 'Assistência contínua em múltiplos idiomas',
    aboutStat1: 'Dúvidas Respondidas',
    aboutStat2: 'Guias Disponíveis',
    aboutStat3: 'Suporte',
    aboutStat4: 'Confiável',
    
    // Página FAQ
    faqTitle: 'Perguntas Frequentes',
    faqSubtitle: 'Encontre respostas para as perguntas mais comuns sobre viagens ao Brasil.',
    faqQuestion1: 'Quem pode usar este site?',
    faqAnswer1: 'Qualquer pessoa interessada em viajar, morar ou estudar no Brasil. O conteúdo é voltado especialmente a estrangeiros da América do Sul, como peruanos, chilenos, venezuelanos, bolivianos e colombianos, mas pode ajudar viajantes de qualquer país.',
    faqQuestion2: 'Preciso pagar para usar o site?',
    faqAnswer2Part1: 'Não. O site oferece um plano gratuito com acesso ilimitado ao chat e uma consulta gratuita de até 30 minutos.',
    faqAnswer2Part2: 'No entanto, quem quiser suporte ilimitado pode assinar o Plano Plus, com custo mensal acessível e atendimento direto com uma brasileira nativa.',
    faqQuestion3: 'Qual a diferença entre o plano gratuito e o plano Plus?',
    faqAnswer3Part1: 'O plano gratuito permite fazer perguntas básicas e ter uma única consulta de orientação.',
    faqAnswer3Part2: 'O Plano Plus oferece acesso ilimitado ao chat, suporte personalizado, ajuda com documentação e dicas adaptadas ao seu caso específico.',
    faqQuestion4: 'Quais países precisam de visto para entrar no Brasil?',
    faqAnswer4Part1: 'Cidadãos de países como Peru, Chile, Bolívia, Venezuela e Colômbia podem entrar no Brasil sem visto para turismo, graças a acordos de livre circulação entre os países sul-americanos.',
    faqAnswer4Part2: 'Já visitantes de fora da região, como Europa, Estados Unidos, Canadá e Austrália, precisam verificar as regras específicas — alguns exigem visto eletrônico (e-Visa) a partir de 2025.',
    faqQuestion5: 'É possível viver no Brasil legalmente sem visto?',
    faqAnswer5: 'Não. Para residir, trabalhar ou estudar é necessário um tipo de visto válido ou autorização de residência. O site oferece orientação sobre quais documentos você precisa e como regularizar sua situação.',
    faqQuestion6: 'O Brasil oferece ajuda social a estrangeiros?',
    faqAnswer6: 'Sim. Estrangeiros com residência legal têm direito a serviços públicos como SUS (saúde gratuita), CAPS (apoio psicológico), CREAS (assistência familiar) e até programas de auxílio, como Bolsa Família, dependendo do caso.',
    faqQuestion7: 'Posso trabalhar no Brasil como estrangeiro?',
    faqAnswer7Part1: 'Sim, mas é necessário ter autorização de trabalho ou visto de residência.',
    faqAnswer7Part2: 'O site fornece orientações sobre como solicitar documentos, adaptar o currículo e buscar oportunidades formais.',
    faqQuestion8: 'O atendimento do site é online?',
    faqAnswer8: 'Sim. Todo o suporte é feito online, tanto no chat quanto nas consultas personalizadas, para facilitar o acesso de quem ainda não está no Brasil.',
    faqQuestion9: 'Posso cancelar o plano quando quiser?',
    faqAnswer9: 'Sim. O cancelamento é simples e pode ser feito a qualquer momento, sem taxas adicionais.',
    faqQuestion10: 'Como posso entrar em contato direto?',
    faqAnswer10: 'Você pode enviar suas dúvidas pelo chat disponível no site ou agendar uma consulta personalizada pelo formulário de contato.',
    faqCTATitle: 'Ainda tem dúvidas?',
    faqCTASubtitle: 'Entre em contato conosco e nossa equipe terá prazer em ajudá-lo com qualquer pergunta adicional.',
    faqCTAButton: 'Fale Conosco',
    
    // Página Planos
    plansTitle: 'Nossos Planos',
    plansHeroSubtitle: 'Escolha o plano ideal para sua jornada ao Brasil',
    plansLabel: 'Planos',
    plansMainTitle: 'Escolha Seu Plano',
    plansSubtitle: 'Descubra os planos ideais para receber todo o suporte que você precisa no Brasil. Oferecemos soluções personalizadas para quem quer viver, visitar ou se adaptar ao país com segurança.',
    plansFree: 'GRÁTIS',
    plansPopular: 'POPULAR',
    planMonth: 'mês',
    
    // Plano Gratuito
    planFreeTitle: 'Free',
    planFreeSubtitle: '"Descobrindo o Brasil"',
    planFreePrice: 'GRÁTIS',
    planFreePriceDesc: '100% gratuito',
    planFreeFeature1: 'Chat ilimitado com o assistente virtual',
    planFreeFeature2: '1 consulta gratuita de até 30 minutos com uma brasileira nativa',
    planFreeFeature3: 'Tire dúvidas sobre custo de vida, moradia, alimentação, transporte e dicas de viagem',
    planFreeFeature4: 'Ideal para quem está começando a planejar a mudança ou uma visita ao Brasil',
    planFreeButton: 'Começar Grátis',
    
    // Plano Plus
    planPlusTitle: 'Plus',
    planPlusSubtitle: '"Viver no Brasil"',
    planPlusPriceDesc: 'Cobrança mensal, cancele quando quiser',
    planPlusFeature1: 'Chat ilimitado com o assistente virtual',
    planPlusFeature2: 'Consultoria pessoal ilimitada — tire todas as dúvidas diretamente comigo',
    planPlusFeature3: 'Orientação detalhada sobre documentação, moradia, trabalho e adaptação cultural',
    planPlusFeature4: 'Acesso a guias e recursos exclusivos para facilitar sua nova vida no Brasil',
    planPlusFeature5: 'Suporte contínuo para cada etapa da sua jornada',
    planPlusButton: 'Assinar Plus',
    
    // FAQ Planos
    plansFAQTitle: 'Perguntas Frequentes',
    plansFAQSubtitle: 'Tire suas dúvidas sobre nossos planos',
    plansFAQ1Question: 'Posso mudar de plano depois?',
    plansFAQ1Answer: 'Sim! Você pode atualizar do plano gratuito para o Plus a qualquer momento. Basta entrar em contato conosco.',
    plansFAQ2Question: 'Como funciona a consulta gratuita do Plano Gratuito?',
    plansFAQ2Answer: 'Após se cadastrar, você poderá agendar uma chamada de até 30 minutos com uma brasileira nativa para tirar suas principais dúvidas.',
    plansFAQ3Question: 'O Plano Plus tem período de fidelidade?',
    plansFAQ3Answer: 'Não! Você pode cancelar a qualquer momento, sem multas ou taxas adicionais.',
    
    // CTA Planos
    plansCTATitle: 'Pronto para Começar Sua Jornada?',
    plansCTASubtitle: 'Entre em contato conosco e descubra como podemos ajudar você a realizar seu sonho de conhecer ou viver no Brasil.',
    plansCTAButton: 'Fale Conosco',
    
    // Página Guia do Brasil
    guideTitle: 'Guia do Brasil',
    guideSubtitle: 'Seu guia completo para descobrir o Brasil. Dicas, destinos, cultura e muito mais para tornar sua viagem inesquecível.',
    guideDescription: 'O Brasil é o maior país da América do Sul, com clima tropical predominante e estações diferentes em cada região. No Norte, o clima é quente e úmido; no Sul, as temperaturas podem cair bastante no inverno. O idioma oficial é o português, e a cultura é marcada pela diversidade — resultado da mistura de povos indígenas, africanos e europeus.',
    guideCostOfLivingTitle: 'Custo de Vida',
    guideCostOfLivingText: 'O custo de vida varia conforme a cidade. Em capitais como São Paulo e Rio de Janeiro, o aluguel de um apartamento simples pode custar entre R$ 1.500 e R$ 3.000 por mês. Em cidades menores, os valores são mais acessíveis, e a qualidade de vida costuma ser melhor. Uma refeição simples custa, em média, de R$ 25 a R$ 40, e o transporte público gira em torno de R$ 5 por passagem. Aplicativos como Uber e 99 são amplamente utilizados.',
    guideDocumentationTitle: 'Documentação e Vistos',
    guideDocumentationText1: 'Cidadãos de países sul-americanos, como Peru, Venezuela, Chile, Bolívia e Colômbia, podem entrar no Brasil como turistas sem visto, apresentando apenas o documento de identidade (RG). Isso é possível graças a acordos regionais de livre circulação, que permitem a entrada e permanência de até 90 dias entre países vizinhos.',
    guideDocumentationText2: 'Cidadãos da União Europeia também não precisam de visto para turismo ou negócios de curta duração (até 90 dias), devido a acordos de reciprocidade com o governo brasileiro.',
    guideDocumentationText3: '',
    guideDocumentationText4: '',
    guideWorkStudyTitle: 'Trabalho e Estudo',
    guideWorkStudyText: 'O mercado de trabalho brasileiro é competitivo, mas há boas oportunidades em áreas como tecnologia, educação, hotelaria e comércio. Para trabalhar legalmente, é necessário possuir visto de trabalho ou autorização de residência. O Brasil conta com universidades públicas e privadas de qualidade, e muitas oferecem programas de intercâmbio e bolsas para estrangeiros.',
    guideHealthSafetyTitle: 'Saúde e Segurança',
    guideHealthSafetyText: 'O sistema público de saúde, o SUS, é gratuito e acessível a todos os residentes, inclusive estrangeiros regularizados. Hospitais e postos de saúde municipais oferecem consultas médicas, exames e vacinas sem custo. Hospitais privados oferecem atendimento mais rápido, porém com custo adicional. Em relação à segurança, recomenda-se atenção em locais movimentados, evitar exibir objetos de valor e optar sempre por transporte confiável.',
    guideSocialBenefitsTitle: 'Benefícios Sociais e Apoio Público',
    guideSocialBenefitsText: 'O Brasil oferece uma rede ampla de assistência social gratuita, principalmente nas cidades pequenas e médias, onde o atendimento costuma ser mais próximo e acessível. Entre os principais programas estão: cesta básica e auxílio-alimentação; casas populares; SUS; Bolsa Família; CAPS; PAT; CREAS.',
    guideCultureTitle: 'Cultura e Costumes',
    guideCultureText: 'O povo brasileiro é acolhedor e valoriza o contato pessoal. Cumprimentos com aperto de mão ou beijo no rosto são comuns, variando conforme a região. A culinária é rica e diversa, com pratos tradicionais como feijoada, moqueca, acarajé e pão de queijo. As principais celebrações nacionais incluem o Carnaval, as Festas Juninas e o Réveillon nas praias.',
    guideTransportTitle: 'Transporte e Comunicação',
    guideTransportText: 'As grandes cidades contam com metrô, ônibus e transporte por aplicativos. Em regiões menores, os aplicativos de corrida são a principal alternativa. Chips de celular pré-pagos podem ser adquiridos com passaporte ou documento nacional, e a internet móvel é estável nas áreas urbanas, com cobertura 4G ampla e 5G em expansão nas capitais.',
    guideTipsTitle: 'Dicas Úteis',
    guideTipsText: 'Mantenha cópias dos seus documentos e guarde o passaporte em local seguro. Prefira casas de câmbio oficiais para troca de dinheiro. Os meses de dezembro a fevereiro são os mais quentes e ideais para turismo de praia, mas também correspondem à alta temporada. Aplicativos recomendados: Google Maps, 99, Uber, iFood, Nubank e Inter.',
    
    // Página Contato
    contactTitle: 'Contato',
    contactSubtitle: 'Entre em contato conosco para planejar sua viagem dos sonhos ao Brasil.',
    contactName: 'Nome',
    contactMessage: 'Mensagem',
    contactSendButton: 'Enviar Mensagem',
    
    // Página Chatbot
    chatbotTitle: 'Chatbot de Suporte',
    chatbotSubtitle: 'Converse com nosso assistente virtual para tirar suas dúvidas sobre o Brasil.',
    chatbotDevelopment: 'Chatbot em desenvolvimento...',
    chatbotComingSoon: 'Em breve você poderá conversar com nosso assistente virtual!',
    chatbotPlaceholder: 'Digite sua pergunta...',
    chatbotSendButton: 'Enviar'
  },
  en: {
    // Header
    language: 'Language',
    home: 'Home',
    about: 'About Us',
    plans: 'Plans',
    guide: 'Brazil Guide',
    faq: 'FAQ',
    contact: 'Contact',
    chatbot: 'Chatbot',
    login: 'Login',
    register: 'Sign Up',
    
    // Hero Section
    heroTitle: 'Discover Brazil',
    heroSubtitle: 'Explore the beauty and culture of Brazil with our complete support for foreigners.',
    heroButton: 'Start exploring',
    
    // Destinos Populares
    popularDestinationsTitle: 'Popular Destinations',
    rioDescription: 'Iconic beaches and stunning landscapes.',
    saoPauloDescription: 'Vibrant financial and cultural center.',
    salvadorDescription: 'Historic city with rich Afro-Brazilian culture.',
    
    // Planeje Viagem
    planTripTitle: 'Plan Your Trip',
    planTripSubtitle: 'We offer tools and support to make your trip to Brazil unforgettable.',
    chatbotSupportTitle: 'Chatbot Support',
    chatbotSupportDescription: 'Get quick answers to your questions with our intelligent chatbot.',
    personalizedAdviceTitle: 'Personalized Advice',
    personalizedAdviceDescription: 'Receive specialized help to plan your dream trip.',
    destinationGuideTitle: 'Destination Guide',
    destinationGuideDescription: 'Explore our detailed guides for the best destinations in Brazil.',
    
    // Formulários
    email: 'Email',
    password: 'Password',
    name: 'Name',
    birthDate: 'Birth Date',
    emailPlaceholder: 'Enter your email',
    passwordPlaceholder: 'Enter your password',
    namePlaceholder: 'Enter your full name',
    birthDatePlaceholder: 'MM/DD/YYYY',
    rememberMe: 'Remember me',
    forgotPassword: 'Forgot password?',
    noAccount: "Don't have an account?",
    signUpHere: 'Sign up here',
    alreadyHaveAccount: 'Already have an account?',
    loginHere: 'Login here',
    
    // About Us Page
    aboutTitle: 'About Us',
    aboutText1: 'Planning a trip or move to Brazil involves many questions — from the most important ones, like documentation and cost of living, to the simplest ones, like how much a coffee, an Uber, or even a supermarket product costs.',
    aboutText2: 'We believe that every question matters and can make a difference in your experience. That\'s why our job is to provide clear and updated information for foreigners who want to travel, live, or get to know Brazil better.',
    aboutFindHere: 'Here you will find:',
    aboutVisa: 'Guidance on visas and documentation;',
    aboutDestinations: 'Tips on tourist and cultural destinations;',
    aboutLiving: 'Information about housing, transportation, and cost of living;',
    aboutQuestions: 'Answers to your everyday curiosities;',
    aboutRecommendations: 'Useful recommendations for those who want to make the most of the country.',
    aboutConclusion: 'Whatever your question big or small, we are here to answer and help you feel safe, confident, and well-informed.',
    aboutCTA: 'Get in touch, ask your questions, and discover Brazil with us!',
    aboutContactButton: 'Contact Us',
    aboutHeroSubtitle: 'Connecting you to Brazil with quality information and specialized support',
    aboutMissionLabel: 'Our Mission',
    aboutMissionTitle: 'Facilitating your experience in Brazil',
    aboutServicesLabel: 'What we offer',
    aboutServicesSubtitle: 'Complete support to make your journey in Brazil safe and unforgettable',
    aboutServiceDoc: 'Documentation',
    aboutServiceDest: 'Destinations',
    aboutServiceCost: 'Cost of Living',
    aboutServiceConsult: 'Consulting',
    aboutServiceRec: 'Recommendations',
    aboutServiceSupport: '24/7 Support',
    aboutServiceSupportDesc: 'Continuous assistance in multiple languages',
    aboutStat1: 'Questions Answered',
    aboutStat2: 'Available Guides',
    aboutStat3: 'Support',
    aboutStat4: 'Reliable',
    
    // FAQ Page
    faqTitle: 'Frequently Asked Questions',
    faqSubtitle: 'Find answers to the most common questions about traveling to Brazil.',
    faqQuestion1: 'Who can use this website?',
    faqAnswer1: 'Anyone interested in traveling, living, or studying in Brazil. The content is especially aimed at foreigners from South America, such as Peruvians, Chileans, Venezuelans, Bolivians, and Colombians, but it can help travelers from any country.',
    faqQuestion2: 'Do I need to pay to use the website?',
    faqAnswer2Part1: 'No. The website offers a free plan with unlimited chat access and one free consultation of up to 30 minutes.',
    faqAnswer2Part2: 'However, those who want unlimited support can subscribe to the Plus Plan, with an affordable monthly cost and direct assistance from a native Brazilian.',
    faqQuestion3: 'What is the difference between the free plan and the Plus plan?',
    faqAnswer3Part1: 'The free plan allows you to ask basic questions and have a single orientation consultation.',
    faqAnswer3Part2: 'The Plus Plan offers unlimited chat access, personalized support, help with documentation, and tips tailored to your specific case.',
    faqQuestion4: 'Which countries need a visa to enter Brazil?',
    faqAnswer4Part1: 'Citizens of countries such as Peru, Chile, Bolivia, Venezuela, and Colombia can enter Brazil without a visa for tourism, thanks to free movement agreements between South American countries.',
    faqAnswer4Part2: 'Visitors from outside the region, such as Europe, United States, Canada, and Australia, need to check specific rules — some require an electronic visa (e-Visa) starting in 2025.',
    faqQuestion5: 'Is it possible to live in Brazil legally without a visa?',
    faqAnswer5: 'No. To reside, work, or study, you need a valid visa type or residence authorization. The website provides guidance on which documents you need and how to regularize your situation.',
    faqQuestion6: 'Does Brazil offer social assistance to foreigners?',
    faqAnswer6: 'Yes. Foreigners with legal residence have access to public services such as SUS (free healthcare), CAPS (psychological support), CREAS (family assistance), and even aid programs like Bolsa Família, depending on the case.',
    faqQuestion7: 'Can I work in Brazil as a foreigner?',
    faqAnswer7Part1: 'Yes, but you need to have a work authorization or residence visa.',
    faqAnswer7Part2: 'The website provides guidance on how to apply for documents, adapt your resume, and seek formal opportunities.',
    faqQuestion8: 'Is the website support online?',
    faqAnswer8: 'Yes. All support is provided online, both in chat and personalized consultations, to facilitate access for those who are not yet in Brazil.',
    faqQuestion9: 'Can I cancel the plan whenever I want?',
    faqAnswer9: 'Yes. Cancellation is simple and can be done at any time, without additional fees.',
    faqQuestion10: 'How can I get in direct contact?',
    faqAnswer10: 'You can send your questions via the chat available on the website or schedule a personalized consultation through the contact form.',
    faqCTATitle: 'Still have questions?',
    faqCTASubtitle: 'Contact us and our team will be happy to help you with any additional questions.',
    faqCTAButton: 'Contact Us',
    
    // Plans Page
    plansTitle: 'Our Plans',
    plansHeroSubtitle: 'Choose the ideal plan for your journey to Brazil',
    plansLabel: 'Plans',
    plansMainTitle: 'Choose Your Plan',
    plansSubtitle: 'Discover the ideal plans to receive all the support you need in Brazil. We offer personalized solutions for those who want to live, visit, or adapt to the country safely.',
    plansFree: 'FREE',
    plansPopular: 'POPULAR',
    planMonth: 'month',
    
    // Free Plan
    planFreeTitle: 'Free Plan',
    planFreeSubtitle: '"Discovering Brazil"',
    planFreePrice: 'FREE',
    planFreePriceDesc: '100% free',
    planFreeFeature1: 'Unlimited chat with virtual assistant',
    planFreeFeature2: '1 free call or chat of up to 30 minutes with a native Brazilian',
    planFreeFeature3: 'Ask questions about cost of living, housing, food, transportation, and travel tips',
    planFreeFeature4: 'Ideal for those starting to plan their move or visit to Brazil',
    planFreeButton: 'Start Free',
    
    // Plus Plan
    planPlusTitle: 'Plus Plan',
    planPlusSubtitle: '"Living in Brazil"',
    planPlusPriceDesc: 'Monthly billing, cancel anytime',
    planPlusFeature1: 'Unlimited chat with virtual assistant',
    planPlusFeature2: 'Unlimited personal consulting — ask all your questions directly to me',
    planPlusFeature3: 'Detailed guidance on documentation, housing, work, and cultural adaptation',
    planPlusFeature4: 'Access to exclusive guides and resources to facilitate your new life in Brazil',
    planPlusFeature5: 'Continuous support for every step of your journey',
    planPlusButton: 'Subscribe Plus',
    
    // Plans FAQ
    plansFAQTitle: 'Frequently Asked Questions',
    plansFAQSubtitle: 'Get answers about our plans',
    plansFAQ1Question: 'Can I change plans later?',
    plansFAQ1Answer: 'Yes! You can upgrade from the free plan to Plus at any time. Just contact us.',
    plansFAQ2Question: 'How does the Free Plan consultation work?',
    plansFAQ2Answer: 'After signing up, you can schedule a video call of up to 30 minutes with a native Brazilian to answer your main questions.',
    plansFAQ3Question: 'Does the Plus Plan have a loyalty period?',
    plansFAQ3Answer: 'No! You can cancel at any time, with no penalties or additional fees.',
    
    // Plans CTA
    plansCTATitle: 'Ready to Start Your Journey?',
    plansCTASubtitle: 'Contact us and discover how we can help you achieve your dream of visiting or living in Brazil.',
    plansCTAButton: 'Contact Us',
    
    // Brazil Guide Page
    guideTitle: 'Brazil Guide',
    guideSubtitle: 'Your complete guide to discovering Brazil. Tips, destinations, culture and much more to make your trip unforgettable.',
    guideDescription: 'Brazil is the largest country in South America, with a predominantly tropical climate and different seasons in each region. In the North, the climate is hot and humid; in the South, temperatures can drop considerably in winter. The official language is Portuguese, and the culture is marked by diversity — the result of a mixture of indigenous, African and European peoples.',
    guideCostOfLivingTitle: 'Cost of Living',
    guideCostOfLivingText: 'The cost of living varies by city. In capitals like São Paulo and Rio de Janeiro, renting a simple apartment can cost between R$ 1,500 and R$ 3,000 per month. In smaller cities, prices are more affordable, and quality of life is often better. A simple meal costs, on average, R$ 25 to R$ 40, and public transport is around R$ 5 per trip. Apps like Uber and 99 are widely used.',
    guideDocumentationTitle: 'Documentation and Visas',
    guideDocumentationText1: 'Citizens of South American countries, such as Peru, Venezuela, Chile, Bolivia and Colombia, can enter Brazil as tourists without a visa, presenting only their identity document (ID card). This is possible thanks to regional free movement agreements, which allow entry and stay for up to 90 days between neighboring countries.',
    guideDocumentationText2: 'European Union citizens also do not need a visa for tourism or short-term business (up to 90 days), due to reciprocity agreements with the Brazilian government.',
    guideDocumentationText3: '',
    guideDocumentationText4: '',
    guideWorkStudyTitle: 'Work and Study',
    guideWorkStudyText: 'The Brazilian job market is competitive, but there are good opportunities in areas such as technology, education, hospitality and commerce. To work legally, you must have a work visa or residence permit. Brazil has quality public and private universities, and many offer exchange programs and scholarships for foreigners.',
    guideHealthSafetyTitle: 'Health and Safety',
    guideHealthSafetyText: 'The public health system, SUS, is free and accessible to all residents, including regularized foreigners. Municipal hospitals and health centers offer medical consultations, exams and vaccines at no cost. Private hospitals offer faster service, but at an additional cost. Regarding safety, attention is recommended in crowded places, avoid displaying valuables and always opt for reliable transport.',
    guideSocialBenefitsTitle: 'Social Benefits and Public Support',
    guideSocialBenefitsText: 'Brazil offers a wide network of free social assistance, especially in small and medium-sized cities, where care tends to be closer and more accessible. Among the main programs are: basic food basket and food assistance; popular housing; SUS; Bolsa Família; CAPS; PAT; CREAS.',
    guideCultureTitle: 'Culture and Customs',
    guideCultureText: 'Brazilians are welcoming and value personal contact. Greetings with a handshake or kiss on the cheek are common, varying by region. The cuisine is rich and diverse, with traditional dishes such as feijoada, moqueca, acarajé and pão de queijo. The main national celebrations include Carnival, June Festivals and New Year\'s Eve on the beaches.',
    guideTransportTitle: 'Transport and Communication',
    guideTransportText: 'Large cities have subway, buses and app-based transport. In smaller regions, ride-hailing apps are the main alternative. Prepaid cell phone chips can be purchased with a passport or national document, and mobile internet is stable in urban areas, with wide 4G coverage and expanding 5G in state capitals.',
    guideTipsTitle: 'Useful Tips',
    guideTipsText: 'Keep copies of your documents and store your passport in a safe place. Prefer official currency exchange offices. The months from December to February are the hottest and ideal for beach tourism, but also correspond to high season. Recommended apps: Google Maps, 99, Uber, iFood, Nubank and Inter.',
    
    // Contact Page
    contactTitle: 'Contact',
    contactSubtitle: 'Contact us to plan your dream trip to Brazil.',
    contactName: 'Name',
    contactMessage: 'Message',
    contactSendButton: 'Send Message',
    
    // Chatbot Page
    chatbotTitle: 'Support Chatbot',
    chatbotSubtitle: 'Chat with our virtual assistant to answer your questions about Brazil.',
    chatbotDevelopment: 'Chatbot under development...',
    chatbotComingSoon: 'Soon you will be able to chat with our virtual assistant!',
    chatbotPlaceholder: 'Type your question...',
    chatbotSendButton: 'Send'
  },
  es: {
    // Header
    language: 'Idioma',
    home: 'Inicio',
    about: 'Sobre',
    plans: 'Planes',
    guide: 'Guía',
    faq: 'FAQ',
    contact: 'Contacto',
    chatbot: 'Chatbot',
    login: 'Iniciar Sesión',
    register: 'Registrarse',
    
    // Hero Section
    heroTitle: 'Descubre Brasil',
    heroSubtitle: 'Explora la belleza y cultura de Brasil con nuestro soporte completo para extranjeros.',
    heroButton: 'Comenzar a explorar',
    
    // Destinos Populares
    popularDestinationsTitle: 'Destinos Populares',
    rioDescription: 'Playas icónicas y paisajes impresionantes.',
    saoPauloDescription: 'Centro financiero y cultural vibrante.',
    salvadorDescription: 'Ciudad histórica con rica cultura afrobrasileña.',
    
    // Planeje Viagem
    planTripTitle: 'Planifica tu Viaje',
    planTripSubtitle: 'Ofrecemos herramientas y soporte para que tu viaje a Brasil sea inolvidable.',
    chatbotSupportTitle: 'Soporte por Chatbot',
    chatbotSupportDescription: 'Obtén respuestas rápidas a tus preguntas con nuestro chatbot inteligente.',
    personalizedAdviceTitle: 'Asesoría Personalizada',
    personalizedAdviceDescription: 'Recibe ayuda especializada para planificar tu viaje de ensueño.',
    destinationGuideTitle: 'Guía de Destinos',
    destinationGuideDescription: 'Explora nuestras guías detalladas para los mejores destinos en Brasil.',
    
    // Formulários
    email: 'Correo',
    password: 'Contraseña',
    name: 'Nombre',
    birthDate: 'Fecha de Nacimiento',
    emailPlaceholder: 'Ingrese su correo',
    passwordPlaceholder: 'Ingrese su contraseña',
    namePlaceholder: 'Ingrese su nombre completo',
    birthDatePlaceholder: 'DD/MM/AAAA',
    rememberMe: 'Recordarme',
    forgotPassword: '¿Olvidó la contraseña?',
    noAccount: '¿No tiene cuenta?',
    signUpHere: 'Regístrese aquí',
    alreadyHaveAccount: '¿Ya tiene cuenta?',
    loginHere: 'Inicie sesión aquí',
    
    // Página Sobre Nosotros
    aboutTitle: 'Sobre Nosotros',
    aboutText1: 'Planificar un viaje o mudanza a Brasil implica muchas preguntas — desde las más importantes, como documentación y costo de vida, hasta las más simples, como cuánto cuesta un café, un Uber o incluso un producto en el supermercado.',
    aboutText2: 'Creemos que toda duda importa y puede hacer diferencia en tu experiencia. Por eso, nuestro trabajo es ofrecer información clara y actualizada para extranjeros que quieren viajar, vivir o conocer mejor Brasil.',
    aboutFindHere: 'Aquí encontrarás:',
    aboutVisa: 'Orientaciones sobre visas y documentación;',
    aboutDestinations: 'Consejos de destinos turísticos y culturales;',
    aboutLiving: 'Información sobre vivienda, transporte y costo de vida;',
    aboutQuestions: 'Respuestas a tus curiosidades del día a día;',
    aboutRecommendations: 'Recomendaciones útiles para quienes desean aprovechar al máximo el país.',
    aboutConclusion: 'Sea cual sea tu pregunta grande o pequeña, estamos aquí para responder y ayudarte a sentirte seguro, confiado y bien informado.',
    aboutCTA: '¡Ponte en contacto, haz tus preguntas y descubre Brasil con nosotros!',
    aboutContactButton: 'Contáctanos',
    aboutHeroSubtitle: 'Conectándote con Brasil con información de calidad y soporte especializado',
    aboutMissionLabel: 'Nuestra Misión',
    aboutMissionTitle: 'Facilitando tu experiencia en Brasil',
    aboutServicesLabel: 'Lo que ofrecemos',
    aboutServicesSubtitle: 'Soporte completo para hacer tu jornada en Brasil segura e inolvidable',
    aboutServiceDoc: 'Documentación',
    aboutServiceDest: 'Destinos',
    aboutServiceCost: 'Costo de Vida',
    aboutServiceConsult: 'Consultoría',
    aboutServiceRec: 'Recomendaciones',
    aboutServiceSupport: 'Soporte 24/7',
    aboutServiceSupportDesc: 'Asistencia continua en múltiples idiomas',
    aboutStat1: 'Dudas Respondidas',
    aboutStat2: 'Guías Disponibles',
    aboutStat3: 'Soporte',
    aboutStat4: 'Confiable',
    
    // Página FAQ
    faqTitle: 'Preguntas Frecuentes',
    faqSubtitle: 'Encuentra respuestas a las preguntas más comunes sobre viajes a Brasil.',
    faqQuestion1: '¿Quién puede usar este sitio web?',
    faqAnswer1: 'Cualquier persona interesada en viajar, vivir o estudiar en Brasil. El contenido está especialmente dirigido a extranjeros de América del Sur, como peruanos, chilenos, venezolanos, bolivianos y colombianos, pero puede ayudar a viajeros de cualquier país.',
    faqQuestion2: '¿Necesito pagar para usar el sitio web?',
    faqAnswer2Part1: 'No. El sitio web ofrece un plan gratuito con acceso ilimitado al chat y una consulta gratuita de hasta 30 minutos.',
    faqAnswer2Part2: 'Sin embargo, quienes deseen soporte ilimitado pueden suscribirse al Plan Plus, con un costo mensual accesible y atención directa de una brasileña nativa.',
    faqQuestion3: '¿Cuál es la diferencia entre el plan gratuito y el plan Plus?',
    faqAnswer3Part1: 'El plan gratuito permite hacer preguntas básicas y tener una única consulta de orientación.',
    faqAnswer3Part2: 'El Plan Plus ofrece acceso ilimitado al chat, soporte personalizado, ayuda con documentación y consejos adaptados a tu caso específico.',
    faqQuestion4: '¿Qué países necesitan visa para ingresar a Brasil?',
    faqAnswer4Part1: 'Ciudadanos de países como Perú, Chile, Bolivia, Venezuela y Colombia pueden ingresar a Brasil sin visa para turismo, gracias a acuerdos de libre circulación entre países sudamericanos.',
    faqAnswer4Part2: 'Los visitantes de fuera de la región, como Europa, Estados Unidos, Canadá y Australia, deben verificar las reglas específicas — algunos requieren una visa electrónica (e-Visa) a partir de 2025.',
    faqQuestion5: '¿Es posible vivir en Brasil legalmente sin visa?',
    faqAnswer5: 'No. Para residir, trabajar o estudiar es necesario un tipo de visa válido o autorización de residencia. El sitio web proporciona orientación sobre qué documentos necesitas y cómo regularizar tu situación.',
    faqQuestion6: '¿Brasil ofrece ayuda social a extranjeros?',
    faqAnswer6: 'Sí. Los extranjeros con residencia legal tienen acceso a servicios públicos como el SUS (atención médica gratuita), CAPS (apoyo psicológico), CREAS (asistencia familiar) e incluso programas de ayuda como Bolsa Família, dependiendo del caso.',
    faqQuestion7: '¿Puedo trabajar en Brasil como extranjero?',
    faqAnswer7Part1: 'Sí, pero es necesario tener autorización de trabajo o visa de residencia.',
    faqAnswer7Part2: 'El sitio web proporciona orientación sobre cómo solicitar documentos, adaptar tu currículum y buscar oportunidades formales.',
    faqQuestion8: '¿La atención del sitio web es en línea?',
    faqAnswer8: 'Sí. Todo el soporte se proporciona en línea, tanto en el chat como en las consultas personalizadas, para facilitar el acceso a quienes aún no están en Brasil.',
    faqQuestion9: '¿Puedo cancelar el plan cuando quiera?',
    faqAnswer9: 'Sí. La cancelación es simple y se puede hacer en cualquier momento, sin tarifas adicionales.',
    faqQuestion10: '¿Cómo puedo contactar directamente?',
    faqAnswer10: 'Puedes enviar tus preguntas a través del chat disponible en el sitio web o programar una consulta personalizada mediante el formulario de contacto.',
    faqCTATitle: '¿Todavía tienes preguntas?',
    faqCTASubtitle: 'Contáctanos y nuestro equipo estará encantado de ayudarte con cualquier pregunta adicional.',
    faqCTAButton: 'Contáctanos',
    
    // Página Planes
    plansTitle: 'Nuestros Planes',
    plansHeroSubtitle: 'Elige el plan ideal para tu viaje a Brasil',
    plansLabel: 'Planes',
    plansMainTitle: 'Elige Tu Plan',
    plansSubtitle: 'Descubre los planes ideales para recibir todo el apoyo que necesitas en Brasil. Ofrecemos soluciones personalizadas para quienes quieren vivir, visitar o adaptarse al país con seguridad.',
    plansFree: 'GRATIS',
    plansPopular: 'POPULAR',
    planMonth: 'mes',
    
    // Plan Gratuito
    planFreeTitle: 'Plan Gratuito',
    planFreeSubtitle: '"Descubriendo Brasil"',
    planFreePrice: 'GRATIS',
    planFreePriceDesc: '100% gratis',
    planFreeFeature1: 'Chat ilimitado con el asistente virtual',
    planFreeFeature2: '1 consulta gratuita de hasta 30 minutos con una brasileña nativa',
    planFreeFeature3: 'Resuelve dudas sobre costo de vida, vivienda, alimentación, transporte y consejos de viaje',
    planFreeFeature4: 'Ideal para quienes están comenzando a planificar la mudanza o una visita a Brasil',
    planFreeButton: 'Comenzar Gratis',
    
    // Plan Plus
    planPlusTitle: 'Plan Plus',
    planPlusSubtitle: '"Vivir en Brasil"',
    planPlusPriceDesc: 'Facturación mensual, cancela cuando quieras',
    planPlusFeature1: 'Chat ilimitado con el asistente virtual',
    planPlusFeature2: 'Consultoría personal ilimitada — resuelve todas tus dudas directamente conmigo',
    planPlusFeature3: 'Orientación detallada sobre documentación, vivienda, trabajo y adaptación cultural',
    planPlusFeature4: 'Acceso a guías y recursos exclusivos para facilitar tu nueva vida en Brasil',
    planPlusFeature5: 'Soporte continuo para cada etapa de tu jornada',
    planPlusButton: 'Suscribirse Plus',
    
    // FAQ Planes
    plansFAQTitle: 'Preguntas Frecuentes',
    plansFAQSubtitle: 'Resuelve tus dudas sobre nuestros planes',
    plansFAQ1Question: '¿Puedo cambiar de plan después?',
    plansFAQ1Answer: '¡Sí! Puedes actualizar del plan gratuito al Plus en cualquier momento. Solo tienes que contactarnos.',
    plansFAQ2Question: '¿Cómo funciona la consulta gratuita del Plan Gratuito?',
    plansFAQ2Answer: 'Después de registrarte, podrás agendar una llamada de hasta 30 minutos con una brasileña nativa para resolver tus principales dudas.',
    plansFAQ3Question: '¿El Plan Plus tiene período de fidelidad?',
    plansFAQ3Answer: '¡No! Puedes cancelar en cualquier momento, sin multas ni tarifas adicionales.',
    
    // CTA Planes
    plansCTATitle: '¿Listo para Comenzar Tu Jornada?',
    plansCTASubtitle: 'Contáctanos y descubre cómo podemos ayudarte a realizar tu sueño de conocer o vivir en Brasil.',
    plansCTAButton: 'Contáctanos',
    
    // Página Guía de Brasil
    guideTitle: 'Guía de Brasil',
    guideSubtitle: 'Tu guía completa para descubrir Brasil. Consejos, destinos, cultura y mucho más para hacer tu viaje inolvidable.',
    guideDescription: 'Brasil es el país más grande de América del Sur, con un clima predominantemente tropical y estaciones diferentes en cada región. En el Norte, el clima es caliente y húmedo; en el Sur, las temperaturas pueden caer considerablemente en invierno. El idioma oficial es el portugués, y la cultura está marcada por la diversidad — resultado de la mezcla de pueblos indígenas, africanos y europeos.',
    guideCostOfLivingTitle: 'Costo de Vida',
    guideCostOfLivingText: 'El costo de vida varía según la ciudad. En capitales como São Paulo y Río de Janeiro, el alquiler de un apartamento simple puede costar entre R$ 1.500 y R$ 3.000 por mes. En ciudades más pequeñas, los valores son más accesibles, y la calidad de vida suele ser mejor. Una comida simple cuesta, en promedio, de R$ 25 a R$ 40, y el transporte público ronda los R$ 5 por pasaje. Aplicaciones como Uber y 99 son ampliamente utilizadas.',
    guideDocumentationTitle: 'Documentación y Visados',
    guideDocumentationText1: 'Ciudadanos de países sudamericanos, como Perú, Venezuela, Chile, Bolivia y Colombia, pueden ingresar a Brasil como turistas sin visa, presentando solo el documento de identidad (cédula). Esto es posible gracias a acuerdos regionales de libre circulación, que permiten la entrada y permanencia de hasta 90 días entre países vecinos.',
    guideDocumentationText2: 'Los ciudadanos de la Unión Europea tampoco necesitan visa para turismo o negocios de corta duración (hasta 90 días), debido a acuerdos de reciprocidad con el gobierno brasileño.',
    guideDocumentationText3: '',
    guideDocumentationText4: '',
    guideWorkStudyTitle: 'Trabajo y Estudio',
    guideWorkStudyText: 'El mercado laboral brasileño es competitivo, pero hay buenas oportunidades en áreas como tecnología, educación, hotelería y comercio. Para trabajar legalmente, es necesario tener visa de trabajo o autorización de residencia. Brasil cuenta con universidades públicas y privadas de calidad, y muchas ofrecen programas de intercambio y becas para extranjeros.',
    guideHealthSafetyTitle: 'Salud y Seguridad',
    guideHealthSafetyText: 'El sistema público de salud, el SUS, es gratuito y accesible para todos los residentes, incluidos extranjeros regularizados. Hospitales y centros de salud municipales ofrecen consultas médicas, exámenes y vacunas sin costo. Los hospitales privados ofrecen atención más rápida, pero con costo adicional. En cuanto a seguridad, se recomienda atención en lugares concurridos, evitar exhibir objetos de valor y optar siempre por transporte confiable.',
    guideSocialBenefitsTitle: 'Beneficios Sociales y Apoyo Público',
    guideSocialBenefitsText: 'Brasil ofrece una amplia red de asistencia social gratuita, principalmente en ciudades pequeñas y medianas, donde la atención suele ser más cercana y accesible. Entre los principales programas están: canasta básica y ayuda alimentaria; casas populares; SUS; Bolsa Família; CAPS; PAT; CREAS.',
    guideCultureTitle: 'Cultura y Costumbres',
    guideCultureText: 'El pueblo brasileño es acogedor y valora el contacto personal. Los saludos con apretón de manos o beso en la mejilla son comunes, variando según la región. La gastronomía es rica y diversa, con platos tradicionales como feijoada, moqueca, acarajé y pan de queso. Las principales celebraciones nacionales incluyen el Carnaval, las Fiestas Juninas y el Fin de Año en las playas.',
    guideTransportTitle: 'Transporte y Comunicación',
    guideTransportText: 'Las grandes ciudades cuentan con metro, autobuses y transporte por aplicaciones. En regiones más pequeñas, las aplicaciones de viaje compartido son la principal alternativa. Chips de celular prepagos pueden adquirirse con pasaporte o documento nacional, y el internet móvil es estable en áreas urbanas, con amplia cobertura 4G y 5G en expansión en las capitales.',
    guideTipsTitle: 'Consejos Útiles',
    guideTipsText: 'Mantenga copias de sus documentos y guarde el pasaporte en un lugar seguro. Prefiera casas de cambio oficiales para cambio de dinero. Los meses de diciembre a febrero son los más calurosos e ideales para turismo de playa, pero también corresponden a temporada alta. Aplicaciones recomendadas: Google Maps, 99, Uber, iFood, Nubank e Inter.',
    
    // Página Contacto
    contactTitle: 'Contacto',
    contactSubtitle: 'Contáctanos para planificar tu viaje de ensueño a Brasil.',
    contactName: 'Nombre',
    contactMessage: 'Mensaje',
    contactSendButton: 'Enviar Mensaje',
    
    // Página Chatbot
    chatbotTitle: 'Chatbot de Soporte',
    chatbotSubtitle: 'Conversa con nuestro asistente virtual para resolver tus dudas sobre Brasil.',
    chatbotDevelopment: 'Chatbot en desarrollo...',
    chatbotComingSoon: '¡Pronto podrás conversar con nuestro asistente virtual!',
    chatbotPlaceholder: 'Escribe tu pregunta...',
    chatbotSendButton: 'Enviar'
  }
}

export const useTranslations = () => {
  // Função para mudar idioma
  const changeLanguage = (newLanguage) => {
    currentLanguage.value = newLanguage
    // Salvar no localStorage
    if (process.client) {
      localStorage.setItem('language', newLanguage)
    }
  }

  // Função para carregar idioma salvo
  const loadSavedLanguage = () => {
    if (process.client) {
      const savedLanguage = localStorage.getItem('language')
      if (savedLanguage && translations[savedLanguage]) {
        currentLanguage.value = savedLanguage
      }
    }
  }

  // Função para obter tradução
  const t = (key) => {
    return translations[currentLanguage.value]?.[key] || key
  }

  // Computed para traduções atuais
  const currentTranslations = computed(() => translations[currentLanguage.value])

  return {
    currentLanguage,
    translations,
    currentTranslations,
    changeLanguage,
    loadSavedLanguage,
    t
  }
}