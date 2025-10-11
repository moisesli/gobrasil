export const chatbotResponses = {
  greetings: {
    patterns: {
      pt: ['oi', 'olá', 'ola', 'hey', 'opa', 'bom dia', 'boa tarde', 'boa noite'],
      en: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening'],
      es: ['hola', 'hey', 'buenos días', 'buenas tardes', 'buenas noches']
    },
    responses: {
      pt: ['Olá! 😊 Como posso ajudar você hoje?', 'Oi! Estou aqui para ajudar. O que você gostaria de saber?'],
      en: ['Hello! 😊 How can I help you today?', 'Hi! I\'m here to help. What would you like to know?'],
      es: ['¡Hola! 😊 ¿Cómo puedo ayudarte hoy?', '¡Hola! Estoy aquí para ayudar. ¿Qué te gustaría saber?']
    }
  },

  // CATEGORIAS ESPECÍFICAS PRIMEIRO (para evitar conflito com categorias genéricas)
  
  // PREÇOS ESPECÍFICOS - CADA ITEM COM SUA CATEGORIA
  price_uber: {
    patterns: {
      pt: ['quanto custa uber', 'preço uber', 'valor uber', 'uber custa', 'quanto é uber', 'quanto pago uber'],
      en: ['how much uber', 'uber price', 'uber cost', 'how much is uber'],
      es: ['cuánto cuesta uber', 'precio uber', 'cuánto es uber', 'cuánto vale uber']
    },
    responses: {
      pt: '🚖 Quanto custa um Uber no Brasil?\n\nDepende da cidade e da distância. Em média, corridas curtas custam entre R$8 e R$20, e trajetos longos entre R$25 e R$60.',
      en: '🚖 How much does an Uber cost in Brazil?\n\nIt depends on the city and distance. On average, short rides cost between R$8 and R$20, and long trips between R$25 and R$60.',
      es: '🚖 ¿Cuánto cuesta un Uber en Brasil?\n\nDepende de la ciudad y la distancia. En promedio, viajes cortos cuestan entre R$8 y R$20, y trayectos largos entre R$25 y R$60.'
    }
  },

  price_coffee: {
    patterns: {
      pt: ['quanto custa café', 'preço café', 'café padaria', 'quanto café', 'café custa'],
      en: ['how much coffee', 'coffee price', 'coffee bakery', 'coffee cost'],
      es: ['cuánto cuesta café', 'precio café', 'café panadería', 'cuánto vale café']
    },
    responses: {
      pt: '☕ Quanto custa um café em uma padaria?\n\nUm café simples custa cerca de R$3 a R$6; com pão de queijo, em torno de R$10.',
      en: '☕ How much does a coffee cost at a bakery?\n\nA simple coffee costs about R$3 to R$6; with pão de queijo (cheese bread), around R$10.',
      es: '☕ ¿Cuánto cuesta un café en una panadería?\n\nUn café simple cuesta cerca de R$3 a R$6; con pão de queijo, alrededor de R$10.'
    }
  },

  price_restaurant: {
    patterns: {
      pt: ['quanto custa restaurante', 'comer restaurante', 'refeição restaurante', 'almoço restaurante', 'jantar restaurante', 'restaurante simples'],
      en: ['how much restaurant', 'eat restaurant', 'meal restaurant', 'lunch restaurant', 'simple restaurant'],
      es: ['cuánto restaurante', 'comer restaurante', 'comida restaurante', 'almuerzo restaurante']
    },
    responses: {
      pt: '🍽️ Quanto custa comer em um restaurante simples?\n\nEntre R$25 e R$40 por pessoa. Em restaurantes por quilo, o preço médio é R$70 o quilo.',
      en: '🍽️ How much does it cost to eat at a simple restaurant?\n\nBetween R$25 and R$40 per person. At pay-by-weight restaurants, the average price is R$70 per kilo.',
      es: '🍽️ ¿Cuánto cuesta comer en un restaurante simple?\n\nEntre R$25 y R$40 por persona. En restaurantes por kilo, el precio promedio es R$70 el kilo.'
    }
  },

  price_bus: {
    patterns: {
      pt: ['quanto custa ônibus', 'passagem ônibus', 'preço ônibus', 'ônibus custa', 'quanto pago ônibus', 'bilhete ônibus'],
      en: ['how much bus', 'bus fare', 'bus ticket', 'bus price', 'bus cost'],
      es: ['cuánto autobús', 'pasaje autobús', 'precio autobús', 'boleto autobús']
    },
    responses: {
      pt: '🚌 Quanto custa uma passagem de ônibus?\n\nNa maioria das cidades, custa entre R$4,50 e R$6,00 por viagem.',
      en: '🚌 How much does a bus ticket cost?\n\nIn most cities, it costs between R$4.50 and R$6.00 per trip.',
      es: '🚌 ¿Cuánto cuesta un pasaje de autobús?\n\nEn la mayoría de las ciudades, cuesta entre R$4,50 y R$6,00 por viaje.'
    }
  },

  price_sim_card: {
    patterns: {
      pt: ['quanto chip', 'preço chip', 'chip celular', 'chip pré-pago', 'chip custa', 'quanto custa chip'],
      en: ['how much sim', 'sim card price', 'phone chip', 'prepaid sim', 'sim cost'],
      es: ['cuánto chip', 'precio chip', 'chip celular', 'chip prepago', 'cuánto cuesta chip']
    },
    responses: {
      pt: '📱 Quanto custa um chip de celular no Brasil?\n\nDepende da operadora. Um chip pré-pago custa cerca de R$10 a R$20, e os planos mensais começam em R$30.',
      en: '📱 How much does a cell phone chip cost in Brazil?\n\nIt depends on the carrier. A prepaid chip costs about R$10 to R$20, and monthly plans start at R$30.',
      es: '📱 ¿Cuánto cuesta un chip de celular en Brasil?\n\nDepende de la operadora. Un chip prepago cuesta cerca de R$10 a R$20, y los planes mensuales empiezan en R$30.'
    }
  },

  price_internet: {
    patterns: {
      pt: ['quanto internet', 'plano internet', 'internet residencial', 'quanto custa internet', 'preço internet'],
      en: ['how much internet', 'internet plan', 'home internet', 'internet cost', 'internet price'],
      es: ['cuánto internet', 'plan internet', 'internet residencial', 'cuánto cuesta internet']
    },
    responses: {
      pt: '🌐 Quanto custa um plano de internet residencial?\n\nEntre R$80 e R$150 por mês, dependendo da velocidade.',
      en: '🌐 How much does a home internet plan cost?\n\nBetween R$80 and R$150 per month, depending on speed.',
      es: '🌐 ¿Cuánto cuesta un plan de internet residencial?\n\nEntre R$80 y R$150 por mes, dependiendo de la velocidad.'
    }
  },

  price_shopping_mall: {
    patterns: {
      pt: ['quanto shopping', 'almoçar shopping', 'comer shopping', 'almoço shopping', 'comida shopping'],
      en: ['how much shopping mall', 'lunch mall', 'eat mall', 'food court'],
      es: ['cuánto shopping', 'almorzar shopping', 'comer shopping', 'comida shopping']
    },
    responses: {
      pt: '🛍️ Quanto custa almoçar em um shopping?\n\nEm média R$35 a R$50, incluindo bebida.',
      en: '🛍️ How much does lunch cost at a mall?\n\nOn average R$35 to R$50, including drinks.',
      es: '🛍️ ¿Cuánto cuesta almorzar en un shopping?\n\nEn promedio R$35 a R$50, incluyendo bebida.'
    }
  },

  price_haircut: {
    patterns: {
      pt: ['quanto corte', 'corte cabelo', 'cortar cabelo', 'preço cabeleireiro', 'quanto cabeleireiro', 'corte simples'],
      en: ['how much haircut', 'haircut price', 'cut hair', 'barber price', 'hair salon'],
      es: ['cuánto corte', 'corte pelo', 'cortar pelo', 'precio peluquería', 'cuánto peluquero']
    },
    responses: {
      pt: '✂️ Quanto custa um corte de cabelo simples?\n\nHomens: R$25 a R$50. Mulheres: R$50 a R$120, dependendo do salão.',
      en: '✂️ How much does a simple haircut cost?\n\nMen: R$25 to R$50. Women: R$50 to R$120, depending on the salon.',
      es: '✂️ ¿Cuánto cuesta un corte de pelo simple?\n\nHombres: R$25 a R$50. Mujeres: R$50 a R$120, dependiendo del salón.'
    }
  },

  price_hotel: {
    patterns: {
      pt: ['quanto hotel', 'diária hotel', 'hotel custa', 'preço hotel', 'quanto hospedagem'],
      en: ['how much hotel', 'hotel rate', 'hotel cost', 'hotel price', 'accommodation cost'],
      es: ['cuánto hotel', 'tarifa hotel', 'precio hotel', 'cuánto hospedaje']
    },
    responses: {
      pt: '🏨 Quanto custa uma diária de hotel?\n\nHotéis simples custam cerca de R$150; hotéis médios, R$250 a R$400.',
      en: '🏨 How much does a hotel night cost?\n\nSimple hotels cost about R$150; mid-range hotels, R$250 to R$400.',
      es: '🏨 ¿Cuánto cuesta una noche de hotel?\n\nHoteles simples cuestan cerca de R$150; hoteles medios, R$250 a R$400.'
    }
  },

  price_taxi: {
    patterns: {
      pt: ['quanto táxi', 'quanto taxi', 'corrida táxi', 'preço táxi', 'táxi custa', 'bandeirada'],
      en: ['how much taxi', 'taxi fare', 'taxi price', 'taxi cost', 'cab fare'],
      es: ['cuánto taxi', 'carrera taxi', 'precio taxi', 'tarifa taxi']
    },
    responses: {
      pt: '🚕 Quanto custa uma corrida de táxi?\n\nA bandeirada (início da corrida) varia entre R$6 e R$8, mais cerca de R$2,50 por km rodado.',
      en: '🚕 How much does a taxi ride cost?\n\nThe flag drop (start of ride) ranges from R$6 to R$8, plus about R$2.50 per km.',
      es: '🚕 ¿Cuánto cuesta una carrera de taxi?\n\nLa bajada de bandera (inicio) varía entre R$6 y R$8, más cerca de R$2,50 por km recorrido.'
    }
  },

  price_gas: {
    patterns: {
      pt: ['quanto gasolina', 'preço gasolina', 'abastecer carro', 'combustível', 'litro gasolina'],
      en: ['how much gas', 'gas price', 'gasoline price', 'fuel car', 'fuel price'],
      es: ['cuánto gasolina', 'precio gasolina', 'llenar tanque', 'combustible']
    },
    responses: {
      pt: '⛽ Quanto custa abastecer um carro no Brasil?\n\nA gasolina custa em média R$6,00 por litro, podendo variar conforme o estado.',
      en: '⛽ How much does it cost to fill up a car in Brazil?\n\nGasoline costs an average of R$6.00 per liter, varying by state.',
      es: '⛽ ¿Cuánto cuesta llenar un auto en Brasil?\n\nLa gasolina cuesta en promedio R$6,00 por litro, pudiendo variar según el estado.'
    }
  },

  price_fast_food: {
    patterns: {
      pt: ['quanto fast food', 'quanto lanche', 'mcdonalds', 'burguer king', 'fast-food custa', 'combo'],
      en: ['how much fast food', 'fast food price', 'mcdonalds', 'burger king', 'combo meal'],
      es: ['cuánto comida rápida', 'cuánto fast food', 'mcdonalds', 'burger king', 'combo']
    },
    responses: {
      pt: '🍔 Quanto custa uma refeição em fast-food?\n\nEm torno de R$30 a R$40 por combo (hambúrguer, batata e refrigerante).',
      en: '🍔 How much does a fast-food meal cost?\n\nAround R$30 to R$40 per combo (burger, fries and drink).',
      es: '🍔 ¿Cuánto cuesta una comida en fast-food?\n\nAlrededor de R$30 a R$40 por combo (hamburguesa, papas y refresco).'
    }
  },

  price_metro: {
    patterns: {
      pt: ['quanto metrô', 'quanto metro', 'passagem metrô', 'bilhete metrô', 'metrô custa'],
      en: ['how much metro', 'how much subway', 'metro fare', 'subway ticket', 'metro cost'],
      es: ['cuánto metro', 'pasaje metro', 'billete metro', 'metro cuesta']
    },
    responses: {
      pt: '🚇 Quanto custa uma passagem de metrô?\n\nCerca de R$5,00, disponível em cidades como São Paulo e Rio de Janeiro.',
      en: '🚇 How much does a metro ticket cost?\n\nAbout R$5.00, available in cities like São Paulo and Rio de Janeiro.',
      es: '🚇 ¿Cuánto cuesta un pasaje de metro?\n\nCerca de R$5,00, disponible en ciudades como São Paulo y Río de Janeiro.'
    }
  },

  price_cinema: {
    patterns: {
      pt: ['quanto cinema', 'ingresso cinema', 'filme cinema', 'cinema custa', 'ir ao cinema'],
      en: ['how much cinema', 'movie ticket', 'cinema ticket', 'go to movies', 'cinema cost'],
      es: ['cuánto cine', 'entrada cine', 'boleto cine', 'ir al cine']
    },
    responses: {
      pt: '🎬 Quanto custa ir ao cinema no Brasil?\n\nEntre R$25 e R$45, dependendo do dia e do cinema.',
      en: '🎬 How much does it cost to go to the cinema in Brazil?\n\nBetween R$25 and R$45, depending on the day and cinema.',
      es: '🎬 ¿Cuánto cuesta ir al cine en Brasil?\n\nEntre R$25 y R$45, dependiendo del día y del cine.'
    }
  },

  price_doctor: {
    patterns: {
      pt: ['quanto médico', 'consulta médica', 'médico particular', 'preço consulta', 'doutor custa'],
      en: ['how much doctor', 'doctor visit', 'medical appointment', 'doctor cost', 'consultation price'],
      es: ['cuánto médico', 'consulta médica', 'médico particular', 'precio consulta']
    },
    responses: {
      pt: '👨‍⚕️ Quanto custa uma consulta médica particular?\n\nEntre R$150 e R$400, dependendo da especialidade e cidade.',
      en: '👨‍⚕️ How much does a private doctor visit cost?\n\nBetween R$150 and R$400, depending on specialty and city.',
      es: '👨‍⚕️ ¿Cuánto cuesta una consulta médica particular?\n\nEntre R$150 y R$400, dependiendo de la especialidad y ciudad.'
    }
  },

  price_living_alone: {
    patterns: {
      pt: ['quanto morar sozinho', 'custo morar sozinho', 'viver sozinho', 'morar sozinho custa', 'gasto mensal'],
      en: ['how much living alone', 'cost living alone', 'live alone cost', 'monthly expenses'],
      es: ['cuánto vivir solo', 'costo vivir solo', 'vivir solo cuesta', 'gastos mensuales']
    },
    responses: {
      pt: '🏠 Quanto custa morar sozinho em uma cidade média?\n\nEm torno de R$2.500 a R$3.500 por mês, incluindo aluguel, alimentação e transporte.',
      en: '🏠 How much does it cost to live alone in a mid-sized city?\n\nAround R$2,500 to R$3,500 per month, including rent, food and transportation.',
      es: '🏠 ¿Cuánto cuesta vivir solo en una ciudad mediana?\n\nAlrededor de R$2.500 a R$3.500 por mes, incluyendo alquiler, comida y transporte.'
    }
  },

  price_money_transfer: {
    patterns: {
      pt: ['quanto transferir', 'enviar dinheiro', 'transferência internacional', 'remessa', 'mandar dinheiro'],
      en: ['how much transfer', 'send money', 'money transfer', 'international transfer', 'remittance'],
      es: ['cuánto transferir', 'enviar dinero', 'transferencia internacional', 'remesa']
    },
    responses: {
      pt: '💸 Quanto custa enviar dinheiro para o Brasil?\n\nServiços como Wise ou Western Union cobram taxas entre 1% e 3% do valor enviado.',
      en: '💸 How much does it cost to send money to Brazil?\n\nServices like Wise or Western Union charge fees between 1% and 3% of the amount sent.',
      es: '💸 ¿Cuánto cuesta enviar dinero a Brasil?\n\nServicios como Wise o Western Union cobran tasas entre 1% y 3% del monto enviado.'
    }
  },

  price_airport_chip: {
    patterns: {
      pt: ['chip aeroporto', 'chip turista', 'comprar chip aeroporto', 'chip no aeroporto'],
      en: ['airport chip', 'tourist chip', 'buy chip airport', 'sim at airport'],
      es: ['chip aeropuerto', 'chip turista', 'comprar chip aeropuerto']
    },
    responses: {
      pt: '📱 Quanto custa comprar um chip para turista no aeroporto?\n\nGeralmente entre R$30 e R$50, com pacote de internet incluído.',
      en: '📱 How much does it cost to buy a tourist chip at the airport?\n\nUsually between R$30 and R$50, with internet package included.',
      es: '📱 ¿Cuánto cuesta comprar un chip para turista en el aeropuerto?\n\nGeneralmente entre R$30 y R$50, con paquete de internet incluido.'
    }
  },

  price_water: {
    patterns: {
      pt: ['quanto água', 'água mineral', 'garrafa água', 'preço água', 'água custa'],
      en: ['how much water', 'mineral water', 'water bottle', 'water price', 'water cost'],
      es: ['cuánto agua', 'agua mineral', 'botella agua', 'precio agua']
    },
    responses: {
      pt: '💧 Quanto custa uma garrafa de água mineral?\n\nEntre R$2 e R$5, dependendo do tamanho.',
      en: '💧 How much does a bottle of mineral water cost?\n\nBetween R$2 and R$5, depending on size.',
      es: '💧 ¿Cuánto cuesta una botella de agua mineral?\n\nEntre R$2 y R$5, dependiendo del tamaño.'
    }
  },

  price_pizza: {
    patterns: {
      pt: ['quanto pizza', 'pizza custa', 'preço pizza', 'pedir pizza', 'quanto custa pizza'],
      en: ['how much pizza', 'pizza cost', 'pizza price', 'order pizza'],
      es: ['cuánto pizza', 'pizza cuesta', 'precio pizza', 'pedir pizza', 'cuánto cuesta pizza']
    },
    responses: {
      pt: '🍕 Quanto custa uma pizza no Brasil?\n\nUma pizza média custa em média R$40 a R$70, dependendo do sabor e da cidade.',
      en: '🍕 How much does a pizza cost in Brazil?\n\nA medium pizza costs on average R$40 to R$70, depending on toppings and city.',
      es: '🍕 ¿Cuánto cuesta una pizza en Brasil?\n\nUna pizza mediana cuesta en promedio R$40 a R$70, dependiendo del sabor y la ciudad.'
    }
  },

  documents: {
    patterns: {
      pt: ['visto', 'visa', 'passaporte', 'documento', 'documentação', 'cpf', 'entrada', 'permissão'],
      en: ['visa', 'passport', 'document', 'documentation', 'entry', 'permission'],
      es: ['visa', 'pasaporte', 'documento', 'documentación', 'entrada', 'permiso']
    },
    responses: {
      pt: '📄 Sobre documentação:\n\n✅ Cidadãos de países sul-americanos NÃO precisam de visto\n✅ Cidadãos da União Europeia, EUA, Canadá, Austrália e Japão também NÃO precisam de visto para turismo\n✅ Passaporte válido é obrigatório\n\nPara mais detalhes, visite nossa página "Guia do Brasil"!',
      en: '📄 About documentation:\n\n✅ Citizens from South American countries DON\'T need a visa\n✅ Citizens from EU, USA, Canada, Australia and Japan also DON\'T need a visa for tourism\n✅ Valid passport is mandatory\n\nFor more details, visit our "Brazil Guide" page!',
      es: '📄 Sobre documentación:\n\n✅ Ciudadanos de países sudamericanos NO necesitan visa\n✅ Ciudadanos de la Unión Europea, EE.UU., Canadá, Australia y Japón tampoco necesitan visa para turismo\n✅ Pasaporte válido es obligatorio\n\n¡Para más detalles, visita nuestra página "Guía de Brasil"!'
    }
  },

  destinations: {
    patterns: {
      pt: ['destino', 'lugar', 'cidade', 'praia', 'visitar', 'turismo', 'turistico', 'atrações', 'pontos'],
      en: ['destination', 'place', 'city', 'beach', 'visit', 'tourism', 'tourist', 'attractions', 'sights'],
      es: ['destino', 'lugar', 'ciudad', 'playa', 'visitar', 'turismo', 'turístico', 'atracciones', 'puntos']
    },
    responses: {
      pt: '🏖️ Principais destinos no Brasil:\n\n🎭 Rio de Janeiro - Cristo Redentor, Copacabana\n🏙️ São Paulo - Gastronomia e cultura\n🏝️ Nordeste - Praias paradisíacas\n🌳 Amazônia - Natureza exuberante\n💃 Salvador - História e cultura afro-brasileira\n\nQuer saber mais sobre algum destino específico?',
      en: '🏖️ Top destinations in Brazil:\n\n🎭 Rio de Janeiro - Christ the Redeemer, Copacabana\n🏙️ São Paulo - Gastronomy and culture\n🏝️ Northeast - Paradisiac beaches\n🌳 Amazon - Exuberant nature\n💃 Salvador - Afro-Brazilian history and culture\n\nWant to know more about a specific destination?',
      es: '🏖️ Principales destinos en Brasil:\n\n🎭 Río de Janeiro - Cristo Redentor, Copacabana\n🏙️ São Paulo - Gastronomía y cultura\n🏝️ Nordeste - Playas paradisíacas\n🌳 Amazonía - Naturaleza exuberante\n💃 Salvador - Historia y cultura afrobrasileña\n\n¿Quieres saber más sobre algún destino específico?'
    }
  },

  costs: {
    patterns: {
      pt: ['custo', 'preço', 'quanto custa', 'valor', 'caro', 'barato', 'quanto', 'gasto', 'orçamento'],
      en: ['cost', 'price', 'how much', 'value', 'expensive', 'cheap', 'budget', 'spending'],
      es: ['costo', 'precio', 'cuánto cuesta', 'valor', 'caro', 'barato', 'cuánto', 'gasto', 'presupuesto']
    },
    responses: {
      pt: '💰 Sobre custos no Brasil:\n\n🏨 Hospedagem: R$ 80-500/dia\n🍽️ Alimentação: R$ 30-150/dia\n🚕 Transporte: R$ 20-100/dia\n🎫 Atrações: R$ 50-200\n\nO custo varia muito dependendo da cidade e estilo de viagem!',
      en: '💰 About costs in Brazil:\n\n🏨 Accommodation: R$ 80-500/day\n🍽️ Food: R$ 30-150/day\n🚕 Transportation: R$ 20-100/day\n🎫 Attractions: R$ 50-200\n\nCosts vary greatly depending on city and travel style!',
      es: '💰 Sobre costos en Brasil:\n\n🏨 Alojamiento: R$ 80-500/día\n🍽️ Alimentación: R$ 30-150/día\n🚕 Transporte: R$ 20-100/día\n🎫 Atracciones: R$ 50-200\n\n¡El costo varía mucho según la ciudad y estilo de viaje!'
    }
  },

  language: {
    patterns: {
      pt: ['idioma', 'lingua', 'falar', 'português', 'portugues', 'inglês', 'ingles', 'espanhol'],
      en: ['language', 'speak', 'portuguese', 'english', 'spanish', 'talk'],
      es: ['idioma', 'lengua', 'hablar', 'portugués', 'inglés', 'español']
    },
    responses: {
      pt: '🗣️ Sobre o idioma:\n\nO idioma oficial é o PORTUGUÊS brasileiro. Em áreas turísticas, é comum encontrar pessoas que falam inglês e espanhol.\n\nDica: Aprender algumas frases básicas em português ajuda muito! 😊',
      en: '🗣️ About language:\n\nThe official language is Brazilian PORTUGUESE. In tourist areas, it\'s common to find people who speak English and Spanish.\n\nTip: Learning some basic Portuguese phrases helps a lot! 😊',
      es: '🗣️ Sobre el idioma:\n\nEl idioma oficial es el PORTUGUÉS brasileño. En áreas turísticas, es común encontrar personas que hablan inglés y español.\n\n¡Consejo: Aprender algunas frases básicas en portugués ayuda mucho! 😊'
    }
  },

  weather: {
    patterns: {
      pt: ['clima', 'tempo', 'temperatura', 'chuva', 'quente', 'frio', 'melhor época', 'quando ir', 'época do ano', 'época para visitar'],
      en: ['weather', 'climate', 'temperature', 'rain', 'hot', 'cold', 'best time', 'when to go', 'best season'],
      es: ['clima', 'tiempo', 'temperatura', 'lluvia', 'calor', 'frío', 'mejor época', 'cuándo ir', 'época del año']
    },
    responses: {
      pt: '☀️ Qual é a melhor época do ano para visitar o Brasil?\n\nDe dezembro a março é VERÃO e faz calor. De maio a setembro, o clima é mais ameno e chove menos.\n\n🌞 Verão (Dez-Mar): 25-40°C, mais chuvas\n🍂 Outono (Mar-Jun): 20-30°C, agradável\n❄️ Inverno (Jun-Set): 15-25°C, seco\n🌸 Primavera (Set-Dez): 22-32°C, florido',
      en: '☀️ What\'s the best time of year to visit Brazil?\n\nDecember to March is SUMMER and it\'s hot. May to September, the weather is milder with less rain.\n\n🌞 Summer (Dec-Mar): 25-40°C, more rain\n🍂 Fall (Mar-Jun): 20-30°C, pleasant\n❄️ Winter (Jun-Sep): 15-25°C, dry\n🌸 Spring (Sep-Dec): 22-32°C, blooming',
      es: '☀️ ¿Cuál es la mejor época del año para visitar Brasil?\n\nDe diciembre a marzo es VERANO y hace calor. De mayo a septiembre, el clima es más templado y llueve menos.\n\n🌞 Verano (Dic-Mar): 25-40°C, más lluvia\n🍂 Otoño (Mar-Jun): 20-30°C, agradable\n❄️ Invierno (Jun-Sep): 15-25°C, seco\n🌸 Primavera (Sep-Dic): 22-32°C, florido'
    }
  },

  safety: {
    patterns: {
      pt: ['segurança', 'seguranca', 'seguro', 'perigoso', 'perigo', 'risco', 'cuidado', 'país seguro', 'pais seguro'],
      en: ['safety', 'secure', 'dangerous', 'danger', 'risk', 'safe', 'safe country'],
      es: ['seguridad', 'seguro', 'peligroso', 'peligro', 'riesgo', 'cuidado', 'país seguro']
    },
    responses: {
      pt: '🛡️ O Brasil é um país seguro para viajar?\n\nDepende da região. Cidades grandes exigem mais cuidado, mas em cidades pequenas a segurança costuma ser boa.\n\n✅ Evite ostentação\n✅ Não ande com muito dinheiro\n✅ Fique em áreas turísticas à noite\n✅ Use apps de transporte confiáveis',
      en: '🛡️ Is Brazil a safe country to travel?\n\nIt depends on the region. Big cities require more care, but in small towns safety is usually good.\n\n✅ Avoid showing off\n✅ Don\'t carry too much cash\n✅ Stay in tourist areas at night\n✅ Use reliable transport apps',
      es: '🛡️ ¿Es Brasil un país seguro para viajar?\n\nDepende de la región. Las ciudades grandes requieren más cuidado, pero en ciudades pequeñas la seguridad suele ser buena.\n\n✅ Evita la ostentación\n✅ No lleves mucho dinero\n✅ Quédate en áreas turísticas por la noche\n✅ Usa apps de transporte confiables'
    }
  },

  food: {
    patterns: {
      pt: ['comida', 'comer', 'restaurante', 'gastronomia', 'prato', 'culinária', 'feijoada'],
      en: ['food', 'eat', 'restaurant', 'gastronomy', 'dish', 'cuisine', 'meal'],
      es: ['comida', 'comer', 'restaurante', 'gastronomía', 'plato', 'culinaria', 'feijoada']
    },
    responses: {
      pt: '🍽️ Gastronomia brasileira:\n\n🍖 Churrasco - Carne grelhada\n🍲 Feijoada - Prato tradicional\n🥘 Moqueca - Peixe com leite de coco\n🧀 Pão de queijo - Delícia mineira\n🥤 Caipirinha - Drink nacional',
      en: '🍽️ Brazilian gastronomy:\n\n🍖 Churrasco - Grilled meat\n🍲 Feijoada - Traditional dish\n🥘 Moqueca - Fish with coconut milk\n🧀 Pão de queijo - Cheese bread\n🥤 Caipirinha - National drink',
      es: '🍽️ Gastronomía brasileña:\n\n🍖 Churrasco - Carne a la parrilla\n🍲 Feijoada - Plato tradicional\n🥘 Moqueca - Pescado con leche de coco\n🧀 Pão de queijo - Pan de queso\n🥤 Caipirinha - Bebida nacional'
    }
  },

  contact: {
    patterns: {
      pt: ['contato', 'falar', 'email', 'whatsapp', 'telefone', 'ajuda', 'dúvida'],
      en: ['contact', 'talk', 'email', 'whatsapp', 'phone', 'help', 'question'],
      es: ['contacto', 'hablar', 'email', 'whatsapp', 'teléfono', 'ayuda', 'duda']
    },
    responses: {
      pt: '📞 Entre em contato conosco:\n\n💬 WhatsApp: [Clique aqui]\n📧 Email: contato@gobrazil.com\n⏰ Horário: Seg-Sex 9h-18h\n\nVisite nossa página de CONTATO!',
      en: '📞 Contact us:\n\n💬 WhatsApp: [Click here]\n📧 Email: contato@gobrazil.com\n⏰ Hours: Mon-Fri 9am-6pm\n\nVisit our CONTACT page!',
      es: '📞 Contáctanos:\n\n💬 WhatsApp: [Haz clic aquí]\n📧 Email: contato@gobrazil.com\n⏰ Horario: Lun-Vie 9h-18h\n\n¡Visita nuestra página de CONTACTO!'
    }
  },

  plans: {
    patterns: {
      pt: ['plano', 'pacote', 'serviço', 'servico', 'oferta'],
      en: ['plan', 'package', 'service', 'offer'],
      es: ['plan', 'paquete', 'servicio', 'oferta']
    },
    responses: {
      pt: '🎯 Nossos serviços:\n\n✨ Consultoria personalizada\n📋 Orientação sobre documentação\n🗺️ Roteiros customizados\n🏨 Dicas de hospedagem\n\nVisite nossa página PLANOS!',
      en: '🎯 Our services:\n\n✨ Personalized consulting\n📋 Documentation guidance\n🗺️ Customized itineraries\n🏨 Accommodation tips\n\nVisit our PLANS page!',
      es: '🎯 Nuestros servicios:\n\n✨ Consultoría personalizada\n📋 Orientación sobre documentación\n🗺️ Itinerarios personalizados\n🏨 Consejos de alojamiento\n\n¡Visita nuestra página PLANES!'
    }
  },

  currency: {
    patterns: {
      pt: ['moeda', 'real', 'dinheiro', 'dólar', 'dolar', 'euro', 'câmbio', 'cambio', 'usar dólares', 'trocar'],
      en: ['currency', 'money', 'dollar', 'euro', 'exchange', 'real', 'use dollars'],
      es: ['moneda', 'dinero', 'dólar', 'euro', 'cambio', 'real', 'usar dólares', 'cambiar']
    },
    responses: {
      pt: '💵 Que moeda é usada no Brasil?\n\nA moeda oficial é o REAL (R$)\n\n💳 Posso usar dólares?\nO ideal é trocar por reais, pois a maioria dos estabelecimentos não aceita dólares.\n\n✅ Cartões amplamente aceitos\n🏧 Caixas eletrônicos disponíveis',
      en: '💵 What currency is used in Brazil?\n\nThe official currency is the REAL (R$)\n\n💳 Can I use dollars?\nIt\'s best to exchange for reais, as most places don\'t accept dollars.\n\n✅ Cards widely accepted\n🏧 ATMs available everywhere',
      es: '💵 ¿Qué moneda se usa en Brasil?\n\nLa moneda oficial es el REAL (R$)\n\n💳 ¿Puedo usar dólares?\nLo ideal es cambiar a reales, pues la mayoría de establecimientos no acepta dólares.\n\n✅ Tarjetas ampliamente aceptadas\n🏧 Cajeros automáticos disponibles'
    }
  },

  vaccines: {
    patterns: {
      pt: ['vacina', 'saúde', 'saude', 'médico', 'medico', 'hospital', 'sus', 'atendimento'],
      en: ['vaccine', 'health', 'doctor', 'hospital', 'medical', 'healthcare'],
      es: ['vacuna', 'salud', 'médico', 'hospital', 'atención']
    },
    responses: {
      pt: '💉 Sobre saúde:\n\n🔸 Vacina de febre amarela recomendada\n\n🏥 O SUS é gratuito para estrangeiros?\nSim! O SUS atende gratuitamente qualquer pessoa.\n\n📋 Basta apresentar documento de identificação.',
      en: '💉 About health:\n\n🔸 Yellow fever vaccine recommended\n\n🏥 Is SUS free for foreigners?\nYes! SUS provides free care to anyone.\n\n📋 Just present identification.',
      es: '💉 Sobre salud:\n\n🔸 Vacuna contra fiebre amarilla recomendada\n\n🏥 ¿El SUS es gratuito para extranjeros?\n¡Sí! El SUS atiende gratuitamente a cualquier persona.\n\n📋 Solo presenta identificación.'
    }
  },

  internet: {
    patterns: {
      pt: ['internet', 'wi-fi', 'wifi', 'aplicativo', 'app', 'whatsapp', 'uber'],
      en: ['internet', 'wi-fi', 'wifi', 'app', 'application', 'whatsapp', 'uber'],
      es: ['internet', 'wi-fi', 'wifi', 'aplicación', 'app', 'whatsapp', 'uber']
    },
    responses: {
      pt: '📱 Internet e Apps:\n\n✅ Fácil encontrar Wi-Fi em quase todos os lugares\n\n📲 Apps mais usados:\n• WhatsApp\n• Google Maps\n• iFood\n• Uber / 99',
      en: '📱 Internet & Apps:\n\n✅ Easy to find Wi-Fi almost everywhere\n\n📲 Most used apps:\n• WhatsApp\n• Google Maps\n• iFood\n• Uber / 99',
      es: '📱 Internet y Apps:\n\n✅ Fácil encontrar Wi-Fi en casi todos lados\n\n📲 Apps más usados:\n• WhatsApp\n• Google Maps\n• iFood\n• Uber / 99'
    }
  },

  portuguese: {
    patterns: {
      pt: ['português', 'portugues', 'necessário saber', 'preciso falar', 'obrigatório'],
      en: ['portuguese', 'need to speak', 'must speak', 'necessary', 'required'],
      es: ['portugués', 'necesario saber', 'necesito hablar', 'obligatorio']
    },
    responses: {
      pt: '🗣️ É necessário saber português?\n\nNão é obrigatório, mas ajuda MUITO na comunicação e para conseguir trabalho.\n\n💡 Brasileiros são receptivos e ajudam!',
      en: '🗣️ Is it necessary to know Portuguese?\n\nNot mandatory, but it helps A LOT for communication and finding work.\n\n💡 Brazilians are welcoming and helpful!',
      es: '🗣️ ¿Es necesario saber portugués?\n\nNo es obligatorio, pero ayuda MUCHO en la comunicación y para conseguir trabajo.\n\n💡 ¡Los brasileños son receptivos y ayudan!'
    }
  },

  living_costs: {
    patterns: {
      pt: ['cidades baratas', 'cidade barata', 'aluguel', 'moradia', 'custo de vida'],
      en: ['cheap cities', 'affordable cities', 'rent', 'housing', 'cost of living'],
      es: ['ciudades baratas', 'alquiler', 'vivienda', 'costo de vida']
    },
    responses: {
      pt: '💰 Custo de vida:\n\n🏙️ Cidades mais baratas:\nCuritiba, Goiânia, João Pessoa, Florianópolis\n\n🏠 Aluguel: R$800-1.500/mês\n🛒 Alimentação: R$600-1.000/mês\n🚌 Transporte: R$5 por viagem',
      en: '💰 Cost of living:\n\n🏙️ Most affordable cities:\nCuritiba, Goiânia, João Pessoa, Florianópolis\n\n🏠 Rent: R$800-1,500/month\n🛒 Food: R$600-1,000/month\n🚌 Transport: R$5 per trip',
      es: '💰 Costo de vida:\n\n🏙️ Ciudades más baratas:\nCuritiba, Goiânia, João Pessoa, Florianópolis\n\n🏠 Alquiler: R$800-1.500/mes\n🛒 Alimentación: R$600-1.000/mes\n🚌 Transporte: R$5 por viaje'
    }
  },

  work: {
    patterns: {
      pt: ['trabalho', 'emprego', 'trabalhar', 'oportunidades', 'empreender'],
      en: ['work', 'job', 'employment', 'opportunities', 'entrepreneur'],
      es: ['trabajo', 'empleo', 'trabajar', 'oportunidades', 'emprender']
    },
    responses: {
      pt: '💼 Trabalho no Brasil:\n\n✅ Precisa ter CPF e visto válido\n✅ Conhecer português é diferencial\n\n🏙️ Mais oportunidades:\nSão Paulo, Rio, Curitiba, Brasília\n\n🚀 Bom para empreender em turismo e serviços!',
      en: '💼 Work in Brazil:\n\n✅ Need CPF and valid visa\n✅ Knowing Portuguese is an advantage\n\n🏙️ Most opportunities:\nSão Paulo, Rio, Curitiba, Brasília\n\n🚀 Great for entrepreneurship in tourism and services!',
      es: '💼 Trabajo en Brasil:\n\n✅ Necesitas CPF y visa válida\n✅ Saber portugués es ventaja\n\n🏙️ Más oportunidades:\nSão Paulo, Rio, Curitiba, Brasília\n\n¡🚀 Bueno para emprender en turismo y servicios!'
    }
  },

  documentation_detailed: {
    patterns: {
      pt: ['morar legalmente', 'residência', 'residencia', 'viver definitivamente', 'polícia federal'],
      en: ['live legally', 'residence', 'live permanently', 'federal police'],
      es: ['vivir legalmente', 'residencia', 'vivir definitivamente', 'policía federal']
    },
    responses: {
      pt: '📋 Viver definitivamente no Brasil:\n\n1️⃣ Solicite visto de residência\n2️⃣ Registre-se na Polícia Federal\n3️⃣ Obtenha CPF\n4️⃣ Estabeleça endereço fixo\n5️⃣ Abra conta bancária',
      en: '📋 Live permanently in Brazil:\n\n1️⃣ Apply for residence visa\n2️⃣ Register with Federal Police\n3️⃣ Get CPF\n4️⃣ Establish fixed address\n5️⃣ Open bank account',
      es: '📋 Vivir definitivamente en Brasil:\n\n1️⃣ Solicita visa de residencia\n2️⃣ Regístrate en Policía Federal\n3️⃣ Obtén CPF\n4️⃣ Establece dirección fija\n5️⃣ Abre cuenta bancaria'
    }
  },

  cpf_bank: {
    patterns: {
      pt: ['cpf', 'conta bancária', 'conta bancaria', 'banco', 'abrir conta'],
      en: ['cpf', 'bank account', 'open account', 'banking'],
      es: ['cpf', 'cuenta bancaria', 'abrir cuenta', 'banco']
    },
    responses: {
      pt: '🏦 CPF e Conta Bancária:\n\n📝 Como solicitar CPF?\n• Correios\n• Banco do Brasil\n• Online (Receita Federal)\n\n💳 Abrir conta precisa:\n• Passaporte\n• CPF\n• Comprovante de residência',
      en: '🏦 CPF & Bank Account:\n\n📝 How to get CPF?\n• Post Office\n• Banco do Brasil\n• Online (Federal Revenue)\n\n💳 To open account need:\n• Passport\n• CPF\n• Proof of address',
      es: '🏦 CPF y Cuenta Bancaria:\n\n📝 ¿Cómo solicitar CPF?\n• Correos\n• Banco do Brasil\n• Online (Receita Federal)\n\n💳 Para abrir cuenta necesitas:\n• Pasaporte\n• CPF\n• Comprobante de domicilio'
    }
  },

  social_benefits: {
    patterns: {
      pt: ['benefício', 'beneficio', 'cesta básica', 'bolsa família', 'cras', 'programa social'],
      en: ['benefit', 'social program', 'government aid', 'assistance'],
      es: ['beneficio', 'cesta básica', 'bolsa familia', 'cras', 'programa social']
    },
    responses: {
      pt: '🤝 Benefícios Sociais:\n\n✅ Disponíveis:\n• Cesta básica\n• Auxílio social\n• Atendimento psicológico\n• Moradia popular\n\n📋 Solicite no CRAS (precisa estar regularizado)',
      en: '🤝 Social Benefits:\n\n✅ Available:\n• Basic food basket\n• Social aid\n• Psychological care\n• Public housing\n\n📋 Apply at CRAS (need to be regularized)',
      es: '🤝 Beneficios Sociales:\n\n✅ Disponibles:\n• Cesta básica\n• Ayuda social\n• Atención psicológica\n• Vivienda popular\n\n📋 Solicita en CRAS (necesitas estar regularizado)'
    }
  },

  education: {
    patterns: {
      pt: ['estudar', 'estudo', 'universidade', 'diploma', 'validar diploma'],
      en: ['study', 'university', 'diploma', 'validate diploma', 'education'],
      es: ['estudiar', 'universidad', 'diploma', 'validar diploma', 'educación']
    },
    responses: {
      pt: '🎓 Educação:\n\n✅ Estrangeiros podem estudar\n✅ Ensino público gratuito\n\n📜 Validar diploma?\nUniversidades públicas fazem a validação (pode demorar alguns meses)',
      en: '🎓 Education:\n\n✅ Foreigners can study\n✅ Free public education\n\n📜 Validate diploma?\nPublic universities validate (may take months)',
      es: '🎓 Educación:\n\n✅ Extranjeros pueden estudiar\n✅ Educación pública gratuita\n\n📜 ¿Validar diploma?\nUniversidades públicas hacen validación (puede demorar meses)'
    }
  },

  rent_without_docs: {
    patterns: {
      pt: ['alugar sem cpf', 'aluguel sem', 'fiador', 'caução'],
      en: ['rent without cpf', 'rent without documents', 'guarantor', 'deposit'],
      es: ['alquilar sin cpf', 'alquiler sin', 'fiador', 'caución']
    },
    responses: {
      pt: '🏠 Alugar sem documentos:\n\n💡 Opções:\n✅ Fiador brasileiro\n✅ Caução (depósito)\n✅ Negociar com proprietário\n✅ Alugar por temporada\n✅ Pensões e repúblicas',
      en: '🏠 Rent without documents:\n\n💡 Options:\n✅ Brazilian guarantor\n✅ Deposit\n✅ Negotiate with owner\n✅ Short-term rental\n✅ Boarding houses',
      es: '🏠 Alquilar sin documentos:\n\n💡 Opciones:\n✅ Fiador brasileño\n✅ Caución (depósito)\n✅ Negociar con propietario\n✅ Alquiler temporal\n✅ Pensiones y repúblicas'
    }
  },

  rights: {
    patterns: {
      pt: ['direitos', 'direito', 'estrangeiro', 'regularizado'],
      en: ['rights', 'foreigner rights', 'regularized'],
      es: ['derechos', 'extranjero', 'regularizado']
    },
    responses: {
      pt: '⚖️ Direitos de estrangeiros:\n\n✅ Trabalhar (com visto)\n✅ Estudar\n✅ Acessar saúde (SUS)\n✅ Acionar justiça\n✅ Abrir empresa\n✅ Comprar imóveis\n\n⚠️ Precisa estar regularizado',
      en: '⚖️ Foreigner rights:\n\n✅ Work (with visa)\n✅ Study\n✅ Access health (SUS)\n✅ Use justice system\n✅ Open business\n✅ Buy property\n\n⚠️ Must be regularized',
      es: '⚖️ Derechos de extranjeros:\n\n✅ Trabajar (con visa)\n✅ Estudiar\n✅ Acceder a salud (SUS)\n✅ Accionar justicia\n✅ Abrir empresa\n✅ Comprar inmuebles\n\n⚠️ Necesitas estar regularizado'
    }
  },

  marriage: {
    patterns: {
      pt: ['casar', 'casamento', 'brasileiro', 'brasileira', 'cônjuge'],
      en: ['marry', 'marriage', 'brazilian spouse', 'wedding'],
      es: ['casar', 'casamiento', 'brasileiro', 'brasileña', 'cónyuge']
    },
    responses: {
      pt: '💑 Casamento com brasileiro(a):\n\n📄 Documentos:\n• Passaporte\n• Certidão de nascimento\n• Estado civil\n• Tradução oficial\n\n💡 Facilita visto permanente!',
      en: '💑 Marriage with Brazilian:\n\n📄 Documents:\n• Passport\n• Birth certificate\n• Marital status\n• Official translation\n\n💡 Facilitates permanent visa!',
      es: '💑 Casamiento con brasileño(a):\n\n📄 Documentos:\n• Pasaporte\n• Acta de nacimiento\n• Estado civil\n• Traducción oficial\n\n💡 ¡Facilita visa permanente!'
    }
  },

  tickets: {
    patterns: {
      pt: ['passagem', 'passagens', 'voo', 'avião', 'quanto custa viajar'],
      en: ['ticket', 'flight', 'airplane', 'how much to travel'],
      es: ['pasaje', 'vuelo', 'avión', 'cuánto cuesta viajar']
    },
    responses: {
      pt: '✈️ Passagens para o Brasil:\n\n🌎 América do Sul: US$150-400\n🌍 Europa/América do Norte: US$700-1.200\n\n💡 Baixa temporada é mais barato!\n💡 Reserve com antecedência',
      en: '✈️ Tickets to Brazil:\n\n🌎 South America: US$150-400\n🌍 Europe/North America: US$700-1,200\n\n💡 Low season is cheaper!\n💡 Book in advance',
      es: '✈️ Pasajes a Brasil:\n\n🌎 América del Sur: US$150-400\n🌍 Europa/América del Norte: US$700-1.200\n\n💡 ¡Temporada baja es más barato!\n💡 Reserva con anticipación'
    }
  },

  winter: {
    patterns: {
      pt: ['inverno', 'frio', 'neve', 'nevar', 'tem inverno', 'tem neve'],
      en: ['winter', 'cold', 'snow', 'snowing', 'has winter', 'has snow'],
      es: ['invierno', 'frío', 'nieve', 'nevar', 'tiene invierno', 'hay nieve']
    },
    responses: {
      pt: '❄️ O Brasil tem inverno?\n\nSim, mas é LEVE na maioria das regiões. No sul do país pode fazer frio de verdade.\n\n🌨️ O Brasil tem neve?\nMuito raramente, apenas em cidades do sul como Gramado e São Joaquim.',
      en: '❄️ Does Brazil have winter?\n\nYes, but it\'s MILD in most regions. In the south it can get really cold.\n\n🌨️ Does Brazil have snow?\nVery rarely, only in southern cities like Gramado and São Joaquim.',
      es: '❄️ ¿Brasil tiene invierno?\n\nSí, pero es SUAVE en la mayoría de las regiones. En el sur puede hacer frío de verdad.\n\n🌨️ ¿Brasil tiene nieve?\nMuy raramente, solo en ciudades del sur como Gramado y São Joaquim.'
    }
  },

  spanish_language: {
    patterns: {
      pt: ['falam espanhol', 'espanhol no brasil', 'entendem espanhol', 'brasileiro fala espanhol'],
      en: ['speak spanish', 'spanish in brazil', 'understand spanish', 'brazilians speak spanish'],
      es: ['hablan español', 'español en brasil', 'entienden español', 'brasileños hablan español']
    },
    responses: {
      pt: '🗣️ Os brasileiros falam espanhol?\n\nNão, a língua oficial é o PORTUGUÊS, mas muitos entendem um pouco de espanhol.\n\n💡 A proximidade com países vizinhos facilita a comunicação!',
      en: '🗣️ Do Brazilians speak Spanish?\n\nNo, the official language is PORTUGUESE, but many understand some Spanish.\n\n💡 Proximity to neighboring countries makes communication easier!',
      es: '🗣️ ¿Los brasileños hablan español?\n\nNo, el idioma oficial es el PORTUGUÉS, pero muchos entienden un poco de español.\n\n💡 ¡La proximidad con países vecinos facilita la comunicación!'
    }
  },

  vaccine_yellow_fever: {
    patterns: {
      pt: ['tomar vacina', 'vacina obrigatória', 'preciso vacina', 'febre amarela'],
      en: ['take vaccine', 'mandatory vaccine', 'need vaccine', 'yellow fever'],
      es: ['tomar vacuna', 'vacuna obligatoria', 'necesito vacuna', 'fiebre amarilla']
    },
    responses: {
      pt: '💉 Preciso tomar vacina para visitar o Brasil?\n\nNão é obrigatório, mas é RECOMENDADO tomar vacina contra febre amarela.\n\n✅ Especialmente se for visitar áreas rurais ou florestais.',
      en: '💉 Do I need to get vaccinated to visit Brazil?\n\nNot mandatory, but RECOMMENDED to get yellow fever vaccine.\n\n✅ Especially if visiting rural or forest areas.',
      es: '💉 ¿Necesito vacunarme para visitar Brasil?\n\nNo es obligatorio, pero es RECOMENDADO tomar vacuna contra fiebre amarilla.\n\n✅ Especialmente si vas a visitar áreas rurales o forestales.'
    }
  },

  tap_water: {
    patterns: {
      pt: ['água da torneira', 'beber água', 'água potável', 'água segura'],
      en: ['tap water', 'drink water', 'drinking water', 'safe water'],
      es: ['agua del grifo', 'beber agua', 'agua potable', 'agua segura']
    },
    responses: {
      pt: '💧 Posso beber água da torneira no Brasil?\n\nEm algumas cidades sim, mas o mais seguro é beber água FILTRADA ou MINERAL.\n\n✅ Água mineral é barata e fácil de encontrar (R$2-5).',
      en: '💧 Can I drink tap water in Brazil?\n\nIn some cities yes, but it\'s safer to drink FILTERED or MINERAL water.\n\n✅ Mineral water is cheap and easy to find (R$2-5).',
      es: '💧 ¿Puedo beber agua del grifo en Brasil?\n\nEn algunas ciudades sí, pero lo más seguro es beber agua FILTRADA o MINERAL.\n\n✅ Agua mineral es barata y fácil de encontrar (R$2-5).'
    }
  },

  rice_beans: {
    patterns: {
      pt: ['arroz e feijão', 'arroz feijão', 'comem todo dia', 'prato típico brasileiro'],
      en: ['rice and beans', 'eat every day', 'typical brazilian dish'],
      es: ['arroz y frijoles', 'comen todos los días', 'plato típico brasileño']
    },
    responses: {
      pt: '🍚 É verdade que os brasileiros comem arroz e feijão todos os dias?\n\nSim! É o prato tradicional da maioria das famílias.\n\n🍽️ O que mais comem?\nArroz, feijão, carne, salada e frutas tropicais. E claro, pastel e pão de queijo!',
      en: '🍚 Is it true that Brazilians eat rice and beans every day?\n\nYes! It\'s the traditional dish for most families.\n\n🍽️ What else do they eat?\nRice, beans, meat, salad and tropical fruits. And of course, pastel and pão de queijo!',
      es: '🍚 ¿Es verdad que los brasileños comen arroz y frijoles todos los días?\n\n¡Sí! Es el plato tradicional de la mayoría de las familias.\n\n🍽️ ¿Qué más comen?\nArroz, frijoles, carne, ensalada y frutas tropicales. ¡Y claro, pastel y pão de queijo!'
    }
  },

  brazil_expensive: {
    patterns: {
      pt: ['brasil é caro', 'brasil caro', 'preços no brasil', 'quanto custa brasil'],
      en: ['brazil expensive', 'brazil costly', 'prices in brazil', 'how much brazil'],
      es: ['brasil es caro', 'brasil caro', 'precios en brasil', 'cuánto cuesta brasil']
    },
    responses: {
      pt: '💰 O Brasil é caro?\n\nDepende da cidade. As CAPITAIS são mais caras; o INTERIOR costuma ser bem mais barato.\n\n💡 São Paulo e Rio são as mais caras. Cidades menores têm custo de vida muito acessível!',
      en: '💰 Is Brazil expensive?\n\nDepends on the city. CAPITALS are more expensive; the INTERIOR is usually much cheaper.\n\n💡 São Paulo and Rio are the most expensive. Smaller cities have very affordable cost of living!',
      es: '💰 ¿Es caro Brasil?\n\nDepende de la ciudad. Las CAPITALES son más caras; el INTERIOR suele ser mucho más barato.\n\n💡 São Paulo y Río son las más caras. ¡Las ciudades pequeñas tienen costo de vida muy accesible!'
    }
  },

  brazilian_people: {
    patterns: {
      pt: ['como são os brasileiros', 'brasileiros são', 'povo brasileiro', 'jeito brasileiro'],
      en: ['what are brazilians like', 'how are brazilians', 'brazilian people', 'brazilian way'],
      es: ['cómo son los brasileños', 'brasileños son', 'pueblo brasileño', 'estilo brasileño']
    },
    responses: {
      pt: '😊 Como são os brasileiros?\n\nSão SIMPÁTICOS, ACOLHEDORES e gostam de conversar — especialmente com estrangeiros!\n\n💚 O que é o "jeitinho brasileiro"?\nÉ uma forma CRIATIVA de resolver problemas — às vezes improvisando.',
      en: '😊 What are Brazilians like?\n\nThey are FRIENDLY, WELCOMING and love to chat — especially with foreigners!\n\n💚 What is the "jeitinho brasileiro"?\nIt\'s a CREATIVE way of solving problems — sometimes improvising.',
      es: '😊 ¿Cómo son los brasileños?\n\n¡Son SIMPÁTICOS, ACOGEDORES y les gusta conversar — especialmente con extranjeros!\n\n💚 ¿Qué es el "jeitinho brasileiro"?\nEs una forma CREATIVA de resolver problemas — a veces improvisando.'
    }
  },

  foreign_food: {
    patterns: {
      pt: ['comida estrangeira', 'restaurante estrangeiro', 'comida internacional', 'comida peruana'],
      en: ['foreign food', 'international food', 'foreign restaurant', 'peruvian food'],
      es: ['comida extranjera', 'comida internacional', 'restaurante extranjero', 'comida peruana']
    },
    responses: {
      pt: '🍕 É fácil encontrar comida estrangeira no Brasil?\n\nSim! Há restaurantes PERUANOS, ITALIANOS, JAPONESES e muitos outros nas grandes cidades.\n\n🌎 A diversidade culinária é grande nas capitais!',
      en: '🍕 Is it easy to find foreign food in Brazil?\n\nYes! There are PERUVIAN, ITALIAN, JAPANESE and many other restaurants in big cities.\n\n🌎 Culinary diversity is great in capitals!',
      es: '🍕 ¿Es fácil encontrar comida extranjera en Brasil?\n\n¡Sí! Hay restaurantes PERUANOS, ITALIANOS, JAPONESES y muchos otros en las grandes ciudades.\n\n🌎 ¡La diversidad culinaria es grande en las capitales!'
    }
  },

  phone_danger: {
    patterns: {
      pt: ['celular na rua', 'perigoso celular', 'usar celular rua', 'andar com celular'],
      en: ['phone on street', 'dangerous phone', 'use phone street', 'walk with phone'],
      es: ['celular en la calle', 'peligroso celular', 'usar celular calle', 'andar con celular']
    },
    responses: {
      pt: '📱 É perigoso andar com celular na rua?\n\nEm cidades grandes, SIM. É melhor usar o celular em locais seguros.\n\n⚠️ Dicas:\n• Evite usar em locais vazios\n• Guarde ao caminhar\n• Use em ambientes fechados',
      en: '📱 Is it dangerous to walk with phone on the street?\n\nIn big cities, YES. It\'s better to use phone in safe places.\n\n⚠️ Tips:\n• Avoid using in empty areas\n• Keep it away while walking\n• Use in closed spaces',
      es: '📱 ¿Es peligroso andar con celular en la calle?\n\nEn ciudades grandes, SÍ. Es mejor usar el celular en lugares seguros.\n\n⚠️ Consejos:\n• Evita usar en lugares vacíos\n• Guárdalo al caminar\n• Usa en ambientes cerrados'
    }
  },

  portuguese_phrases: {
    patterns: {
      pt: ['obrigado', 'de nada', 'o que significa', 'palavras básicas', 'frases básicas'],
      en: ['thank you', 'you\'re welcome', 'what does it mean', 'basic words', 'basic phrases'],
      es: ['gracias', 'de nada', 'qué significa', 'palabras básicas', 'frases básicas']
    },
    responses: {
      pt: '🗨️ Palavras úteis em português:\n\n"Obrigado" = Thank you\n"De nada" = You\'re welcome\n"Por favor" = Please\n"Com licença" = Excuse me\n"Quanto custa?" = How much?\n\n😊 Brasileiros adoram quando estrangeiros tentam falar português!',
      en: '🗨️ Useful Portuguese words:\n\n"Obrigado" = Thank you\n"De nada" = You\'re welcome\n"Por favor" = Please\n"Com licença" = Excuse me\n"Quanto custa?" = How much?\n\n😊 Brazilians love when foreigners try to speak Portuguese!',
      es: '🗨️ Palabras útiles en portugués:\n\n"Obrigado" = Gracias\n"De nada" = De nada\n"Por favor" = Por favor\n"Com licença" = Disculpe\n"Quanto custa?" = ¿Cuánto cuesta?\n\n😊 ¡A los brasileños les encanta cuando extranjeros intentan hablar portugués!'
    }
  },

  greetings_brazilian: {
    patterns: {
      pt: ['como cumprimentam', 'cumprimento brasileiro', 'beijo no rosto', 'aperto de mão'],
      en: ['how greet', 'brazilian greeting', 'kiss on cheek', 'handshake'],
      es: ['cómo saludan', 'saludo brasileño', 'beso en la mejilla', 'apretón de manos']
    },
    responses: {
      pt: '🤝 Como os brasileiros se cumprimentam?\n\nCom APERTO DE MÃO ou BEIJO NO ROSTO — depende da região.\n\n💡 Sudeste/Sul: 1 beijo\n💡 Rio: 2 beijos\n💡 Formal: Aperto de mão',
      en: '🤝 How do Brazilians greet?\n\nWith HANDSHAKE or KISS ON CHEEK — depends on region.\n\n💡 Southeast/South: 1 kiss\n💡 Rio: 2 kisses\n💡 Formal: Handshake',
      es: '🤝 ¿Cómo saludan los brasileños?\n\nCon APRETÓN DE MANOS o BESO EN LA MEJILLA — depende de la región.\n\n💡 Sudeste/Sur: 1 beso\n💡 Río: 2 besos\n💡 Formal: Apretón de manos'
    }
  },

  carnaval: {
    patterns: {
      pt: ['carnaval', 'o que é carnaval', 'festa carnaval', 'quando é carnaval'],
      en: ['carnival', 'what is carnival', 'carnival party', 'when is carnival'],
      es: ['carnaval', 'qué es carnaval', 'fiesta carnaval', 'cuándo es carnaval']
    },
    responses: {
      pt: '🎉 O que é Carnaval?\n\nÉ a MAIOR FESTA DO BRASIL, com desfiles, danças e muita música!\n\n🎭 Acontece em fevereiro/março\n🎵 Samba é o ritmo principal\n🏖️ Rio e Salvador têm os maiores eventos',
      en: '🎉 What is Carnival?\n\nIt\'s the BIGGEST PARTY IN BRAZIL, with parades, dances and lots of music!\n\n🎭 Happens in February/March\n🎵 Samba is the main rhythm\n🏖️ Rio and Salvador have the biggest events',
      es: '🎉 ¿Qué es el Carnaval?\n\n¡Es la FIESTA MÁS GRANDE DE BRASIL, con desfiles, bailes y mucha música!\n\n🎭 Ocurre en febrero/marzo\n🎵 Samba es el ritmo principal\n🏖️ Río y Salvador tienen los eventos más grandes'
    }
  },

  free_time: {
    patterns: {
      pt: ['tempo livre', 'lazer', 'o que fazem', 'diversão brasileira', 'churrasco'],
      en: ['free time', 'leisure', 'what do they do', 'brazilian fun', 'barbecue'],
      es: ['tiempo libre', 'ocio', 'qué hacen', 'diversión brasileña', 'asado']
    },
    responses: {
      pt: '⚽ O que os brasileiros gostam de fazer no tempo livre?\n\nIr à PRAIA, assistir FUTEBOL, sair com amigos e fazer CHURRASCO!\n\n🏖️ Finais de semana = praia\n⚽ Futebol é paixão nacional\n🍖 Churrasco com família é tradição',
      en: '⚽ What do Brazilians like to do in free time?\n\nGo to the BEACH, watch SOCCER, hang out with friends and have BARBECUE!\n\n🏖️ Weekends = beach\n⚽ Soccer is national passion\n🍖 BBQ with family is tradition',
      es: '⚽ ¿Qué les gusta hacer a los brasileños en tiempo libre?\n\n¡Ir a la PLAYA, ver FÚTBOL, salir con amigos y hacer ASADO!\n\n🏖️ Fines de semana = playa\n⚽ Fútbol es pasión nacional\n🍖 Asado con familia es tradición'
    }
  },

  dollars_euros: {
    patterns: {
      pt: ['usar dólares', 'usar euros', 'aceita dólar', 'comércio local aceita'],
      en: ['use dollars', 'use euros', 'accept dollars', 'local commerce accepts'],
      es: ['usar dólares', 'usar euros', 'acepta dólar', 'comercio local acepta']
    },
    responses: {
      pt: '💵 Posso usar dólares ou euros no comércio local?\n\nNa maioria dos lugares, NÃO. É melhor trocar por REAIS.\n\n✅ Casas de câmbio nas áreas turísticas\n🏦 Bancos fazem câmbio\n💳 Cartão internacional funciona bem',
      en: '💵 Can I use dollars or euros in local commerce?\n\nIn most places, NO. It\'s better to exchange for REAIS.\n\n✅ Exchange houses in tourist areas\n🏦 Banks do exchange\n💳 International card works well',
      es: '💵 ¿Puedo usar dólares o euros en el comercio local?\n\nEn la mayoría de lugares, NO. Es mejor cambiar por REALES.\n\n✅ Casas de cambio en áreas turísticas\n🏦 Bancos hacen cambio\n💳 Tarjeta internacional funciona bien'
    }
  },

  brazil_different: {
    patterns: {
      pt: ['diferente américa do sul', 'diferente de outros países', 'brasil diferente'],
      en: ['different south america', 'different from other countries', 'brazil different'],
      es: ['diferente américa del sur', 'diferente de otros países', 'brasil diferente']
    },
    responses: {
      pt: '🌎 O Brasil é muito diferente dos outros países da América do Sul?\n\nSIM, principalmente por causa da LÍNGUA PORTUGUESA e da DIVERSIDADE CULTURAL.\n\n🗣️ Único país que fala português\n🎭 Influências africanas, europeias e indígenas\n🏖️ País continental com muita variedade',
      en: '🌎 Is Brazil very different from other South American countries?\n\nYES, mainly because of the PORTUGUESE LANGUAGE and CULTURAL DIVERSITY.\n\n🗣️ Only country that speaks Portuguese\n🎭 African, European and indigenous influences\n🏖️ Continental country with lots of variety',
      es: '🌎 ¿Brasil es muy diferente de otros países de América del Sur?\n\nSÍ, principalmente por la LENGUA PORTUGUESA y la DIVERSIDAD CULTURAL.\n\n🗣️ Único país que habla portugués\n🎭 Influencias africanas, europeas e indígenas\n🏖️ País continental con mucha variedad'
    }
  },

  punctuality: {
    patterns: {
      pt: ['pontuais', 'pontualidade', 'horário brasileiro', 'chegam atrasados'],
      en: ['punctual', 'punctuality', 'brazilian time', 'arrive late'],
      es: ['puntuales', 'puntualidad', 'horario brasileño', 'llegan tarde']
    },
    responses: {
      pt: '⏰ Os brasileiros são pontuais?\n\nNem sempre! Os horários costumam ser mais FLEXÍVEIS, especialmente em eventos informais.\n\n💡 Reuniões formais: Seja pontual\n💡 Festas: 30min-1h de "atraso" é normal\n💡 Amigos: Mais flexível',
      en: '⏰ Are Brazilians punctual?\n\nNot always! Schedules tend to be more FLEXIBLE, especially at informal events.\n\n💡 Formal meetings: Be punctual\n💡 Parties: 30min-1h "late" is normal\n💡 Friends: More flexible',
      es: '⏰ ¿Los brasileños son puntuales?\n\n¡No siempre! Los horarios suelen ser más FLEXIBLES, especialmente en eventos informales.\n\n💡 Reuniones formales: Sé puntual\n💡 Fiestas: 30min-1h de "retraso" es normal\n💡 Amigos: Más flexible'
    }
  },

  foreign_license: {
    patterns: {
      pt: ['dirigir carteira estrangeira', 'carteira de motorista', 'cnh estrangeira', 'posso dirigir'],
      en: ['drive foreign license', 'driver license', 'foreign cnh', 'can i drive'],
      es: ['conducir licencia extranjera', 'licencia de conducir', 'cnh extranjera', 'puedo conducir']
    },
    responses: {
      pt: '🚗 Posso dirigir no Brasil com minha carteira estrangeira?\n\nSim, por até 180 DIAS, se a carteira estiver dentro da validade.\n\n✅ Válida por 6 meses\n✅ Deve estar em bom estado\n💡 Tradutor juramentado pode ser necessário',
      en: '🚗 Can I drive in Brazil with my foreign license?\n\nYes, for up to 180 DAYS, if the license is valid.\n\n✅ Valid for 6 months\n✅ Must be in good condition\n💡 Sworn translator may be needed',
      es: '🚗 ¿Puedo conducir en Brasil con mi licencia extranjera?\n\nSí, por hasta 180 DÍAS, si la licencia está vigente.\n\n✅ Válida por 6 meses\n✅ Debe estar en buen estado\n💡 Traductor jurado puede ser necesario'
    }
  },

  default: {
    responses: {
      pt: '🤔 Desculpe, não entendi.\n\nPosso ajudar com:\n📄 Vistos\n🏖️ Destinos\n💰 Custos\n☀️ Clima\n💼 Trabalho\n🏦 CPF\n🎓 Educação\n\nTente perguntar de outra forma!',
      en: '🤔 Sorry, I didn\'t understand.\n\nI can help with:\n📄 Visas\n🏖️ Destinations\n💰 Costs\n☀️ Weather\n💼 Work\n🏦 CPF\n🎓 Education\n\nTry asking differently!',
      es: '🤔 Disculpa, no entendí.\n\nPuedo ayudar con:\n📄 Visas\n🏖️ Destinos\n💰 Costos\n☀️ Clima\n💼 Trabajo\n🏦 CPF\n🎓 Educación\n\n¡Intenta preguntar de otra forma!'
    }
  }
}
