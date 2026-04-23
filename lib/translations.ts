
export type Language = 'en' | 'pt' | 'es' | 'pt-pt';

export const translations: Record<Language, any> = {
    en: {
        nav: {
            clients: 'Clients',
            products: 'Products',
            services: 'Expertise',
            about: 'About',
            contact: 'Contact',
            start: "Start",
            home: "Home",
            start_project: "Start Project"
        },
        hero: {
            tagline: 'Global Talent. Focus on Brazil.',
            we_build: 'WE BUILD',
            results: 'RESULTS.',
            description: "We access the top 1% of global engineering and design to build the digital future of the most ambitious Brazilian companies.",
            start_project: 'START PROJECT',
            view_work: 'VIEW WORK',
            scroll: 'Scroll to Explore',
            headline_html: 'We engineer <br /><span className="text-zinc-500">digital empires</span> <br />in Brazil.'
        },
        footer: {
            tagline: 'Engineering the future of digital business.',
            compliance: 'Compliance',
            legal: 'Legal',
            privacy: 'Privacy Policy',
            terms: 'Terms of Service',
            cookies: 'Cookie Settings',
            sitemap: "Sitemap",
            products: "Products",
            presence: "Presence",
            method: "The Method",
            intelligence: "Intelligence",
            newsletter_desc: "Join the inner circle. No spam, only dominance.",
            email_placeholder: "Email Address",
            join: "JOIN"
        },
        products: {
            nav: "Products",
            version_label: "Version",
            header: {
                tag: "/ The Repository",
                title_1: "Digital",
                title_2: "Assets & IP.",
                description: "We don't just build for clients; we build the tools that build the future. License our proprietary technology to accelerate your roadmap."
            },
            items: {
                velocity: { type: "Accelerator", description: "A battle-tested Next.js + Headless Commerce boilerplate. Pre-configured for Vtex, Shopify, and Wake. Reduces time-to-market by 60%." },
                synapse: { type: "Middleware", description: "The glue between legacy ERPs and modern frontends. Real-time data synchronization engine with built-in retry logic and error handling." },
                obsidian: { type: "Design System", description: "Our proprietary component library. A cohesive set of React components and Figma tokens ensuring pixel-perfect consistency across all projects." },
                xray: { type: "Audit Tool", description: "Automated performance and heuristics scanner. Generates actionable reports on Core Web Vitals, Accessibility, and Conversion blockers." },
                wholesale: { type: "SaaS Platform", description: "A white-label B2B portal for high-volume ordering. Handles complex pricing tiers, re-ordering, and credit limits out of the box." },
                edge: { type: "Infrastructure", description: "Global CDN configuration and image optimization pipeline. Ensures your assets are served from the closest node to the user, instantly." }
            }
        },
        cases: {
            header: {
                tag: "/ Clients",
                title: "Valued Partnerships.",
                subtitle: "A curation of companies that trust GHWD to build their digital future."
            },
            client_index: {
                tag: "/ Client Index",
                title: "Trusted by Leaders",
                map_title: "Our Digital Presence Across Brazil",
                map_subtitle: "Select one of the highlighted states on the map to see the brands and organizations that trust GHWD in each region.",
                partners: "partners"
            },
            cta: {
                read_case: "Read Case Study"
            },
            regions: {
                sp: "São Paulo",
                rs: "Rio Grande do Sul",
                sc: "Santa Catarina",
                ac_national: "Acre & National"
            }
        },
        services: {
            header: {
                tag: "/ Capabilities",
                title: "Engineered for Dominance.",
                subtitle: "A comprehensive suite of digital services designed to take your brand from concept to market leadership."
            },
            core_capabilities: "Core Capabilities",
            method: {
                tag: "/ The Method",
                title: "How we deliver excellence.",
                steps: [
                    { id: "01", title: "Immersion & Diagnosis", desc: "We dive deep into your business metrics, market positioning, and technical bottlenecks to identify real growth levers." },
                    { id: "02", title: "Strategy & Architecture", desc: "A blueprint for success. We design the technical and strategic foundation required to support your long-term ambition." },
                    { id: "03", title: "High-Fidelity Execution", desc: "Our engineers and designers build with surgical precision, ensuring every pixel and line of code serves a purpose." },
                    { id: "04", title: "Scale & Optimization", desc: "Launch is just the beginning. We implement continuous loops of data-driven improvements to maximize your ROI." }
                ]
            },
            services_cta: {
                title: "Ready to engineer your digital empire?",
                subtitle: "We are selective with our partnerships. Tell us about your ambition, not just your requirements.",
                button: "Start a Conversation"
            }
        },
        about: {
            header: {
                tag: "/ National Presence",
                title: "Borderless talent. Results in Brazil.",
                vision_tag: "/ Global Network",
                vision_title: "Global Intelligence. Local Focus.",
                vision_p1: "We are a distributed collective. By removing geographical constraints, we access the top 1% of talent in strategy, design, and engineering across 4 time zones to elevate the Brazilian market.",
                vision_p2: "No overhead. No offices. Just international intellectual capital dedicated to scaling your national operation."
            }
        },
        contact: {
            header: {
                tag: "/ Application",
                title: "Start the Conversation.",
                subtitle: "We are selective with our partnerships. Tell us about your ambition, not just your requirements."
            },
            direct_contact: "Direct Contact",
            form: {
                name: "Name",
                company: "Company",
                email: "Email",
                project_type: "Project Type",
                budget: "Budget Range",
                ambition: "Tell us about the ambition",
                submit: "Submit Application"
            },
            qualification: {
                step_label: "Step",
                of_label: "of",
                question_label: "Question",
                last_step: "Last step 🎉",
                contact_data_title: "Your contact details",
                contact_data_subtitle: "Promise: zero spam. We'll only use this to get back to you about the project.",
                fields: {
                    name: "Full name *",
                    name_placeholder: "What do you prefer to be called?",
                    whatsapp: "WhatsApp *",
                    email: "Email *",
                    company: "Business name (optional)",
                    company_placeholder: "Ex: My Company Inc."
                },
                buttons: {
                    back: "Back",
                    continue: "Continue",
                    submit: "Submit & See result",
                    whatsapp: "Talk now on WhatsApp"
                },
                results: {
                    hot_title: "Perfect, {name}!",
                    hot_desc: "Your answers show you have a clear project and are ready to move forward. We'll be in touch within 24 hours to schedule a call.",
                    warm_title: "Great, {name}!",
                    warm_desc: "You have an interesting project. We'll send you more information and talk about how we can help at the right time for you.",
                    cold_title: "Hello, {name}!",
                    cold_desc: "It seems you're still exploring your options — and that's okay! We'll send you useful content for when the time is right.",
                    meta_project: "Project",
                    meta_deadline: "Deadline",
                    meta_investment: "Investment",
                    cold_footer: "We will contact you via email shortly.",
                    wa_hot: "I'm excited to start!",
                    wa_warm: "I'd like to know more about the services.",
                    wa_cold: "I'm still researching, but I'd like to understand more.",
                    errors: {
                        invalid_email: "Invalid email",
                        invalid_phone: "Invalid phone"
                    }
                },
                steps: [
                    { title: "What do you need?", hint: "Select the option that best describes your project.", options: ["Landing page / Sales page", "Institutional site", "E-commerce", "Redesign / Improve site", "Other / Not sure yet"] },
                    { title: "Is your business already active?", hint: "This helps us understand the context of the project.", options: ["Yes, I'm already selling or providing services", "Opening now / Launch phase", "Still an idea, I'm researching"] },
                    { title: "What is your deadline for the project?", hint: "Helps us prioritize and fit the project into our calendar.", options: ["Urgent — as soon as possible", "Next 1 to 2 months", "No rush, I want to plan well"] },
                    { title: "What investment range do you consider?", hint: "No commitment — just so we can present the right options.", options: ["Up to $1,500", "$1,500 to $4,000", "$4,000 to $8,000", "Above $8,000", "Not sure yet / Want a quote"] },
                    { title: "How do you prefer to be contacted?", hint: "We'll call you on your preferred channel.", options: ["WhatsApp — quick and practical", "Email — I prefer in writing", "Video call — I want to talk directly"] }
                ]
            }
        },
        home: {
            services: {
                title: "Our Expertise",
                view_inventory: "Full Inventory"
            },
            selected_works: {
                tag: "/ Selected Works",
                title: "Authority",
                title_italic: "proven in code.",
                view_archive: "View Archive",
                case_study: "Case Study"
            },
            dashboards: {
                tag: "/ Impact Analysis",
                title_1: "Control your",
                title_2: "growth trajectory.",
                description: "We implement high-fidelity tracking and automation systems that turn raw data into executable strategy.",
                feature_1: { title: "Real-time Visibility", desc: "See your entire operation in a single pane of glass." },
                feature_2: { title: "Predictive Models", desc: "Forecast demand and revenue with algorithmic precision." },
                feature_3: { title: "Automated Scale", desc: "Systems that expand autonomously as you grow." }
            },
            services_items: {
                strategy: {
                    title: "Digital Strategy",
                    desc: "Market positioning, brand diagnosis, and growth roadmaps.",
                    caps: ["Market Analysis", "Brand Strategy", "Growth Consulting", "Business Modeling"]
                },
                design: {
                    title: "UI/UX Design",
                    desc: "High-end interfaces that build trust and authority.",
                    caps: ["Product Design", "Design Systems", "Prototyping", "Interaction Design"]
                },
                dev: {
                    title: "Platform Engineering",
                    desc: "Robust, scalable engineering for complex platforms.",
                    caps: ["Next.js / React", "Headless Commerce", "API Architecture", "Cloud Infrastructure"]
                },
                ai: {
                    title: "AI & Automation",
                    desc: "Intelligent workflows and LLM integration for efficiency.",
                    caps: ["LLM Integration", "Workflow Automation", "Custom AI Agents", "Process Optimization"]
                },
                data: {
                    title: "Data Intelligence",
                    desc: "High-fidelity tracking and predictive analysis.",
                    caps: ["Precision Tracking", "Predictive Modeling", "Custom Dashboards", "ROI Analysis"]
                },
                growth: {
                    title: "Performance & Growth",
                    desc: "Converting traffic into high-velocity revenue.",
                    caps: ["CRO", "Technical SEO", "Retention Strategy", "Funnel Optimization"]
                },
                commerce: {
                    title: "Commerce Experience",
                    desc: "Global systems for retail and B2B scale.",
                    caps: ["Omnichannel Core", "Global Logistics", "Wholesale Portal", "Subscription Models"],
                    tags: ["B2B", "Retail", "Global"]
                }
            },
            projects_items: {
                grendene: { title: "Digital Ecosystem Architecture", desc: "Replatforming a global footwear giant for 50+ markets." },
                hardrock: { title: "Experience Commerce", desc: "Digitizing the legendary rock & roll dining experience." },
                besni: { title: "Omnichannel Retail Core", desc: "Connecting 40+ physical stores with high-velocity e-commerce." }
            },
            not_found: {
                title: "Page Not Found",
                subtitle: "The page you're looking for has been moved or doesn't exist.",
                back_home: "Back to Home"
            }
        },
        legal: {
            updated: "Last Updated",
            version: "Version",
            status: "Status",
            active: "Active",
            privacy: {
                title: "Privacy Policy",
                subtitle: "Our commitment to protecting the data that powers your digital transformation.",
                intro: "GHWD Global Digital Partner is committed to protecting your privacy. This policy explains how we process data in compliance with GDPR and international standards.",
                sections: [
                    {
                        title: "1. Data Collection",
                        content: "We collect information to provide better services. This includes direct inputs (forms), navigational data (IP, browser) and cookies. Under GDPR, we act as Data Controllers for our direct clients."
                    },
                    {
                        title: "2. Usage of Information",
                        content: "We use data to operate our digital services, optimize performance, and for legitimate business interests such as marketing (with consent). We do not sell personal data."
                    },
                    {
                        title: "3. International Transfers",
                        content: "As a global entity, data may be processed in regions outside the EEA. We ensure appropriate safeguards (Standard Contractual Clauses) are in place."
                    },
                    {
                        title: "4. Your Rights (GDPR)",
                        content: "You have the right to access, rectify, erase, restrict processing, and portability of your data. Contact legal@ghwd.digital to exercise these rights."
                    }
                ]
            },
            terms: {
                title: "Terms of Service",
                subtitle: "The rules governing our digital partnership and platform usage.",
                intro: "By accessing our services, you agree to these terms. If you represent an organization, you certify you have the authority to bind it.",
                sections: [
                    {
                        title: "1. Intellectual Property",
                        content: "All code, methodologies ('The Method'), and assets are GHWD property unless explicitly transferred via contract. 'Authority forged in code' is our registered trademark."
                    },
                    {
                        title: "2. Liability",
                        content: "GHWD provides services 'as is'. We adhere to a 99.9% SLA for managed services but are not liable for indirect damages or force majeure events."
                    },
                    {
                        title: "3. Governing Law",
                        content: "These terms are governed by international trade laws and strict confidentiality agreements signed per project."
                    }
                ]
            },
            cookies: {
                title: "Cookie Settings",
                subtitle: "Manage your privacy preferences and data usage.",
                desc: "We use cookies to ensure platform integrity and analyze performance.",
                types: {
                    essential: { title: "Essential", desc: "Required for basic site functionality (security, load balancing)." },
                    functional: { title: "Functional", desc: "Enables personalization and region selection." },
                    analytics: { title: "Analytics", desc: "Anonymous tracking of usage patterns to optimize UX." },
                    marketing: { title: "Marketing", desc: "Retargeting and ad relevance (disabled by default)." }
                },
                save: "Save Preferences",
                saved: "Preferences Saved!",
                reject: "Reject All",
                retention: "Retention Policy: Data is kept only as long as necessary."
            }
        }
    },
    pt: {
        nav: {
            clients: 'Clientes',
            products: 'Produtos',
            services: 'Expertise',
            about: 'Sobre',
            contact: 'Contato',
            start: "Iniciar",
            home: "Home",
            start_project: "Iniciar Projeto"
        },
        hero: {
            tagline: 'Talento Global. Foco no Brasil.',
            we_build: 'NÓS ENTREGAMOS',
            results: 'RESULTADOS.',
            description: "Acessamos o top 1% da engenharia e design mundial para construir o futuro digital das empresas brasileiras mais ambiciosas.",
            start_project: 'INICIAR PROJETO',
            view_work: 'VER PROJETOS',
            scroll: 'Role para Explorar',
            headline_html: 'Projetamos <br /><span className="text-zinc-500">impérios digitais</span> <br />no Brasil.'
        },
        footer: {
            tagline: 'Transformando visão estratégica em domínio digital.',
            compliance: 'LGPD',
            legal: 'Legal',
            privacy: 'Política de Privacidade',
            terms: 'Termos de Serviço',
            cookies: 'Configurações de Cookies',
            sitemap: "Sitemap",
            products: "Produtos",
            presence: "Presença",
            method: "O Método",
            intelligence: "Inteligência",
            newsletter_desc: "Junte-se ao círculo interno. Sem spam, apenas domínio.",
            email_placeholder: "Endereço de E-mail",
            join: "ENTRAR"
        },
        products: {
            nav: "Produtos",
            version_label: "Versão",
            header: {
                tag: "/ O Repositório",
                title_1: "Ativos",
                title_2: "Digitais & IP.",
                description: "Não apenas construímos para clientes; construímos as ferramentas que moldam o futuro. Licencie nossa tecnologia proprietária para acelerar seu roadmap."
            },
            items: {
                velocity: { type: "Acelerador", description: "Um boilerplate de Next.js + Headless Commerce testado em batalha. Pré-configurado para Vtex, Shopify e Wake. Reduz o time-to-market em 60%." },
                synapse: { type: "Middleware", description: "A cola entre ERPs legados e frontends modernos. Motor de sincronização de dados em tempo real com lógica de retry e tratamento de erros nativo." },
                obsidian: { type: "Design System", description: "Nossa biblioteca de componentes proprietária. Um conjunto coeso de componentes React e tokens Figma garantindo consistência pixel-perfect em todos os projetos." },
                xray: { type: "Ferramenta de Auditoria", description: "Scanner automatizado de performance e heurísticas. Gera relatórios acionáveis sobre Core Web Vitals, Acessibilidade e bloqueadores de Conversão." },
                wholesale: { type: "Plataforma SaaS", description: "Um portal B2B white-label para pedidos de alto volume. Gerencia faixas de preço complexas, re-pedidos e limites de crédito nativamente." },
                edge: { type: "Infraestrutura", description: "Configuração global de CDN e pipeline de otimização de imagens. Garante que seus ativos sejam servidos do nó mais próximo ao usuário, instantaneamente." }
            }
        },
        cases: {
            header: {
                tag: "/ Clientes",
                title: "Parcerias de Valor.",
                subtitle: "Uma curadoria das empresas que confiam na GHWD para construir seu futuro digital."
            },
            client_index: {
                tag: "/ Índice de Clientes",
                title: "Confiado por Líderes",
                map_title: "Nossa Presença Digital pelo Brasil",
                map_subtitle: "Selecione um dos estados destacados no mapa para ver as marcas e organizações que confiam na GHWD em cada região do país.",
                partners: "parceiros"
            },
            cta: {
                read_case: "Ver Estudo de Caso"
            },
            regions: {
                sp: "São Paulo",
                rs: "Rio Grande do Sul",
                sc: "Santa Catarina",
                ac_national: "Acre & Nacional"
            }
        },
        services: {
            header: {
                tag: "/ Soluções",
                title: "Engenharia de precisão para escala global.",
                subtitle: "Um conjunto abrangente de serviços digitais projetados para levar sua marca do conceito à liderança de mercado."
            },
            core_capabilities: "Principais Capacidades",
            method: {
                tag: "/ O Método",
                title: "Como entregamos excelência.",
                steps: [
                    { id: "01", title: "Imersão & Diagnóstico", desc: "Mergulhamos fundo nas métricas do seu negócio, posicionamento e gargalos técnicos para identificar alavancas reais de crescimento." },
                    { id: "02", title: "Estratégia & Arquitetura", desc: "Um blueprint para o sucesso. Desenhamos a fundação técnica e estratégica necessária para sustentar sua ambição de longo prazo." },
                    { id: "03", title: "Execução de Alta Fidelidade", desc: "Nossos especialistas e designers constroem com precisão cirúrgica, garantindo que cada pixel e linha de código tenha um propósito." },
                    { id: "04", title: "Escala & Otimização", desc: "O lançamento é apenas o começo. Implementamos ciclos contínuos de melhorias baseadas em dados para maximizar seu ROI." }
                ]
            },
            services_cta: {
                title: "Pronto para construir seu império digital?",
                subtitle: "Somos seletivos com nossas parcerias. Conte-nos sobre sua ambição, não apenas seus requisitos.",
                button: "Iniciar uma Conversa"
            }
        },
        about: {
            header: {
                tag: "/ Atuação Nacional",
                title: "Talento sem fronteiras. Resultados no Brasil.",
                vision_tag: "/ Rede Global",
                vision_title: "Inteligência Global. Foco Local.",
                vision_p1: "Somos um coletivo distribuído. Ao remover restrições geográficas, acessamos o top 1% de talentos em estratégia, design e engenharia em 4 fusos horários para elevar o nível do mercado brasileiro.",
                vision_p2: "Sem custo fixo. Sem escritórios. Apenas capital intelectual internacional dedicado a alavancar a sua operação nacional."
            }
        },
        contact: {
            header: {
                tag: "/ Aplicação",
                title: "Inicie a Conversa.",
                subtitle: "Somos seletivos com nossas parcerias. Conte-nos sobre sua ambição, não apenas seus requisitos."
            },
            direct_contact: "Contato Direto",
            form: {
                name: "Nome",
                company: "Empresa",
                email: "E-mail",
                project_type: "Tipo de Projeto",
                budget: "Faixa de Orçamento",
                ambition: "Conte-nos sobre a ambição",
                submit: "Enviar Aplicação"
            },
            qualification: {
                step_label: "Passo",
                of_label: "de",
                question_label: "Pergunta",
                last_step: "Última etapa 🎉",
                contact_data_title: "Seus dados de contato",
                contact_data_subtitle: "Promessa: zero spam. Vamos usar isso só para te retornar sobre o projeto.",
                fields: {
                    name: "Nome completo *",
                    name_placeholder: "Como prefere ser chamado?",
                    whatsapp: "WhatsApp *",
                    email: "E-mail *",
                    company: "Nome do seu negócio (opcional)",
                    company_placeholder: "Ex: Minha Empresa Inc."
                },
                buttons: {
                    back: "Voltar",
                    continue: "Continuar",
                    submit: "Enviar & Ver resultado",
                    whatsapp: "Falar agora no WhatsApp"
                },
                results: {
                    hot_title: "Perfeito, {name}!",
                    hot_desc: "Suas respostas mostram que você tem um projeto claro e está pronto para avançar. Vamos entrar em contato em até 24 horas para marcar uma conversa.",
                    warm_title: "Ótimo, {name}!",
                    warm_desc: "Você tem um projeto interessante. Vamos te mandar mais informações e conversamos sobre como podemos ajudar no momento certo para você.",
                    cold_title: "Olá, {name}!",
                    cold_desc: "Parece que você ainda está explorando suas opções — e tudo bem! Vamos te enviar conteúdo útil para quando o momento for certo.",
                    meta_project: "Projeto",
                    meta_deadline: "Prazo",
                    meta_investment: "Investimento",
                    cold_footer: "Entraremos em contato via e-mail em breve.",
                    wa_hot: "Estou animado para começar!",
                    wa_warm: "Gostaria de saber mais sobre os serviços.",
                    wa_cold: "Ainda estou pesquisando, mas gostaria de entender melhor.",
                    errors: {
                        invalid_email: "E-mail inválido",
                        invalid_phone: "Telefone inválido"
                    }
                },
                steps: [
                    { title: "O que você precisa?", hint: "Selecione a opção que melhor descreve seu projeto.", options: ["Landing page / Página de vendas", "Site institucional (apresentar meu negócio)", "Loja virtual / E-commerce", "Reformular / melhorar site que já tenho", "Outro / Não sei ainda"] },
                    { title: "Seu negócio já está ativo?", hint: "Isso nos ajuda a entender o contexto do projeto.", options: ["Sim, já estou vendendo ou prestando serviços", "Estou abrindo agora / Em fase de lançamento", "Ainda é uma ideia, estou pesquisando"] },
                    { title: "Qual é o seu prazo para o projeto?", hint: "Nos ajuda a priorizar e encaixar o projeto no nosso calendário.", options: ["Urgente — preciso o quanto antes", "Nos próximos 1 a 2 meses", "Sem pressa, quero planejar bem"] },
                    { title: "Qual faixa de investimento você considera?", hint: "Sem compromisso — serve só para te apresentarmos as opções certas.", options: ["Até R$1.500", "R$1.500 a R$4.000", "R$4.000 a R$8.000", "Acima de R$8.000", "Não sei ainda / Quero um orçamento"] },
                    { title: "Como prefere ser contatado?", hint: "Vamos te chamar no canal de sua preferência.", options: ["WhatsApp — rápido e prático", "E-mail — prefiro por escrito", "Videochamada — quero conversar direto"] }
                ]
            }
        },
        home: {
            services: {
                title: "Nossa Expertise",
                view_inventory: "Inventário Completo"
            },
            selected_works: {
                tag: "/ Trabalhos Selecionados",
                title: "Autoridade",
                title_italic: "forjada em código.",
                view_archive: "Ver Arquivo",
                case_study: "Estudo de Caso"
            },
            dashboards: {
                tag: "/ Análise de Impacto",
                title_1: "Controle sua",
                title_2: "trajetória de crescimento.",
                description: "Implementamos sistemas de rastreamento e automação de alta fidelidade que transformam dados brutos em estratégia executável.",
                feature_1: { title: "Visibilidade em Tempo Real", desc: "Veja toda a sua operação em um único painel." },
                feature_2: { title: "Modelos Preditivos", desc: "Preveja demanda e receita com precisão algorítmica." },
                feature_3: { title: "Escala Automatizada", desc: "Sistemas que se expandem autonomamente à medida que você cresce." }
            },
            services_items: {
                strategy: {
                    title: "Estratégia Digital",
                    desc: "Posicionamento de mercado, diagnóstico de marca e roteiros de crescimento.",
                    caps: ["Análise de Mercado", "Estratégia de Marca", "Consultoria de Crescimento", "Modelagem de Negócios"]
                },
                design: {
                    title: "UI/UX Design",
                    desc: "Interfaces de alto padrão que constroem confiança e autoridade.",
                    caps: ["Design de Produto", "Design Systems", "Prototipagem", "Design de Interação"]
                },
                dev: {
                    title: "Engenharia de Plataforma",
                    desc: "Engenharia robusta e escalável para plataformas complexas.",
                    caps: ["Next.js / React", "Headless Commerce", "Arquitetura de API", "Infraestrutura em Nuvem"]
                },
                ai: {
                    title: "IA & Automação",
                    desc: "Workflows inteligentes e integração de LLM para máxima eficiência.",
                    caps: ["Integração de LLM", "Automação de Workflow", "Agentes de IA Customizados", "Otimização de Processos"]
                },
                data: {
                    title: "Inteligência de Dados",
                    desc: "Tracking de alta fidelidade e análise preditiva de performance.",
                    caps: ["Tracking de Precisão", "Modelagem Preditiva", "Dashboards Customizados", "Análise de ROI"]
                },
                growth: {
                    title: "Performance & Growth",
                    desc: "Convertendo tráfego em receita de alta velocidade.",
                    caps: ["CRO", "SEO Técnico", "Estratégia de Retenção", "Otimização de Funil"]
                },
                commerce: {
                    title: "Commerce Experience",
                    desc: "Sistemas globais para escala de varejo e B2B.",
                    caps: ["Núcleo Omnichannel", "Logística Global", "Portal de Atacado", "Modelos de Assinatura"],
                    tags: ["B2B", "Varejo", "Global"]
                }
            },
            projects_items: {
                grendene: { title: "Arquitetura de Ecossistema Digital", desc: "Replatforming de uma gigante global de calçados para mais de 50 mercados." },
                hardrock: { title: "Commerce de Experiência", desc: "Digitalizando a lendária experiência gastronômica do rock & roll." },
                besni: { title: "Núcleo de Varejo Omnichannel", desc: "Conectando mais de 40 lojas físicas com e-commerce de alta velocidade." }
            },
            not_found: {
                title: "Página Não Encontrada",
                subtitle: "A página que você está procurando foi movida ou não existe.",
                back_home: "Voltar para o Início"
            }
        },
        legal: {
            updated: "Última Atualização",
            version: "Versão",
            status: "Status",
            active: "Vigente",
            privacy: {
                title: "Política de Privacidade",
                subtitle: "Nosso compromisso com a proteção dos dados que impulsionam sua transformação digital.",
                intro: "A GHWD Global Digital Partner está comprometida com sua privacidade. Esta política detalha o processamento de dados em conformidade com a Lei nº 13.709/2018 (LGPD).",
                sections: [
                    {
                        title: "1. Coleta e Bases Legais",
                        content: "Coletamos dados pessoais (nome, e-mail, corporativo) baseados no Consentimento e Legítimo Interesse para prover nossos serviços de consultoria e engenharia."
                    },
                    {
                        title: "2. Finalidade do Uso",
                        content: "Utilizamos as informações para operar nossos serviços digitais, personalizar ofertas e melhoria contínua de performance. Não comercializamos dados de usuários."
                    },
                    {
                        title: "3. Compartilhamento",
                        content: "Operamos globalmente. Dados podem ser compartilhados com parceiros de infraestrutura (AWS, Vercel) sob estritos acordos de confidencialidade e segurança."
                    },
                    {
                        title: "4. Seus Direitos (LGPD)",
                        content: "Você tem direito à confirmação, acesso, correção, anonimização, portabilidade e eliminação de seus dados. Encarregado (DPO): dpo@ghwd.digital."
                    }
                ]
            },
            terms: {
                title: "Termos de Serviço",
                subtitle: "As regras que regem nossa parceria digital e o uso de nossas plataformas.",
                intro: "Ao acessar nossos serviços, você concorda com estes termos. O uso de nossas APIs e boilerplates obedece a licenças comerciais específicas.",
                sections: [
                    {
                        title: "1. Propriedade Intelectual",
                        content: "Todo código, design, e a metodologia proprietária da GHWD são protegidos. A expressão 'Autoridade forjada em código' e nossos assets visuais são exclusivos."
                    },
                    {
                        title: "2. Limitação de Responsabilidade",
                        content: "Nossos serviços são prestados com excelência técnica, mas não garantimos resultados de terceiros. A responsabilidade limita-se ao valor do contrato estabelecido."
                    },
                    {
                        title: "3. Foro",
                        content: "Fica eleito o foro da Comarca de São Paulo/SP para dirimir questões oriundas destes termos, renunciando a qualquer outro."
                    }
                ]
            },
            cookies: {
                title: "Configurações de Cookies",
                subtitle: "Gerencie suas preferências de privacidade e escolha como usamos seus dados.",
                desc: "Cookies são pequenos arquivos que garantem o funcionamento e a inteligência da nossa plataforma.",
                types: {
                    essential: { title: "Essenciais", desc: "Necessários para o funcionamento básico (segurança, login)." },
                    functional: { title: "Funcionais", desc: "Permitem lembrar suas escolhas de idioma e região." },
                    analytics: { title: "Analíticos", desc: "Tracking anônimo para entender comportamento e melhorar UX." },
                    marketing: { title: "Marketing", desc: "Rastreamento para relevância de anúncios (desativado por padrão)." }
                },
                save: "Salvar Preferências",
                saved: "Preferências Salvas!",
                reject: "Rejeitar Todos",
                retention: "Política de Retenção: Dados são mantidos apenas pelo tempo necessário."
            }
        }
    },
    'pt-pt': {
        nav: {
            clients: 'Clientes',
            products: 'Produtos',
            services: 'Especialização',
            about: 'Sobre',
            contact: 'Contacto',
            start: "Iniciar",
            home: "Início",
            start_project: "Iniciar Projeto"
        },
        hero: {
            tagline: 'Talento Global. Foco no Brasil.',
            we_build: 'NÓS ENTREGAMOS',
            results: 'RESULTADOS.',
            description: "Acedemos ao top 1% da engenharia e design mundial para construir o futuro digital das empresas brasileiras mais ambiciosas.",
            start_project: 'INICIAR PROJETO',
            view_work: 'VER PROJETOS',
            scroll: 'Percorra para Explorar',
            headline_html: 'Projetamos <br /><span className="text-zinc-500">impérios digitais</span> <br />no Brasil.'
        },
        footer: {
            tagline: 'Transformando visão estratégica em domínio digital.',
            compliance: 'LGPD',
            legal: 'Jurídico',
            privacy: 'Política de Privacidade',
            terms: 'Termos de Serviço',
            cookies: 'Definições de Cookies',
            sitemap: "Mapa do Site",
            products: "Produtos",
            presence: "Presença",
            method: "O Método",
            intelligence: "Inteligência",
            newsletter_desc: "Junte-se ao círculo restrito. Sem spam, apenas domínio.",
            email_placeholder: "Endereço de E-mail",
            join: "ADERIR"
        },
        products: {
            nav: "Produtos",
            version_label: "Versão",
            header: {
                tag: "/ O Repositório",
                title_1: "Ativos",
                title_2: "Digitais & IP.",
                description: "Não construímos apenas para clientes; construímos as ferramentas que moldam o futuro. Licencie a nossa tecnologia proprietária para acelerar o seu roadmap."
            },
            items: {
                velocity: { type: "Acelerador", description: "Um boilerplate de Next.js + Headless Commerce testado em batalha. Pré-configurado para Vtex, Shopify e Wake. Reduz o time-to-market em 60%." },
                synapse: { type: "Middleware", description: "A ligação entre ERPs legados e frontends modernos. Motor de sincronização de dados em tempo real com lógica de re-tentativa e tratamento de erros nativo." },
                obsidian: { type: "Design System", description: "A nossa biblioteca de componentes proprietária. Um conjunto coeso de componentes React e tokens Figma garantindo consistência pixel-perfect em todos os projetos." },
                xray: { type: "Ferramenta de Auditoria", description: "Scanner automatizado de performance e heurística. Gera relatórios acionáveis sobre Core Web Vitals, Acessibilidade e bloqueadores de Conversão." },
                wholesale: { type: "Plataforma SaaS", description: "Um portal B2B white-label para encomendas de alto volume. Gere escalões de preço complexos, re-encomendas e limites de crédito nativamente." },
                edge: { type: "Infraestrutura", description: "Configuração global de CDN e pipeline de otimização de imagens. Garante que os seus ativos sejam servidos do nó mais próximo do utilizador, instantaneamente." }
            }
        },
        cases: {
            header: {
                tag: "/ Clientes",
                title: "Parcerias de Valor.",
                subtitle: "Uma curadoria das empresas que confiam na GHWD para construir o seu futuro digital."
            },
            client_index: {
                tag: "/ Índice de Clientes",
                title: "Confiado por Líderes",
                map_title: "A Nossa Presença Digital no Brasil",
                map_subtitle: "Selecione um dos estados destacados no mapa para ver as marcas e organizações que confiam na GHWD em cada região do país.",
                partners: "parceiros"
            },
            cta: {
                read_case: "Ver Estudo de Caso"
            },
            regions: {
                sp: "São Paulo",
                rs: "Rio Grande do Sul",
                sc: "Santa Catarina",
                ac_national: "Acre & Nacional"
            }
        },
        services: {
            header: {
                tag: "/ Soluções",
                title: "Engenharia de precisão para escala global.",
                subtitle: "Um conjunto abrangente de serviços digitais concebidos para levar a sua marca do conceito à liderança de mercado."
            },
            core_capabilities: "Principais Capacidades",
            method: {
                tag: "/ O Método",
                title: "Como entregamos excelência.",
                steps: [
                    { id: "01", title: "Imersão & Diagnóstico", desc: "Mergulhamos a fundo nas métricas do seu negócio, posicionamento e estrangulamentos técnicos para identificar alavancas reais de crescimento." },
                    { id: "02", title: "Estratégia & Arquitetura", desc: "Um blueprint para o sucesso. Desenhamos a fundação técnica e estratégica necessária para sustentar a sua ambição de longo prazo." },
                    { id: "03", title: "Execução de Alta Fidelidade", desc: "Os nossos especialistas e designers constroem com precisão cirúrgica, garantindo que cada pixel e linha de código tenha um propósito." },
                    { id: "04", title: "Escala & Otimização", desc: "O lançamento é apenas o começo. Implementamos ciclos contínuos de melhorias baseadas em dados para maximizar o seu ROI." }
                ]
            },
            services_cta: {
                title: "Pronto para construir o seu império digital?",
                subtitle: "Somos seletivos com as nossas parcerias. Conte-nos sobre a sua ambição, não apenas os seus requisitos.",
                button: "Iniciar uma Conversa"
            }
        },
        about: {
            header: {
                tag: "/ Atuação Nacional",
                title: "Talento sem fronteiras. Resultados no Brasil.",
                vision_tag: "/ Rede Global",
                vision_title: "Inteligência Global. Foco Local.",
                vision_p1: "Somos um coletivo distribuído. Ao remover restrições geográficas, acedemos ao top 1% de talentos em estratégia, design e engenharia em 4 fusos horários para elevar o nível do mercado brasileiro.",
                vision_p2: "Sem custos fixos. Sem escritórios. Apenas capital intelectual internacional dedicado a alavancar a sua operação nacional."
            }
        },
        contact: {
            header: {
                tag: "/ Aplicação",
                title: "Inicie a Conversa.",
                subtitle: "Somos seletivos com as nossas parcerias. Conte-nos sobre a sua ambição, não apenas os seus requisitos."
            },
            direct_contact: "Contacto Direto",
            form: {
                name: "Nome",
                company: "Empresa",
                email: "E-mail",
                project_type: "Tipo de Projeto",
                budget: "Intervalo de Orçamento",
                ambition: "Conte-nos sobre a sua ambição",
                submit: "Enviar Candidatura"
            },
            qualification: {
                step_label: "Passo",
                of_label: "de",
                question_label: "Pergunta",
                last_step: "Última etapa 🎉",
                contact_data_title: "Os seus dados de contacto",
                contact_data_subtitle: "Promessa: zero spam. Vamos usar isto apenas para lhe responder sobre o projeto.",
                fields: {
                    name: "Nome completo *",
                    name_placeholder: "Como prefere ser chamado?",
                    whatsapp: "WhatsApp *",
                    email: "E-mail *",
                    company: "Nome do seu negócio (opcional)",
                    company_placeholder: "Ex: Minha Empresa Inc."
                },
                buttons: {
                    back: "Voltar",
                    continue: "Continuar",
                    submit: "Enviar & Ver resultado",
                    whatsapp: "Falar agora no WhatsApp"
                },
                results: {
                    hot_title: "Perfeito, {name}!",
                    hot_desc: "As suas respostas mostram que tem um projeto claro e está pronto para avançar. Vamos entrar em contacto em até 24 horas para marcar uma conversa.",
                    warm_title: "Ótimo, {name}!",
                    warm_desc: "Tem um projeto interessante. Vamos enviar-lhe mais informações e conversamos sobre como podemos ajudar no momento certo para si.",
                    cold_title: "Olá, {name}!",
                    cold_desc: "Parece que ainda está a explorar as suas opções — e tudo bem! Vamos enviar-lhe conteúdo útil para quando o momento for certo.",
                    meta_project: "Projeto",
                    meta_deadline: "Prazo",
                    meta_investment: "Investimento",
                    cold_footer: "Entraremos em contacto via e-mail em breve.",
                    wa_hot: "Estou entusiasmado para começar!",
                    wa_warm: "Gostaria de saber mais sobre os serviços.",
                    wa_cold: "Ainda estou a pesquisar, mas gostaria de entender melhor.",
                    errors: {
                        invalid_email: "E-mail inválido",
                        invalid_phone: "Telefone inválido"
                    }
                },
                steps: [
                    { title: "O que precisa?", hint: "Selecione a opção que melhor descreve o seu projeto.", options: ["Landing page / Página de vendas", "Site institucional (apresentar o meu negócio)", "Loja virtual / E-commerce", "Reformular / melhorar site que já tenho", "Outro / Não sei ainda"] },
                    { title: "O seu negócio já está ativo?", hint: "Isto ajuda-nos a entender o contexto do projeto.", options: ["Sim, já estou a vender ou a prestar serviços", "A abrir agora / Em fase de lançamento", "Ainda é uma ideia, estou a pesquisar"] },
                    { title: "Qual é o seu prazo para o projeto?", hint: "Ajuda-nos a priorizar e encaixar o projeto no nosso calendário.", options: ["Urgente — preciso o quanto antes", "Nos próximos 1 a 2 meses", "Sem pressa, quero planear bem"] },
                    { title: "Qual faixa de investimento considera?", hint: "Sem compromisso — serve apenas para lhe apresentarmos as opções certas.", options: ["Até 1.500€", "1.500€ a 4.000€", "4.000€ a 8.000€", "Acima de 8.000€", "Não sei ainda / Quero um orçamento"] },
                    { title: "Como prefere ser contactado?", hint: "Vamos contactá-lo pelo canal da sua preferência.", options: ["WhatsApp — rápido e prático", "E-mail — prefiro por escrito", "Videochamada — quero conversar direto"] }
                ]
            }
        },
        home: {
            services: {
                title: "A Nossa Expertise",
                view_inventory: "Inventário Completo"
            },
            selected_works: {
                tag: "/ Trabalhos Selecionados",
                title: "Autoridade",
                title_italic: "forjada em código.",
                view_archive: "Ver Arquivo",
                case_study: "Estudo de Caso"
            },
            dashboards: {
                tag: "/ Análise de Impacto",
                title_1: "Controle a sua",
                title_2: "trajetória de crescimento.",
                description: "Implementamos sistemas de rastreio e automação de alta fidelidade que transformam dados brutos em estratégia executável.",
                feature_1: { title: "Visibilidade em Tempo Real", desc: "Veja toda a sua operação num único painel." },
                feature_2: { title: "Modelos Preditivos", desc: "Preveja a procura e a receita com precisão algorítmica." },
                feature_3: { title: "Escala Automatizada", desc: "Sistemas que se expandem autonomamente à medida que cresce." }
            },
            services_items: {
                strategy: {
                    title: "Estratégia Digital",
                    desc: "Posicionamento de mercado, diagnóstico de marca e roadmaps de crescimento.",
                    caps: ["Análise de Mercado", "Estratégia de Marca", "Consultoria de Crescimento", "Modelação de Negócios"]
                },
                design: {
                    title: "Design UI/UX",
                    desc: "Interfaces de alto padrão que constroem confiança e autoridade.",
                    caps: ["Design de Produto", "Design Systems", "Prototipagem", "Design de Interação"]
                },
                dev: {
                    title: "Engenharia de Plataforma",
                    desc: "Engenharia robusta e escalável para plataformas complexas.",
                    caps: ["Next.js / React", "Headless Commerce", "Arquitetura de API", "Infraestrutura na Nuvem"]
                },
                ai: {
                    title: "IA & Automação",
                    desc: "Workflows inteligentes e integração de LLM para máxima eficiência.",
                    caps: ["Integração de LLM", "Automação de Workflow", "Agentes de IA Personalizados", "Otimização de Processos"]
                },
                data: {
                    title: "Inteligência de Dados",
                    desc: "Rastreio de alta fidelidade e análise preditiva de performance.",
                    caps: ["Rastreio de Precisão", "Modelação Preditiva", "Dashboards Personalizados", "Análise de ROI"]
                },
                growth: {
                    title: "Performance & Growth",
                    desc: "Convertendo tráfego em receita de alta velocidade.",
                    caps: ["CRO", "SEO Técnico", "Estratégia de Retenção", "Otimização de Funil"]
                },
                commerce: {
                    title: "Experiência de Comércio",
                    desc: "Sistemas globais para escala de retalho e B2B.",
                    caps: ["Núcleo Omnichannel", "Logística Global", "Portal de Revenda", "Modelos de Subscrição"],
                    tags: ["B2B", "Retalho", "Global"]
                }
            },
            projects_items: {
                grendene: { title: "Arquitetura de Ecossistema Digital", desc: "Replatforming de uma gigante global de calçado para mais de 50 mercados." },
                hardrock: { title: "Comércio de Experiência", desc: "Digitalizando a lendária experiência gastronómica do rock & roll." },
                besni: { title: "Núcleo de Retalho Omnichannel", desc: "Ligando mais de 40 lojas físicas com e-commerce de alta velocidade." }
            },
            not_found: {
                title: "Página Não Encontrada",
                subtitle: "A página que procura foi movida ou não existe.",
                back_home: "Voltar ao Início"
            }
        },
        legal: {
            updated: "Última Atualização",
            version: "Versão",
            status: "Estado",
            active: "Vigente",
            privacy: {
                title: "Política de Privacidade",
                subtitle: "O nosso compromisso com a proteção dos dados que impulsionam a sua transformação digital.",
                intro: "A GHWD Global Digital Partner está comprometida com a sua privacidade. Esta política detalha o processamento de dados em conformidade com o Regulamento Geral sobre a Proteção de Dados (RGPD).",
                sections: [
                    {
                        title: "1. Recolha de Dados",
                        content: "Recolhemos informações para prestar melhores serviços. Isto inclui entradas diretas (formulários), dados de navegação (IP, browser) e cookies. Sob o RGPD, atuamos como Responsáveis pelo Tratamento para os nossos clientes diretos."
                    },
                    {
                        title: "2. Utilização da Informação",
                        content: "Utilizamos os dados para operar os nossos serviços digitais, otimizar a performance e para interesses comerciais legítimos, como marketing (com consentimento). Não comercializamos dados pessoais."
                    },
                    {
                        title: "3. Transferências Internacionais",
                        content: "Como entidade global, os dados podem ser processados em regiões fora do Espaço Económico Europeu. Garantimos a existência de salvaguardas adequadas (Cláusulas Contratuais Tipo)."
                    },
                    {
                        title: "4. Os Seus Direitos (RGPD)",
                        content: "Tem o direito de aceder, retificar, apagar, limitar o tratamento e a portabilidade dos seus dados. Contacte legal@ghwd.digital para exercer estes direitos."
                    }
                ]
            },
            terms: {
                title: "Termos de Serviço",
                subtitle: "As regras que regem a nossa parceria digital e a utilização das nossas plataformas.",
                intro: "Ao aceder aos nossos serviços, concorda com estes termos. Se representa uma organização, certifica que tem autoridade para a vincular.",
                sections: [
                    {
                        title: "1. Propriedade Intelectual",
                        content: "Todo o código, metodologias ('The Method') e ativos são propriedade da GHWD, a menos que explicitamente transferidos via contrato. 'Autoridade forjada em código' é a nossa marca registada."
                    },
                    {
                        title: "2. Responsabilidade",
                        content: "A GHWD presta serviços 'tal como estão'. Aderimos a um SLA de 99,9% para serviços geridos, mas não somos responsáveis por danos indiretos ou eventos de força maior."
                    },
                    {
                        title: "3. Lei Aplicável",
                        content: "Estes termos são regidos pelas leis de comércio internacional e acordos de confidencialidade estritos assinados por projeto."
                    }
                ]
            },
            cookies: {
                title: "Definições de Cookies",
                subtitle: "Gira as suas preferências de privacidade e escolha como utilizamos os seus dados.",
                desc: "Utilizamos cookies para garantir a integridade da plataforma e analisar a performance.",
                types: {
                    essential: { title: "Essenciais", desc: "Necessários para o funcionamento básico (segurança, equilíbrio de carga)." },
                    functional: { title: "Funcionais", desc: "Permitem a personalização e seleção de região." },
                    analytics: { title: "Analíticos", desc: "Rastreio anónimo de padrões de utilização para otimizar a UX." },
                    marketing: { title: "Marketing", desc: "Retargeting e relevância de anúncios (desativados por defeito)." }
                },
                save: "Guardar Preferências",
                saved: "Preferências Guardadas!",
                reject: "Rejeitar Todos",
                retention: "Política de Retenção: Os dados são mantidos apenas pelo tempo necessário."
            }
        }
    },
    es: {
        nav: {
            clients: 'Clientes',
            products: 'Productos',
            services: 'Expertise',
            about: 'Sobre',
            contact: 'Contacto',
            start: "Iniciar",
            home: "Home",
            start_project: "Iniciar Proyecto"
        },
        hero: {
            tagline: 'Talento Global. Foco en Brasil.',
            we_build: 'NOSOTROS CREAMOS',
            results: 'RESULTADOS.',
            description: "Accedemos al top 1% de la ingeniería y diseño mundial para construir el futuro digital de las empresas brasileñas más ambiciosas.",
            start_project: 'INICIAR PROYECTO',
            view_work: 'VER PROYECTOS',
            scroll: 'Desplazarse para Explorar',
            headline_html: 'Diseñamos <br /><span className="text-zinc-500">imperios digitales</span> <br />en Brasil.'
        },
        footer: {
            tagline: 'Transformando la visión estratégica en dominio digital.',
            compliance: 'Legal',
            legal: 'Legal',
            privacy: 'Política de Privacidad',
            terms: 'Termos de Servicio',
            cookies: 'Configuración de Cookies',
            sitemap: "Sitemap",
            products: "Productos",
            presence: "Presencia",
            method: "El Método",
            intelligence: "Inteligencia",
            newsletter_desc: "Únete al círculo interno. Sin spam, solo dominio.",
            email_placeholder: "Correo Electrónico",
            join: "ENTRAR"
        },
        products: {
            nav: "Productos",
            version_label: "Versión",
            header: {
                tag: "/ El Repositorio",
                title_1: "Activos",
                title_2: "Digitales & IP.",
                description: "No solo construimos para clientes; construimos las herramientas que construyen el futuro. Licencie nuestra tecnología proprietaria para acelerar su hoja de ruta."
            },
            items: {
                velocity: { type: "Acelerador", description: "Un boilerplate de Next.js + Headless Commerce probado en batalla. Preconfigurado para Vtex, Shopify y Wake. Reduce el tiempo de comercialización en un 60%." },
                synapse: { type: "Middleware", description: "El pegamento entre ERPs heredados y frontends modernos. Motor de sincronización de datos en tiempo real con lógica de reintento y manejo de errores nativo." },
                obsidian: { type: "Sistema de Diseño", description: "Nuestra biblioteca de componentes patentada. Un conjunto cohesivo de componentes React y tokens Figma que garantizan una coherencia perfecta en todos los proyectos." },
                xray: { type: "Herramienta de Auditoría", description: "Escláner automatizado de rendimiento y heurística. Genera informes procesables sobre Core Web Vitals, Accesibilidad y bloqueadores de Conversión." },
                wholesale: { type: "Plataforma SaaS", description: "Un portal B2B de marca blanca para pedidos de gran volumen. Maneja niveles de precios complejos, reordenamiento y límites de crédito de forma nativa." },
                edge: { type: "Infraestructura", description: "Configuración global de CDN y canalización de optimización de imágenes. Asegura que sus activos se sirvan desde el nodo más cercano al usuario, al instante." }
            }
        },
        cases: {
            header: {
                tag: "/ Clientes",
                title: "Alianzas de Valor.",
                subtitle: "Una curaduría de empresas que confían en GHWD para construir su futuro digital."
            },
            client_index: {
                tag: "/ Índice de Clientes",
                title: "Confiado por Líderes",
                map_title: "Nuestra Presencia Digital en Brasil",
                map_subtitle: "Seleccione uno de los estados destacados en el mapa para ver las marcas y organizaciones que confían en GHWD en cada región del país.",
                partners: "socios"
            },
            cta: {
                read_case: "Ver Estudio de Caso"
            },
            regions: {
                sp: "São Paulo",
                rs: "Río Grande del Sur",
                sc: "Santa Catarina",
                ac_national: "Acre & Nacional"
            }
        },
        services: {
            header: {
                tag: "/ Capacidades",
                title: "Ingeniería para el Dominio.",
                subtitle: "Un conjunto completo de servicios digitales diseñados para llevar su marca desde el concepto hasta el liderazgo de mercado."
            },
            core_capabilities: "Capacidades Principales",
            method: {
                tag: "/ El Método",
                title: "Cómo entregamos excelencia.",
                steps: [
                    { id: "01", title: "Inmersión & Diagnóstico", desc: "Nos sumergimos profundamente en sus métricas de negocio, posicionamiento y cuellos de botella técnicos para identificar palancas reales de crecimiento." },
                    { id: "02", title: "Estrategia & Arquitectura", desc: "Un mapa para el éxito. Diseñamos la base técnica y estratégica necesaria para sustentar su ambición a largo plazo." },
                    { id: "03", title: "Ejecución de Alta Fidelidad", desc: "Nuestros ingenieros y diseñadores construyen con precisión quirúrgica, asegurando que cada píxel y línea de código sirva a un propósito." },
                    { id: "04", title: "Escala & Optimización", desc: "El lanzamiento es solo el comienzo. Implementamos ciclos continuos de mejoras basadas en datos para maximizar su ROI." }
                ]
            },
            services_cta: {
                title: "¿Listo para diseñar su imperio digital?",
                subtitle: "Somos selectivos con nuestras asociaciones. Cuéntenos sobre su ambición, no solo sus requisitos.",
                button: "Iniciar una Conversación"
            }
        },
        about: {
            header: {
                tag: "/ Actuación Nacional",
                title: "Talento sin fronteras. Resultados en Brasil.",
                vision_tag: "/ Red Global",
                vision_title: "Inteligencia Global. Enfoque Local.",
                vision_p1: "Somos un colectivo distribuido. Al eliminar las restricciones geográficas, accedemos al top 1% de talentos en estrategia, diseño e ingeniería en 4 husos horarios para elevar el mercado brasileño.",
                vision_p2: "Sin costos fijos. Sin oficinas. Solo capital intelectual internacional dedicado a impulsar su operación nacional."
            }
        },
        contact: {
            header: {
                tag: "/ Aplicación",
                title: "Inicie la Conversación.",
                subtitle: "Somos selectivos con nuestras asociaciones. Cuéntenos sobre su ambición, no solo sus requisitos."
            },
            direct_contact: "Contacto Directo",
            form: {
                name: "Nombre",
                company: "Empresa",
                email: "Correo electrónico",
                project_type: "Tipo de Proyecto",
                budget: "Rango de Presupuesto",
                ambition: "Cuéntenos sobre la ambición",
                submit: "Enviar Aplicación"
            },
            qualification: {
                step_label: "Paso",
                of_label: "de",
                question_label: "Pregunta",
                last_step: "Último paso 🎉",
                contact_data_title: "Tus datos de contacto",
                contact_data_subtitle: "Promesa: cero spam. Solo usaremos esto para contactarte sobre el proyecto.",
                fields: {
                    name: "Nombre completo *",
                    name_placeholder: "¿Cómo prefieres que te llamemos?",
                    whatsapp: "WhatsApp *",
                    email: "Correo electrónico *",
                    company: "Nombre de tu negocio (opcional)",
                    company_placeholder: "Ej: Mi Empresa Inc."
                },
                buttons: {
                    back: "Volver",
                    continue: "Continuar",
                    submit: "Enviar y ver resultado",
                    whatsapp: "Hablar ahora por WhatsApp"
                },
                results: {
                    hot_title: "¡Perfecto, {name}!",
                    hot_desc: "Tus respuestas muestran que tienes un proyecto claro y estás listo para avanzar. Nos pondremos en contacto en menos de 24 horas para programar una charla.",
                    warm_title: "¡Genial, {name}!",
                    warm_desc: "Tienes un proyecto interesante. Te enviaremos más información y hablaremos sobre cómo podemos ayudar en el momento adecuado para ti.",
                    cold_title: "¡Hola, {name}!",
                    cold_desc: "Parece que todavía estás explorando tus opciones, ¡y está bien! Te enviaremos contenido útil para cuando llegue el momento adecuado.",
                    meta_project: "Proyecto",
                    meta_deadline: "Plazo",
                    meta_investment: "Inversión",
                    cold_footer: "Nos pondremos en contacto por correo electrónico pronto.",
                    wa_hot: "¡Estoy emocionado por empezar!",
                    wa_warm: "Me gustaría saber más sobre los servicios.",
                    wa_cold: "Todavía estou investigando, pero me gustaría entender mejor.",
                    errors: {
                        invalid_email: "Correo electrónico inválido",
                        invalid_phone: "Teléfono inválido"
                    }
                },
                steps: [
                    { title: "¿Qué necesitas?", hint: "Selecciona la opción que mejor describa tu proyecto.", options: ["Landing page / Página de ventas", "Sitio institucional", "Tienda virtual / E-commerce", "Reformular / mejorar sitio actual", "Otro / No lo sé todavía"] },
                    { title: "¿Tu negocio ya está activo?", hint: "Esto nos ayuda a entender el contexto del proyecto.", options: ["Sí, ya estoy vendiendo o prestando servicios", "Abriendo ahora / Fase de lanzamiento", "Todavía es una idea, estoy investigando"] },
                    { title: "¿Cuál es tu plazo para el proyecto?", hint: "Nos ayuda a priorizar y encajar el proyecto en nuestro calendario.", options: ["Urgente — lo antes posible", "En los próximos 1 a 2 meses", "Sin prisa, quiero planificar bien"] },
                    { title: "¿Qué rango de inversión consideras?", hint: "Sin compromiso — solo para presentarte las opciones adecuadas.", options: ["Hasta $1,500", "$1,500 a $4,000", "$4,000 a $8,000", "Más de $8,000", "No lo sé todavía / Quiero un presupuesto"] },
                    { title: "¿Cómo prefieres ser contactado?", hint: "Te llamaremos por tu canal preferido.", options: ["WhatsApp — rápido y práctico", "Email — prefiero por escrito", "Videollamada — quiero hablar directo"] }
                ]
            }
        },
        home: {
            services: {
                title: "Nuestra Expertise",
                view_inventory: "Inventario Completo"
            },
            selected_works: {
                tag: "/ Trabajos Seleccionados",
                title: "Autoridad",
                title_italic: "probada en código.",
                view_archive: "Ver Archivo",
                case_study: "Estudio de Caso"
            },
            dashboards: {
                tag: "/ Análisis de Impacto",
                title_1: "Controle su",
                title_2: "trayectoria de crecimiento.",
                description: "Implementamos sistemas de seguimiento y automatización de alta fidelidad que convierten los datos brutos en estrategia ejecutable.",
                feature_1: { title: "Visibilidad en Tiempo Real", desc: "Vea toda su operación en un solo panel." },
                feature_2: { title: "Modelos Predictivos", desc: "Prevea la demanda y los ingresos con precisión algorítmica." },
                feature_3: { title: "Escala Automatizada", desc: "Sistemas que se expanden de forma autónoma a medida que crece." }
            },
            services_items: {
                strategy: {
                    title: "Estrategia Digital",
                    desc: "Posicionamiento de mercado, diagnóstico de marca y planes de crecimiento.",
                    caps: ["Análisis de Mercado", "Estrategia de Marca", "Consultoría de Crecimiento", "Modelado de Negocios"]
                },
                design: {
                    title: "Diseño UI/UX",
                    desc: "Interfaces de alta gama que generan confianza y autoridad.",
                    caps: ["Diseño de Producto", "Sistemas de Diseño", "Prototipado", "Diseño de Interacción"]
                },
                dev: {
                    title: "Ingeniería de Plataforma",
                    desc: "Ingeniería robusta y escalable para plataformas complejas.",
                    caps: ["Next.js / React", "Comercio Headless", "Arquitectura de API", "Infraestructura Cloud"]
                },
                ai: {
                    title: "IA & Automatización",
                    desc: "Flujos de trabajo inteligentes e integración de LLM para máxima eficiencia.",
                    caps: ["Integración de LLM", "Automatización de Flujos", "Agentes de IA", "Optimización de Procesos"]
                },
                data: {
                    title: "Inteligencia de Datos",
                    desc: "Seguimiento de alta fidelidad y análisis predictivo del rendimiento.",
                    caps: ["Tracking de Precisión", "Modelado Predictivo", "Dashboards", "Análisis de ROI"]
                },
                growth: {
                    title: "Performance & Growth",
                    desc: "Convirtiendo el tráfico en ingresos de alta velocidad.",
                    caps: ["CRO", "SEO Técnico", "Estrategia de Retención", "Optimización de Embudo"]
                },
                commerce: {
                    title: "Commerce Experience",
                    desc: "Sistemas globales para escala minorista y B2B.",
                    caps: ["Core Omnicanal", "Logística Global", "Portal B2B", "Modelos de Suscripción"],
                    tags: ["B2B", "Retail", "Global"]
                }
            },
            projects_items: {
                grendene: { title: "Arquitectura de Ecosistema Digital", desc: "Replataforma de un gigante mundial del calzado para más de 50 mercados." },
                hardrock: { title: "Commerce de Experiencia", desc: "Digitalizando la legendaria experiencia gastronómica del rock & roll." },
                besni: { title: "Núcleo de Venta Omnicanal", desc: "Conectando más de 40 tiendas físicas con comercio electrónico de alta velocidad." }
            },
            not_found: {
                title: "Página No Encontrada",
                subtitle: "La página que buscas ha sido movida o no existe.",
                back_home: "Volver al Inicio"
            }
        },
        legal: {
            updated: "Última Actualización",
            version: "Versión",
            status: "Estado",
            active: "Vigente",
            privacy: {
                title: "Política de Privacidad",
                subtitle: "Nuestro compromiso con la protección de los datos que impulsan su transformación digital.",
                intro: "GHWD Global Digital Partner está comprometida con su privacidad. Esta política explica cómo procesamos los datos en cumplimiento con GDPR y normas internacionales.",
                sections: [
                    {
                        title: "1. Recolección de Datos",
                        content: "Recopilamos información para mejorar nuestros servicios. Esto incluye entradas directas, datos de navegación y cookies."
                    },
                    {
                        title: "2. Uso de la Información",
                        content: "Utilizamos los datos para operar nuestros servicios digitales y para intereses comerciales legítimos. No vendemos datos personales."
                    },
                    {
                        title: "3. Transferencias Internacionales",
                        content: "Como entidad global, los datos pueden procesarse en varias regiones. Aseguramos salvaguardas adecuadas en todas las transferencias."
                    },
                    {
                        title: "4. Sus Derechos",
                        content: "Tiene derecho a acceder, rectificar, borrar y portar sus datos. Contacte a legal@ghwd.digital para ejercer estos derechos."
                    }
                ]
            },
            terms: {
                title: "Términos de Servicio",
                subtitle: "Las reglas que rigen nuestra asociación digital y el uso de la plataforma.",
                intro: "Al acceder a nuestros servicios, acepta estos términos. Si representa a una organización, certifica que tiene la autoridad para vincularla.",
                sections: [
                    {
                        title: "1. Propiedad Intelectual",
                        content: "Todo el código, metodologías y activos son propiedad de GHWD a menos que se transfieran explícitamente. 'Autoridad forjada en código' es nuestra marca registrada."
                    },
                    {
                        title: "2. Responsabilidad",
                        content: "GHWD proporciona servicios con excelencia técnica. No somos responsables por daños indirectos o eventos de fuerza mayor."
                    },
                    {
                        title: "3. Ley Aplicable",
                        content: "Estos términos se rigen por las leyes de comercio internacional y acuerdos de confidencialidad estrictos."
                    }
                ]
            },
            cookies: {
                title: "Configuración de Cookies",
                subtitle: "Gestione sus preferencias de privacidad y uso de datos.",
                desc: "Usamos cookies para garantizar la integridad de la plataforma y analizar el rendimiento.",
                types: {
                    essential: { title: "Esenciales", desc: "Requeridos para la funcionalidad básica (seguridad)." },
                    functional: { title: "Funcionales", desc: "Permiten personalización y selección de región." },
                    analytics: { title: "Analíticas", desc: "Rastreo anónimo de patrones de uso." },
                    marketing: { title: "Marketing", desc: "Relevancia de anuncios (desactivado por defecto)." }
                },
                save: "Guardar Preferencias",
                saved: "¡Preferencias Guardadas!",
                reject: "Rechazar Todo",
                retention: "Política de Retención: Los datos se conservan solo el tiempo necesario."
            }
        }
    }
};
