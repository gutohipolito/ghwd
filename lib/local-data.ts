export interface CityContent {
    slug: string;
    name: string;
    region: string;
    state: string;
    country: string;
    businessContext: string;
    geoCoordinates?: {
        latitude: number;
        longitude: number;
    };
}

export const citiesData: Record<string, CityContent> = {
    "farroupilha": {
        slug: "farroupilha",
        name: "Farroupilha",
        region: "Serra Gaúcha",
        state: "RS",
        country: "Brasil",
        businessContext: "forte polo industrial metal-mecânico, indústrias têxteis, de calçados e o tradicional comércio de malhas da Serra Gaúcha",
        geoCoordinates: { latitude: -29.2249, longitude: -51.3482 }
    },
    "caxias-do-sul": {
        slug: "caxias-do-sul",
        name: "Caxias do Sul",
        region: "Serra Gaúcha",
        state: "RS",
        country: "Brasil",
        businessContext: "segundo maior polo metal-mecânico do Brasil, com forte presença de indústrias automotivas, metalúrgicas e comércio robusto na Serra Gaúcha",
        geoCoordinates: { latitude: -29.1681, longitude: -51.1794 }
    },
    "bento-goncalves": {
        slug: "bento-goncalves",
        name: "Bento Gonçalves",
        region: "Serra Gaúcha",
        state: "RS",
        country: "Brasil",
        businessContext: "principal polo moveleiro do país, polo vinícola de referência internacional e forte setor turístico da Serra Gaúcha",
        geoCoordinates: { latitude: -29.1706, longitude: -51.5208 }
    },
    "porto-alegre": {
        slug: "porto-alegre",
        name: "Porto Alegre",
        region: "Grande Porto Alegre",
        state: "RS",
        country: "Brasil",
        businessContext: "hub metropolitano de inovação, ecossistema de startups de tecnologia, serviços corporativos e sede administrativa do RS",
        geoCoordinates: { latitude: -30.0346, longitude: -51.2177 }
    },
    "sao-paulo": {
        slug: "sao-paulo",
        name: "São Paulo",
        region: "Grande São Paulo",
        state: "SP",
        country: "Brasil",
        businessContext: "principal centro financeiro, corporativo e tecnológico da América Latina, abrigando sedes multinacionais e gigantes de tecnologia",
        geoCoordinates: { latitude: -23.5505, longitude: -46.6333 }
    },
    "lisboa": {
        slug: "lisboa",
        name: "Lisboa",
        region: "Grande Lisboa",
        state: "Lisboa",
        country: "Portugal",
        businessContext: "hub tecnológico europeu em expansão, ecossistema vibrante de startups de tecnologia, turismo de alto padrão e negócios internacionais",
        geoCoordinates: { latitude: 38.7223, longitude: -9.1393 }
    },
    "madrid": {
        slug: "madrid",
        name: "Madrid",
        region: "Comunidade de Madrid",
        state: "Madrid",
        country: "Espanha",
        businessContext: "centro financeiro e económico da Península Ibérica, com forte concentração de sedes corporativas multinacionais e serviços avançados de engenharia",
        geoCoordinates: { latitude: 40.4168, longitude: -3.7038 }
    },
    "nova-york": {
        slug: "nova-york",
        name: "Nova York",
        region: "NYS",
        state: "NY",
        country: "EUA",
        businessContext: "capital financeira mundial, polo de inovação disruptiva de software, mídia global e negócios internacionais de alta escala",
        geoCoordinates: { latitude: 40.7128, longitude: -74.0060 }
    }
};

// Aliases em inglês/espanhol e grafias alternativas para rotas locais
citiesData["lisbon"] = citiesData["lisboa"];
citiesData["new-york"] = citiesData["nova-york"];
citiesData["madrid-es"] = citiesData["madrid"];
citiesData["sao-paulo-br"] = citiesData["sao-paulo"];
