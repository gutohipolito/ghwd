
export type Language = 'en' | 'pt' | 'es' | 'pt-pt';

export const translations: Record<Language, any> = {
    en: {
        nav: {
            clients: 'Partners',
            products: 'Products',
            services: 'Expertise',
            about: 'About',
            contact: 'Contact',
            start: "Start",
            home: "Home",
            start_project: "Talk to Specialist",
            faq: "FAQ",
            kb: "KB",
            glossary: "Glossary"
        },
        hero: {
            tagline: 'Global Talent. Focus on Brazil.',
            we_build: 'WE BUILD',
            results: 'RESULTS.',
            description: "We access the top 1% of global engineering and design to build the digital future of the most ambitious Brazilian companies.",
            start_project: 'TALK TO SPECIALIST',
            view_work: 'VIEW WORK',
            scroll: 'Scroll to Explore',
            headline_html: 'Web Development, <br /><span className="text-zinc-500">AI & Automation</span> <br />for Businesses.'
        },
        footer: {
            title_1: "AI Automation",
            title_2: "& System Integration.",
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
                tag: "/ Partners",
                title: "Valued Partnerships.",
                subtitle: "A curation of companies that trust us to build their digital future."
            },
            client_index: {
                tag: "/ Partner Index",
                title: "Trusted by Leaders",
                map_title: "Our Digital Presence Across Brazil",
                map_subtitle: "Select one of the highlighted states on the map to see the brands and organizations that trust us in each region.",
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
            },
            comparison: {
                tag: "/ Efficiency",
                title: "Why GHWD?",
                subtitle: "A side-by-side comparison of speed, architecture, and reliability.",
                headers: ["Criteria", "GHWD (Next.js Edge)", "Traditional Agency", "Freelancer"],
                rows: [
                    { label: "Performance (LCP)", c1: "< 1.2s (Ultra Fast)", c2: "3s - 5s (Slow / Bloated)", c3: "Variable (Unoptimized)" },
                    { label: "Architecture", c1: "Headless & Serverless", c2: "Monolithic (WordPress/PHP)", c3: "Template-based / Ad-hoc" },
                    { label: "Code & DOM Quality", c1: "Surgical & Clean (Low DOM)", c2: "Heavy Plugin Dependency", c3: "Inconsistent Quality" },
                    { label: "Support & SLA", c1: "24/7 Dedicated Support", c2: "Business Hours Only", c3: "No SLA Guarantee" },
                    { label: "Scalability", c1: "Unlimited Edge CDN Scale", c2: "Server CPU-Bound", c3: "Limited Capability" }
                ]
            }
        },
        about: {
            header: {
                tag: "/ National Presence",
                title: "Borderless talent. Results in Brazil.",
                vision_tag: "/ Global Network",
                vision_title: "Global Intelligence. Local Focus.",
                vision_p1: "We are a distributed collective. By removing geographical constraints, we access the top 1% of talent in strategy, design, and engineering across 4 time zones to elevate the Brazilian market.",
                vision_p2: "No overhead. No offices. Just international intellectual capital dedicated to scaling your national operation.",
                mission_p1: "Born from a simple observation: most traditional agencies profit from complexity and prolonged timelines. We operate on the opposite logic.",
                mission_p2: "We are a <strong className=\"text-white font-normal\">global digital unit</strong> — an elite collective of top-tier strategists and specialists, free from the constraints and overhead of a physical headquarters.",
                mission_p3: "We operate with radical transparency and surgical execution. We don't just build websites; we engineer the digital infrastructure where the future of business lives."
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
                wa_template: "Hello! My name is {name}{company}.\nI filled out the form on the site and my project is: {project}.\nBudget considered: {budget}.\n{msg}",
                wa_company_part: " and I represent {company}",
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
                title: "Corporate Web Development",
                view_inventory: "Full Inventory"
            },
            selected_works: {
                tag: "/ Selected Works",
                title: "Selected",
                title_italic: "Projects.",
                view_archive: "View Archive",
                case_study: "Case Study"
            },
            dashboards: {
                tag: "/ Impact Analysis",
                title_1: "SEO &",
                title_2: "Digital Growth.",
                description: "We implement high-fidelity tracking and automation systems that turn raw data into executable strategy.",
                feature_1: { title: "Real-time Visibility", desc: "See your entire operation in a single pane of glass." },
                feature_2: { title: "Predictive Models", desc: "Forecast demand and revenue with algorithmic precision." },
                feature_3: { title: "Automated Scale", desc: "Systems that expand autonomously as you grow." }
            },
                        services_items: {
                saas: {
                    title: "Architecture & Projects",
                    desc: "We model software architecture and engineer complex cloud infrastructures, ensuring the delivery of scalable, secure, and high-performance digital projects.",
                    caps: ["Cloud Architecture", "Software Engineering", "Custom Projects", "Data Security"]
                },
                design: {
                    title: "UI/UX Design",
                    desc: "We design exclusive user interfaces (UI/UX) and high-performance modular design systems focused on usability, brand authority, and lead conversion rates.",
                    caps: ["Product Design", "Design Systems", "Prototyping", "Interaction Design"]
                },
                dev: {
                    title: "Web Development",
                    desc: "We develop ultra-fast institutional websites and corporate portals using Next.js, React, and Tailwind CSS v4, ensuring maximum Lighthouse scores and under 1-second load times.",
                    caps: ["Next.js / React", "Websites", "SSG/SSR Dynamic Render", "Performance Auditing"]
                },
                ai: {
                    title: "AI Engineering",
                    desc: "We develop AI agents integrated with ChatGPT, Claude, Gemini, and enterprise systems to automate customer service, sales, support, and operations.",
                    caps: ["LLM Integration", "Custom AI Agents", "RAG Systems", "AI Workflows"]
                },
                automation: {
                    title: "Workflow Automation",
                    desc: "We build end-to-end automation pipelines integrating operational tools and APIs via n8n and Make to replace repetitive tasks with intelligent data flows.",
                    caps: ["n8n & Make", "API Integrations", "Database Automation", "Process Optimization"]
                },
                geo: {
                    title: "GEO & AI Search SEO",
                    desc: "We optimize website content with JSON-LD Schema.org and TL;DR summaries to ensure your brand is cited and recommended in ChatGPT, Gemini, and Perplexity searches.",
                    caps: ["AI Search Optimization", "GEO Strategy", "Semantic Data", "Core Web Vitals"]
                },
                commerce: {
                    title: "Headless Commerce",
                    desc: "We build custom headless e-commerce platforms and B2B portals integrating Shopify Plus, VTEX, and custom APIs for secure sales and real-time inventory sync.",
                    caps: ["Custom Commerce", "B2B wholesale Portal", "Shopify / VTEX", "Subscription Engines"]
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
            },
            editorial: {
                tag: "/ Technical Editorial",
                title: "Engineering Premium Digital Nervous Systems & AI Infrastructures",
                subtitle: "How we build custom web platforms, automated data pipelines, and secure cognitive integrations for high-growth enterprises.",
                sections: [
                    {
                        title: "01 / Web Engineering & Decoupled Performance",
                        content: `Traditional monolithic website architectures, such as classic WordPress setups or visual drag-and-drop builders, have introduced significant code overhead and heavy DOM tree nesting (DOM bloating). For high-scale B2B organizations, this inefficiency directly harms organic indexability and lead conversions. At GHWD, we eliminate these friction points by designing static-first, highly modular frontend architectures using Next.js, React, and Tailwind CSS v4. By generating optimized static pages (SSG) and serving them globally via Edge CDNs, we consistently deliver instant loading states with Largest Contentful Paint (LCP) under 1.0 second and Interaction to Next Paint (INP) under 50 milliseconds. This level of technical execution ensures that our client's platforms score a perfect 100/100 on Google Lighthouse performance audits, maximizing lead retention and organic acquisition.`
                    },
                    {
                        title: "02 / Cognitive AI Integration & Secure RAG Architectures",
                        content: `Generative Artificial Intelligence is transforming business operations, moving from simple chat widgets to advanced workflow-integrated systems. We develop secure, custom cognitive agents powered by large language models like GPT-4, Claude, and Google Gemini, configured with Retrieval-Augmented Generation (RAG) pipelines. These agents safely connect to private databases, legacy ERPs, and CRMs, allowing natural language queries without exposing sensitive credentials or keys. Our setups allow corporate systems to perform tasks like real-time customer support queries, automated drafting of targeted sales pitches, and complex analytics reports compiled directly from natural language prompts, all under strict data privacy protocols.`
                    },
                    {
                        title: "03 / Process Automation & Integrated Workflows",
                        content: `Manual tasks like retyping customer data, delayed invoice generation, and decoupled inventory sheets cause bottlenecks that hinder company growth. GHWD designs and implements automated process pipelines that integrate CRM platforms (Salesforce, HubSpot, RD Station), ERP systems (SAP, TOTVS, Bling), databases, and channels (WhatsApp, Slack, Email). Using integration platforms like n8n and Make or custom-built Node.js microservices, we build reliable, automated workflows where invoices, data updates, and lead assignments execute in under 3 seconds. This reduces operational overhead by up to 80% and allows internal teams to focus on strategy.`
                    },
                    {
                        title: "04 / Headless Commerce & B2B Wholesale Channels",
                        content: `Decoupled architectures represent the future of digital transactions. By separating the visual presentation layer (frontend) from the backend transactional database (VTEX, Shopify Plus), headless commerce provides total design flexibility, robust security, and the ability to process high transaction volumes without slowdowns. We specialize in building tailored shopping experiences and B2B wholesale portals (Wholesale OS) that support complex price rules, bulk buying, credit limit validations, and real-time inventory updates, providing a seamless buying experience for distributors and end consumers alike.`
                    },
                    {
                        title: "05 / Generative Engine Optimization (GEO) & Semantic AI Search",
                        content: `Traditional search engine optimization (SEO) focused mainly on placing search keywords on pages to rank on search engine results pages. In the era of generative AI, users get synthesized, direct answers from virtual search assistants (ChatGPT Search, Gemini, and Perplexity). To make your company the primary source cited in these search summaries, websites must be optimized with GEO strategies. We inject custom structured metadata (Schema.org JSON-LD graph configurations) directly into pre-rendered HTML pages, format content with factual, clear summaries (TL;DR sections) easy for RAG engines to scan, and structure text around real user intent, securing visibility in the next generation of web search.`
                    }
                ]
            }
},
        legal: {
            updated: "Last Updated",
            last_update_date: "April 2026",
            version: "Version",
            status: "Status",
            active: "Active",
            privacy: {
                title: "Privacy Policy",
                subtitle: "Our commitment to protecting the data that powers your digital transformation.",
                intro: "GHWD Global Digital Partner is committed to protecting your privacy. This policy explains how we process data in compliance with GDPR and international standards.",
                sections: [
                    {
                        title: "1. Information Collection",
                        content: "We collect information to provide better services to all our users. This includes information you provide (name, email, company) and navigation data (IP, browser, cookies) gathered under LGPD/GDPR compliance."
                    },
                    {
                        title: "2. Purpose of Processing",
                        content: "We use data to operate our digital services, personalize experiences, and for continuous performance improvement. We do not sell user data to third parties."
                    },
                    {
                        title: "3. Data Sharing",
                        content: "We operate globally. Data may be shared with infrastructure partners (AWS, Vercel) under strict confidentiality and security agreements, only as necessary to provide our services."
                    },
                    {
                        title: "4. Data Security",
                        content: "We implement robust technical and organizational security measures to protect your data against unauthorized access, alteration, or disclosure."
                    },
                    {
                        title: "5. Your Rights (LGPD/GDPR)",
                        content: "You have the right to access, correct, delete, or limit the processing of your personal data. Contact our DPO at legal@ghwd.com.br to exercise these rights."
                    }
                ]
            },
            terms: {
                title: "Terms of Service",
                subtitle: "The rules governing our digital partnership and the use of our platforms.",
                intro: "By accessing our services, you agree to these terms. Use of our IP and technology is subject to specific commercial licenses.",
                sections: [
                    {
                        title: "1. Intellectual Property",
                        content: "All code, design, and GHWD's proprietary methodology are protected. Our visual assets and technical implementations are exclusive property."
                    },
                    {
                        title: "2. Liability Limitation",
                        content: "Our services are provided with technical excellence, but we do not guarantee third-party results. Liability is limited to the established contract value."
                    },
                    {
                        title: "3. Jurisdiction",
                        content: "These terms are governed by Brazilian law. Any disputes will be resolved in the courts of São Paulo/SP, Brazil."
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
        },
                faq: {
            header: {
                tag: "/ Intelligence",
                title: "Frequently Asked Questions.",
                subtitle: "Everything you need to know about our high-performance software engineering, methodology, and investment brackets."
            },
            author_section: {
                author_title: "Curated by",
                author_name: "Gustavo Hipólito",
                author_role: "Lead Software Architect",
                last_updated: "Last updated"
            },
            questions: [
                {
                    q: "What is GHWD and what types of projects does the studio specialize in?",
                    a: `GHWD is a high-performance software engineering and digital design studio. We specialize in the development of ultra-fast institutional websites with Next.js, custom scalable SaaS software architectures, advanced workflow automation pipelines, and Artificial Intelligence engineering, integrating large language models (LLMs) such as ChatGPT, Claude, and Gemini with legacy enterprise databases. Our core technical advantage lies in eliminating code overhead (DOM bloating) and delivering maximum speed with perfect 100/100 Google Lighthouse scores, ensuring lead conversion and organic indexing across traditional SEO channels and AI answer engines (GEO).

**Short Answer:** GHWD is a specialized studio focusing on Next.js software engineering, UI/UX design, custom API integrations, and AI agent deployment, delivering peak performance with maximum Lighthouse scores and full data compliance.`
                },
                {
                    q: "What is workflow automation and how does it optimize corporate processes?",
                    a: `Workflow automation is the use of software architecture to connect isolated software systems and automate repetitive tasks that traditionally require manual human intervention. At GHWD, we design and build automated pipelines that connect systems like CRMs (Salesforce, HubSpot, RD Station), ERPs (SAP, TOTVS, Bling), databases, and communication channels (Slack, WhatsApp, Email) using modern integration layers such as n8n, Make, or custom microservices. The primary objective is to eliminate typos, processing delays, and bureaucratic bottlenecks. With a structured automated pipeline, operations such as invoicing, inventory sync, and lead routing are executed in under 3 seconds, reducing operational overhead by up to 80% and freeing internal teams to focus on strategy.

**Short Answer:** Workflow automation connects disjointed software systems (CRM, ERP, databases) to execute automatic data flows without human friction, cutting operational costs by up to 80% and removing manual errors.`
                },
                {
                    q: "How does the integration of AI models like ChatGPT into ERP and CRM systems work?",
                    a: `Integrating generative Artificial Intelligence models (such as OpenAI's GPT-4, Anthropic's Claude, and Google's Gemini) into enterprise management systems (ERP and CRM) is achieved through secure API protocols and structured orchestrators. At GHWD, we develop custom cognitive agents built on RAG (Retrieval-Augmented Generation) architectures. The AI agent is connected securely to the company's internal database or CRM, programmed to read and process business context while respecting data privacy rules. Practically, this allows the AI to perform complex actions, such as answering client support questions by querying order status from the ERP in real-time, drafting personalized sales pitches based on lead history in the CRM, or compiling analytics reports from natural language prompts.

**Short Answer:** AI integration is done via secure LLM APIs and RAG architectures, enabling cognitive agents to safely query private databases, handle support requests, and generate business reports contextually.`
                },
                {
                    q: "How much does a software development or AI implementation project cost with GHWD?",
                    a: `Development costs with GHWD are structured with complete transparency based on the scope, scale, and technical complexity of the delivery. Our custom, high-speed Next.js websites and landing pages start in the range of R$ 4,000 to R$ 8,000. Moderate workflow automation projects (connecting multiple software systems via APIs and n8n) range from R$ 6,000 to R$ 12,000. High-end custom software platforms (SaaS) or deep AI implementations (custom cognitive agents, vector databases, and RAG architectures) start in the range of R$ 15,000 to R$ 30,000+, depending on the legacy complexity. We provide transparent, value-driven bids with detailed technical deliverables.

**Short Answer:** High-speed Next.js landing pages start at R$ 4,000, workflow automation via APIs starts at R$ 6,000, and custom SaaS platforms or full cognitive AI integrations start at R$ 15,000.`
                },
                {
                    q: "What is the average timeline to develop and launch a custom system or website?",
                    a: `The average timeline to develop and launch a project varies based on its functional complexity and the scale of integrations. Landing pages optimized for high conversion are delivered and published within 2 to 3 weeks. Complete institutional websites with headless CMS integrations require 4 to 6 weeks of engineering. Scalable custom web applications, headless commerce portals (Shopify/VTEX), or corporate dashboard panels take 6 to 9 weeks. Large-scale enterprise systems, such as legacy replatforming, SaaS development from scratch, or complex AI pipelines integrated with ERPs require 8 to 12 weeks of engineering. We use agile sprints with bi-weekly updates to ensure continuous validation.

**Short Answer:** Landing pages take 2 to 3 weeks, institutional websites require 4 to 6 weeks, and custom SaaS platforms, complex headless commerce, or AI integrations require 8 to 12 weeks.`
                },
                {
                    q: "Does GHWD guarantee data security and compliance with LGPD and GDPR regulations?",
                    a: `Yes. Information security and legal compliance with LGPD and GDPR are fundamental pillars of the software engineering executed by GHWD. In every software project, Next.js website, and automated pipeline, we enforce strict protocols including end-to-end data encryption (in transit and at rest), secure authentication (OAuth2/OpenID), granular API key access controls, and database isolation. Furthermore, our static SSG and serverless architectures naturally eliminate common Edge attack vectors (like SQL Injection and Cross-Site Scripting). We design consent modules and data collection forms in compliance with the law, ensuring privacy and protecting our clients' corporate reputation.

**Short Answer:** Yes, we implement advanced encryption, secure authentication, and serverless Edge security, ensuring full compliance of data pipelines and database architectures with LGPD and GDPR.`
                }
            ]
        },
        kb: {
            pretitle: "/ AI & Engineering Hub",
            title: "KB.",
            subtitle: "Technical articles, engineering guides, and deep-dive references on enterprise artificial intelligence, RAG, MCP protocol, and B2B automation.",
            back_to_directory: "Back to Knowledge Base",
            read_time: "read",
            technical_author: "Technical Author",
            related_topics: "Related Topics",
            faq_title: "Frequently Asked Questions",
            cta_title: "Want to implement AI in your company?",
            cta_desc: "Schedule a free diagnosis and discover the automation potential of your business.",
            cta_button: "Talk to Specialist",
            not_found: "Article Not Found",
            back_home: "Back to Home"
        },
        glossary: {
            pretitle: "/ Technical References",
            title: "GLOSSARY.",
            subtitle: "Semantic dictionary and quick references containing key concepts on artificial intelligence, RAG integration, MCP protocol, Next.js development, and Core Web Vitals.",
            schema_name: "GHWD Technical Glossary - AI & Engineering",
            schema_desc: "Dictionary of technical terms containing core concepts on artificial intelligence, Next.js development, and enterprise automation.",
            search_placeholder: "Search technical term or definition...",
            all_letters: "All",
            no_terms: "No technical terms found for the current search.",
            terms_structure: "Terms Structure",
            back_to_kb: "Back to KB"
        }
    },
    pt: {
        nav: {
            clients: 'Parceiros',
            products: 'Produtos',
            services: 'O que fazemos',
            about: 'Sobre',
            contact: 'Contato',
            start: "Iniciar",
            home: "Home",
            start_project: "Falar com Especialista",
            faq: "FAQ",
            kb: "Conhecimento",
            glossary: "Glossário"
        },
        hero: {
            tagline: 'Talento Global. Foco no Brasil.',
            we_build: 'NÓS ENTREGAMOS',
            results: 'RESULTADOS.',
            description: "Buscamos profissionais excepcionais de engenharia e design para criar o futuro de marcas brasileiras que querem ir além.",
            start_project: 'FALAR COM ESPECIALISTA',
            view_work: 'VER PROJETOS',
            scroll: 'Role para Explorar',
            headline_html: 'Desenvolvimento Web, <br /><span className="text-zinc-500">IA & Automação</span> <br />para Empresas.'
        },
        footer: {
            title_1: "Automação com IA",
            title_2: "& Integração de Sistemas.",
            tagline: 'Tecnologia de alta performance para fazer sua empresa crescer.',
            compliance: 'LGPD',
            legal: 'Legal',
            privacy: 'Política de Privacidade',
            terms: 'Termos de Serviço',
            cookies: 'Configurações de Cookies',
            sitemap: "Sitemap",
            products: "Produtos",
            presence: "Presença",
            method: "Como trabalhamos",
            intelligence: "Tecnologia",
            newsletter_desc: "Inscreva-se para receber atualizações do nosso time. Direto e sem spam.",
            email_placeholder: "Seu melhor e-mail",
            join: "INSCREVER"
        },
        products: {
            nav: "Produtos",
            version_label: "Versão",
            header: {
                tag: "/ O Repositório",
                title_1: "Ativos",
                title_2: "Digitais & IP.",
                description: "Além de desenvolver projetos do zero, construímos ferramentas prontas. Você pode usar nossa tecnologia pronta para colocar seu projeto no ar muito mais rápido."
            },
            items: {
                velocity: { type: "Acelerador", description: "Base sólida de Next.js + Headless Commerce testada em projetos reais. Pré-configurada para Vtex, Shopify e Wake. Reduz o tempo de desenvolvimento em mais da metade." },
                synapse: { type: "Integração", description: "Sincroniza seus sistemas internos (ERPs) com o site de forma automática, segura e sem quedas." },
                obsidian: { type: "Design System", description: "Nossa biblioteca de componentes pronta. Garante um visual bonito, padronizado e profissional em todas as páginas." },
                xray: { type: "Auditoria", description: "Scanner automático de velocidade e erros. Gera relatórios práticos sobre o que está deixando seu site lento ou atrapalhando suas vendas." },
                wholesale: { type: "Portal B2B", description: "Área de compras por atacado. Resolve preços por volume, compras repetidas e limites de crédito de forma simples." },
                edge: { type: "Infraestrutura", description: "Configuração global de CDN e otimização de imagens. Garante que as imagens e o site carreguem na hora, de qualquer lugar." }
            }
        },
        cases: {
            header: {
                tag: "/ Parceiros",
                title: "Parcerias de Valor.",
                subtitle: "Uma curadoria das empresas que confiam em nós para construir seu futuro digital."
            },
            client_index: {
                tag: "/ Índice de Parceiros",
                title: "Confiado por Líderes",
                map_title: "Nossa Presença Digital pelo Brasil",
                map_subtitle: "Selecione um dos estados destacados no mapa para ver as marcas e organizações que confiam em nós em cada região do país.",
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
                title: "Sites ultra-rápidos e sistemas sob medida que fazem seu negócio crescer.",
                subtitle: "Criamos a tecnologia que sua empresa precisa para vender mais e atender melhor, sem complicação ou jargões corporativos."
            },
            core_capabilities: "O que fazemos",
            method: {
                tag: "/ O Método",
                title: "Como trabalhamos.",
                steps: [
                    { id: "01", title: "1. Entendemos seu negócio", desc: "Analisamos onde seu site ou sistema está lento ou travando para aplicar soluções diretas que tragam resultados reais." },
                    { id: "02", title: "2. Planejamos a solução", desc: "Desenhamos o site ou sistema ideal para as suas necessidades de hoje, preparado para aguentar o crescimento do amanhã." },
                    { id: "03", title: "3. Desenvolvemos com foco", desc: "Escrevemos código extremamente limpo e fazemos telas bonitas que funcionam perfeitamente em qualquer tela ou celular." },
                    { id: "04", title: "4. Acompanhamos e evoluímos", desc: "Depois que o projeto vai ao ar, continuamos melhorando a velocidade e o design com dados de uso reais para trazer mais clientes para você." }
                ]
            },
            services_cta: {
                title: "Quer levar seu projeto para o próximo nível?",
                subtitle: "Gostamos de trabalhar com negócios sérios e focados em crescimento. Nos conte o que você planeja para seu projeto.",
                button: "Falar com o Especialista"
            },
            comparison: {
                tag: "/ Eficiência",
                title: "Por que a GHWD?",
                subtitle: "Uma comparação direta de velocidade, arquitetura e confiabilidade.",
                headers: ["Critério", "GHWD (Next.js Edge)", "Agência Tradicional", "Freelancer"],
                rows: [
                    { label: "Performance (LCP)", c1: "< 1.2s (Ultra Rápido)", c2: "3s - 5s (Lento / Bloated)", c3: "Variável (Sem otimização)" },
                    { label: "Arquitetura", c1: "Headless & Serverless", c2: "Monolítica (WordPress/PHP)", c3: "Baseada em templates / Ad-hoc" },
                    { label: "Qualidade do Código e DOM", c1: "Limpo e Estático (Baixo DOM)", c2: "Dependência pesada de plugins", c3: "Qualidade Inconsistente" },
                    { label: "Suporte & SLA", c1: "Suporte Dedicado 24/7", c2: "Apenas Horário Comercial", c3: "Sem Garantia de SLA" },
                    { label: "Escalabilidade", c1: "Escala Ilimitada via Edge CDN", c2: "Limitado pela CPU do Servidor", c3: "Capacidade Limitada" }
                ]
            }
        },
        about: {
            header: {
                tag: "/ Atuação Nacional",
                title: "Talento sem fronteiras. Resultados no Brasil.",
                vision_tag: "/ Rede Global",
                vision_title: "Inteligência Global. Foco Local.",
                vision_p1: "Somos um coletivo distribuído. Ao remover restrições geográficas, acessamos o top 1% de talentos em estratégia, design e engenharia em 4 fusos horários para elevar o nível do mercado brasileiro.",
                vision_p2: "Sem custo fixo. Sem escritórios. Apenas capital intelectual internacional dedicado a alavancar a sua operação nacional.",
                mission_p1: "Nascemos de uma observação simples: a maioria das agências tradicionais lucra com a complexidade e prazos prolongados. Operamos na lógica inversa.",
                mission_p2: "Somos uma <strong className=\"text-white font-normal\">unidade digital global</strong> — um coletivo de elite composto pelos melhores estrategistas e especialistas, sem as barreiras e custos de uma sede física.",
                mission_p3: "Atuamos com transparência radical e execução cirúrgica. Não construímos apenas sites; projetamos a infraestrutura digital onde o futuro dos negócios acontece."
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
                wa_template: "Olá! Me chamo {name}{company}.\nPreenchi o formulário do site e meu projeto é: {project}.\nOrçamento considerado: {budget}.\n{msg}",
                wa_company_part: " e represento {company}",
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
                title: "Desenvolvimento Web Corporativo",
                view_inventory: "Inventário Completo"
            },
            selected_works: {
                tag: "/ Trabalhos Selecionados",
                title: "Projetos",
                title_italic: "Selecionados.",
                view_archive: "Ver Arquivo",
                case_study: "Estudo de Caso"
            },
            dashboards: {
                tag: "/ Análise de Impacto",
                title_1: "SEO e",
                title_2: "Crescimento Digital.",
                description: "Implementamos sistemas de rastreamento e automação de alta fidelidade que transformam dados brutos em estratégia executável.",
                feature_1: { title: "Visibilidade em Tempo Real", desc: "Veja toda a sua operação em um único painel." },
                feature_2: { title: "Modelos Preditivos", desc: "Preveja demanda e receita com precisão algorítmica." },
                feature_3: { title: "Escala Automatizada", desc: "Sistemas que se expandem autonomamente à medida que você cresce." }
            },
                        services_items: {
                saas: {
                    title: "Projetos e Arquitetura",
                    desc: "Modelamos a arquitetura de software e a engenharia de infraestruturas complexas em nuvem, garantindo a entrega de projetos digitais escaláveis, seguros e de alta performance.",
                    caps: ["Arquitetura Cloud", "Engenharia de Software", "Projetos Sob Medida", "Segurança de Dados"]
                },
                design: {
                    title: "UI/UX Design",
                    desc: "Criamos interfaces de usuário (UI/UX) exclusivas e design systems modulares de alta performance, focados em usabilidade, autoridade de marca e taxas de conversão de leads.",
                    caps: ["Design de Produto", "Design Systems", "Prototypagem", "Design de Interação"]
                },
                dev: {
                    title: "Desenvolvimento Web",
                    desc: "Desenvolvemos websites institucionais e portais rápidos com Next.js, React e Tailwind CSS v4, garantindo nota máxima no Lighthouse e carregamento em menos de 1 segundo.",
                    caps: ["Next.js / React", "Websites", "SSG/SSR Dinâmico", "Auditoria Lighthouse"]
                },
                ai: {
                    title: "Engenharia de IA",
                    desc: "Desenvolvemos agentes de IA integrados ao ChatGPT, Claude, Gemini e sistemas empresariais para automatizar atendimento, vendas, suporte e operações.",
                    caps: ["Integração de LLM", "Agentes de IA", "Sistemas RAG", "Fluxos de Trabalho IA"]
                },
                automation: {
                    title: "Automação de Processos",
                    desc: "Conectamos e automatizamos fluxos operacionais integrando ferramentas operacionais e APIs via n8n e Make para substituir tarefas repetitivas por fluxos inteligentes de dados.",
                    caps: ["n8n & Make", "Integração de APIs", "Automações com IA", "Otimização de Processos"]
                },
                geo: {
                    title: "GEO e SEO de IA",
                    desc: "Otimizamos o conteúdo de sites corporativos com JSON-LD Schema.org e resumos TL;DR para garantir que sua marca seja recomendada em buscas do ChatGPT, Gemini e Perplexity.",
                    caps: ["Otimização para IA", "Estratégia de GEO", "Dados Semânticos", "Core Web Vitals"]
                },
                commerce: {
                    title: "Headless Commerce",
                    desc: "Desenvolvemos plataformas de e-commerce headless e portais de venda B2B de alta performance, integrando Shopify Plus, VTEX e APIs sob medida para garantir estabilidade e sincronização de estoque em tempo real.",
                    caps: ["E-commerce Customizado", "Portal B2B Atacado", "Shopify / VTEX", "Assinaturas"]
                }
            },
            projects_items: {
                grendene: { title: "Arquitetura de Ecossistema Digital", desc: "Migração de plataforma de uma gigante global de calçados para mais de 50 mercados." },
                hardrock: { title: "Commerce de Experiência", desc: "Digitalizando a lendária experiência gastronômica do rock & roll." },
                besni: { title: "Núcleo de Varejo Omnichannel", desc: "Conectando mais de 40 lojas físicas com e-commerce de alta velocidade." }
            },
            not_found: {
                title: "Página Não Encontrada",
                subtitle: "A página que você está procurando foi movida ou não existe.",
                back_home: "Voltar para o Início"
            },
            editorial: {
                tag: "/ Editorial Técnico",
                title: "Engenharia de Sistemas Digitais de Alta Performance & Infraestrutura de IA",
                subtitle: "Como projetamos plataformas web sob medida, fluxos de automação de dados e integrações cognitivas de inteligência artificial.",
                sections: [
                    {
                        title: "01 / Engenharia Web & Performance Desacoplada",
                        content: `As arquiteturas tradicionais de websites monolíticos, como os setups clássicos do WordPress ou construtores de arrastar e soltar visuais, introduziram uma sobrecarga de código significativa e ninhos excessivamente profundos de divs (DOM bloating). Para organizações B2B de escala corporativa, essa ineficiência prejudica diretamente a indexabilidade orgânica e as taxas de conversão de leads de negócios. Na GHWD, eliminamos esses pontos de fricção desenvolvendo arquiteturas frontend estáticas e altamente modulares usando Next.js, React e Tailwind CSS v4. Ao gerar páginas estáticas otimizadas (SSG) e distribuí-las globalmente através de CDNs na Edge, entregamos tempos de carregamento instantâneos com LCP (Largest Contentful Paint) abaixo de 1.0 segundo e INP (Interaction to Next Paint) inferior a 50 milissegundos. Este nível de execução técnica garante nota máxima de 100/100 em auditorias de desempenho do Google Lighthouse, maximizando a retenção de usuários e a aquisição orgânica de novos leads.`
                    },
                    {
                        title: "02 / Integração de IA Cognitiva & Arquiteturas RAG Seguras",
                        content: `A Inteligência Artificial generativa está transformando as operações de negócios, deixando de ser apenas um widget de chat básico para se tornar um sistema integrado ao fluxo de trabalho corporativo. Desenvolvemos agentes cognitivos seguros e customizados alimentados por modelos de linguagem robustos como GPT-4, Claude e Google Gemini, configurados com pipelines de RAG (Retrieval-Augmented Generation). Esses agentes inteligentes se conectam de forma segura a bancos de dados privados, ERPs legados e CRMs, permitindo consultas em linguagem natural sem expor credenciais ou chaves confidenciais. Nossas arquiteturas de orquestração de IA realizam tarefas como consultas de suporte a clientes com leitura do ERP em tempo real, redação automática de propostas comerciais de vendas personalizadas baseadas no histórico do lead, e compilação de relatórios analíticos de faturamento a partir de comandos simples em linguagem natural.`
                    },
                    {
                        title: "03 / Automação de Processos & Fluxos de Dados Integrados",
                        content: `Tarefas manuais como redigitação de informações de clientes, atrasos na emissão de notas fiscais de vendas e planilhas de estoque desconectadas geram gargalos que barram o crescimento escalável das empresas. A GHWD desenha e implementa fluxos automatizados de processos corporativos que integram plataformas de CRM (Salesforce, HubSpot, RD Station), sistemas de ERP (SAP, TOTVS, Bling), bancos de dados e canais de atendimento (WhatsApp, Slack, Email). Utilizando camadas modernas de integração como n8n e Make ou microsserviços customizados em Node.js, construímos fluxos de dados confiáveis onde faturamentos, atualizações e roteamento de contatos ocorrem em menos de 3 segundos, reduzindo os custos operacionais em até 80% e liberando a equipe interna para atividades estratégicas.`
                    },
                    {
                        title: "04 / Headless Commerce & Canais de Venda B2B por Atacado",
                        content: `As arquiteturas desacopladas representam o futuro das transações comerciais digitais. Ao separar a camada de apresentação visual (frontend) do banco de dados transacional traseiro (como VTEX ou Shopify Plus), o headless commerce entrega flexibilidade total de design, segurança robusta e capacidade de processar altos volumes de transações simultâneas sem lentidão. Somos especialistas na construção de experiências de compra sob medida e portais de venda B2B por atacado (Wholesale OS) que suportam tabelas de preços complexas, compras repetidas em lote por planilhas, validações de limites de crédito financeiro e atualizações automáticas de estoque de produtos, fornecendo uma jornada sem atritos para distribuidores e consumidores finais.`
                    },
                    {
                        title: "05 / GEO (Generative Engine Optimization) & Busca Semântica de IA",
                        content: `O SEO tradicional focava principalmente em posicionar palavras-chave específicas em páginas web para subir no ranking de resultados do Google. Na era da Inteligência Artificial generativa, os usuários recebem respostas sintetizadas e diretas de assistentes virtuais de busca (como o ChatGPT Search, Gemini e Perplexity). Para que a sua empresa seja a fonte citada e recomendada nesses resumos cognitivos, os websites precisam ser otimizados com estratégias de GEO. Injetamos metadados estruturados (grafo de Schemas.org em JSON-LD) diretamente no HTML pré-renderizado, formatamos conteúdos com resumos diretos baseados em fatos (seções TL;DR) fáceis de serem escaneados por motores RAG, e estruturamos textos focados em responder à real intenção de pesquisa do usuário corporativo.`
                    }
                ]
            }
},
        legal: {
            updated: "Última Atualização",
            last_update_date: "Abril de 2026",
            version: "Versão",
            status: "Status",
            active: "Vigente",
            privacy: {
                title: "Política de Privacidade",
                subtitle: "Nosso compromisso com a proteção dos dados que impulsionam sua transformação digital.",
                intro: "A GHWD Global Digital Partner está comprometida com sua privacidade. Esta política detalha o processamento de dados em conformidade com a Lei nº 13.709/2018 (LGPD).",
                sections: [
                    {
                        title: "1. Coleta de Informações",
                        content: "Coletamos informações para fornecer serviços melhores a todos os nossos usuários. Isso inclui informações que você fornece (nome, e-mail, empresa) e dados de navegação (IP, navegador, cookies) coletados sob conformidade com a LGPD."
                    },
                    {
                        title: "2. Finalidade do Tratamento",
                        content: "Utilizamos os dados para operar nossos serviços digitais, personalizar experiências e para melhoria contínua de performance. Não comercializamos dados de usuários para terceiros."
                    },
                    {
                        title: "3. Compartilhamento de Dados",
                        content: "Operamos globalmente. Os dados podem ser compartilhados com parceiros de infraestrutura (AWS, Vercel) sob estritos acordos de confidencialidade e segurança, apenas conforme necessário para prestação de nossos serviços."
                    },
                    {
                        title: "4. Segurança de Dados",
                        content: "Implementamos medidas de segurança técnicas e organizacionais robustas para proteger seus dados contra acesso não autorizado, alteração ou divulgação."
                    },
                    {
                        title: "5. Seus Direitos (LGPD)",
                        content: "Você tem o direito de acessar, corrigir, excluir ou limitar o processamento de seus dados pessoais. Entre em contato com nosso DPO em legal@ghwd.com.br para exercer esses direitos."
                    }
                ]
            },
            terms: {
                title: "Termos de Serviço",
                subtitle: "As regras que regem nossa parceria digital e o uso de nossas plataformas.",
                intro: "Ao acessar nossos serviços, você concorda com estes termos. O uso de nossa PI e tecnologia obedece a licenças comerciais específicas.",
                sections: [
                    {
                        title: "1. Propriedade Intelectual",
                        content: "Todo código, design, e a metodologia proprietária da GHWD são protegidos. Nossos assets visuais e implementações técnicas são propriedade exclusiva."
                    },
                    {
                        title: "2. Limitação de Responsabilidade",
                        content: "Nossos serviços são prestados com excelência técnica, mas não garantimos resultados de terceiros. A responsabilidade limita-se ao valor do contrato estabelecido."
                    },
                    {
                        title: "3. Foro",
                        content: "Estes termos são regidos pelas leis brasileiras. Quaisquer disputas serão resolvidas no foro da Comarca de São Paulo/SP, Brasil."
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
        },
                faq: {
            header: {
                tag: "/ Inteligência",
                title: "Perguntas Frequentes.",
                subtitle: "Tudo o que você precisa saber sobre nossa engenharia de alta performance, metodologia de trabalho e faixas de investimento."
            },
            author_section: {
                author_title: "Curadoria de",
                author_name: "Gustavo Hipólito",
                author_role: "Lead Software Architect",
                last_updated: "Última atualização"
            },
            questions: [
                {
                    q: "O que é a GHWD e em quais tipos de projetos a agência se especializa?",
                    a: `A GHWD é um estúdio de engenharia de software de alta performance e design digital. Somos especializados no desenvolvimento de websites institucionais ultra-rápidos com Next.js, arquitetura de plataformas de software SaaS escaláveis, soluções avançadas de automação empresarial e engenharia de Inteligência Artificial integrando modelos de linguagem (LLMs) como ChatGPT, Gemini e Claude aos sistemas legados de empresas brasileiras e multinacionais. Nosso principal diferencial é a eliminação de gargalos técnicos (DOM bloating) e a entrega de velocidade extrema com nota máxima de 100/100 no Google Lighthouse, garantindo conversão de leads e máxima indexação orgânica em canais de SEO tradicional e motores de resposta de IA (GEO).

**Resposta Curta:** A GHWD é um estúdio especializado em engenharia de software Next.js, design UI/UX, automações via APIs e integração de agentes de IA, entregando performance extrema com nota máxima no Lighthouse e conformidade com a LGPD.`
                },
                {
                    q: "O que é automação empresarial e como ela otimiza processos corporativos?",
                    a: `A automação empresarial consiste no uso de tecnologias de software para integrar sistemas isolados e automatizar tarefas repetitivas que tradicionalmente demandam intervenção humana manual. Na GHWD, desenhamos e implementamos fluxos automatizados que conectam plataformas como CRMs (Salesforce, HubSpot, RD Station), ERPs (SAP, TOTVS, Bling), bancos de dados e ferramentas de comunicação (Slack, WhatsApp, E-mail) por meio de plataformas de integração modernas como n8n, Make e APIs customizadas. O objetivo central é a eliminação de erros operacionais de redigitação, atrasos de processamento e gargalos burocráticos. Com a automação estruturada, processos como faturamento de notas fiscais, atualização de estoque em tempo real e distribuição de leads de marketing são executados em menos de 3 segundos, reduzindo custos operacionais em até 80% e liberando equipes internas para focar em tarefas de planejamento estratégico.

**Resposta Curta:** Automação empresarial é a conexão de sistemas distintos (CRM, ERP, bancos de dados) para executar fluxos automáticos de dados sem atrito humano, reduzindo custos operacionais em até 80% e eliminando erros manuais.`
                },
                {
                    q: "Como funciona a integração de modelos de IA como o ChatGPT a sistemas de ERP e CRM?",
                    a: `A integração de modelos generativos de Inteligência Artificial (como GPT-4 do ChatGPT, Claude da Anthropic e Gemini da Google) a sistemas de gestão empresarial (ERP e CRM) é feita através de chamadas seguras de APIs e pipelines de orquestração de dados. Na GHWD, criamos agentes inteligentes cognitivos estruturados sobre arquiteturas RAG (Retrieval-Augmented Generation). O agente de IA é conectado de forma isolada e segura ao banco de dados interno ou CRM da empresa, sendo programado para ler e processar o contexto de negócios respeitando as regras da LGPD e privacidade. Na prática, isso permite que a IA faça tarefas complexas, como responder a dúvidas de clientes sobre status de pedidos consultando o ERP em tempo real, criar rascunhos de propostas de vendas customizadas analisando o histórico do lead no CRM, ou gerar relatórios analíticos de faturamento a partir de perguntas simples em linguagem natural feitas pelos gestores.

**Resposta Curta:** A integração de IA ao ERP/CRM é realizada via APIs de LLMs sob arquiteturas RAG seguras, permitindo que agentes de IA façam consultas ao banco de dados, atendam suporte técnico e automatizem relatórios de forma contextualizada.`
                },
                {
                    q: "Quanto custa desenvolver um projeto de software ou site personalizado com a GHWD?",
                    a: `O custo de desenvolvimento com a GHWD é estruturado com total transparência com base no escopo e complexidade de entrega do projeto. Nossos projetos de websites institucionais e páginas de conversão (Landing Pages) de altíssima performance Next.js iniciam na faixa de R$ 4.000 a R$ 8.000. Projetos de automação de média complexidade (integrando múltiplos sistemas via APIs e n8n) variam de R$ 6.000 a R$ 12.000. Projetos mais complexos envolvendo a criação de plataformas SaaS sob medida de alta escalabilidade na nuvem ou a integração e treinamento de agentes cognitivos de IA e RAG customizados iniciam na faixa de R$ 15.000 a R$ 30.000+, dependendo da profundidade da integração com sistemas legados da empresa. Fornecemos propostas transparentes baseadas em valor de negócios gerado, com escopo detalhado de entregas técnicas e roadmaps realistas de implantação.

**Resposta Curta:** Projetos de Landing Pages e sites rápidos Next.js iniciam em R$ 4.000, automações de sistemas via APIs custam a partir de R$ 6.000, e sistemas SaaS ou implementações completas de IA iniciam na faixa de R$ 15.000.`
                },
                {
                    q: "Qual é o tempo médio para o desenvolvimento de um site ou sistema sob medida?",
                    a: `O prazo médio para desenvolvimento e lançamento de um projeto varia conforme a sua complexidade estrutural e amplitude de integrações solicitadas. Projetos rápidos, como páginas de alta conversão de leads (Landing Pages), são entregues e publicados em um período médio de 2 a 3 semanas. Websites institucionais completos com CMS headless integrado demandam de 4 a 6 semanas de engenharia. Sistemas sob medida mais robustos, portais de Headless Commerce (Shopify/VTEX) ou painéis corporativos de média complexidade levam de 6 a 9 semanas para serem concluídos. Projetos de grande porte corporativo, como a migração de plataforma de legados industriais, desenvolvimento de plataformas SaaS do zero ou fluxos complexos de automação e IA integrados a ERPs exigem um cronograma detalhado de 8 a 12 semanas. Seguimos a metodologia de desenvolvimento ágil com entregas incrementais a cada ciclo de 2 semanas, permitindo validação contínua.

**Resposta Curta:** O prazo médio para Landing Pages é de 2 a 3 semanas, websites corporativos levam de 4 a 6 semanas, e sistemas SaaS complexos, e-commerce ou integrações de IA demandam entre 8 a 12 semanas de engenharia.`
                },
                {
                    q: "Como a GHWD garante a segurança e privacidade dos dados nos sistemas desenvolvidos?",
                    a: `Sim. A segurança da informação e a conformidade legal perante a LGPD (Lei Geral de Proteção de Dados) e o GDPR europeu são pilares fundamentais da engenharia executada pela GHWD. Em todos os projetos de software, sites Next.js e automações de fluxos de dados, aplicamos protocolos rígidos de criptografia (em trânsito e em repouso), autenticação e autorização seguras baseadas em OAuth2/OpenID, controle granular de acesso às chaves de API e isolamento lógico de bancos de dados. Além disso, nossas arquiteturas estáticas SSG e serverless eliminam vetores de ataque comuns na Edge (como SQL Injection e Cross-Site Scripting). Projetamos formulários de coleta de leads e consentimento de cookies em conformidade total com a lei, fornecendo transparência ao usuário final e protegendo legal e reputacionalmente a marca corporativa dos nossos clientes.

**Resposta Curta:** Sim, implementamos criptografia avançada, autenticação segura e segurança serverless na Edge, garantindo total conformidade legal dos fluxos de dados e banco de dados corporativos perante a LGPD e GDPR.`
                }
            ]
        },
        kb: {
            pretitle: "/ Centro de IA e Engenharia",
            title: "KB.",
            subtitle: "Artigos técnicos, guias de engenharia e referências detalhadas sobre inteligência artificial corporativa, RAG, protocolo MCP e automações B2B.",
            back_to_directory: "Voltar para a Base de Conhecimento",
            read_time: "de leitura",
            technical_author: "Autor Técnico",
            related_topics: "Tópicos Relacionados",
            faq_title: "Dúvidas Frequentes do Tema",
            cta_title: "Quer implementar IA na sua empresa?",
            cta_desc: "Agende um diagnóstico gratuito e entenda o potencial de automação do seu negócio.",
            cta_button: "Falar com Especialista",
            not_found: "Artigo Não Encontrado",
            back_home: "Voltar para o Início"
        },
        glossary: {
            pretitle: "/ Referências Técnicas",
            title: "GLOSSÁRIO.",
            subtitle: "Dicionário semântico e referências rápidas contendo os principais conceitos de inteligência artificial, integrações RAG, protocolo MCP, desenvolvimento Next.js e Core Web Vitals.",
            schema_name: "Glossário Técnico GHWD - IA e Engenharia",
            schema_desc: "Dicionário de termos técnicos contendo conceitos fundamentais sobre inteligência artificial, desenvolvimento Next.js e automação corporativa.",
            search_placeholder: "Buscar termo técnico ou definição...",
            all_letters: "Todos",
            no_terms: "Nenhum termo técnico localizado para a busca atual.",
            terms_structure: "Estrutura de Termos",
            back_to_kb: "Voltar para o KB"
        }
    },
    'pt-pt': {
        nav: {
            clients: 'Parceiros',
            products: 'Produtos',
            services: 'Especialização',
            about: 'Sobre',
            contact: 'Contacto',
            start: "Iniciar",
            home: "Início",
            start_project: "Falar com Especialista",
            faq: "FAQ",
            kb: "Conhecimento",
            glossary: "Glossário"
        },
        hero: {
            tagline: 'Talento Global. Foco no Brasil.',
            we_build: 'NÓS ENTREGAMOS',
            results: 'RESULTADOS.',
            description: "Acedemos ao top 1% da engenharia e design mundial para construir o futuro digital das empresas brasileiras mais ambiciosas.",
            start_project: 'FALAR COM ESPECIALISTA',
            view_work: 'VER PROJETOS',
            scroll: 'Percorra para Explorar',
            headline_html: 'Desenvolvimento Web, <br /><span className="text-zinc-500">IA & Automação</span> <br />para Empresas.'
        },
        footer: {
            title_1: "Automação com IA",
            title_2: "& Integração de Sistemas.",
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
                tag: "/ Parceiros",
                title: "Parcerias de Valor.",
                subtitle: "Uma curadoria das empresas que confiam em nós para construir o seu futuro digital."
            },
            client_index: {
                tag: "/ Índice de Parceiros",
                title: "Confiado por Líderes",
                map_title: "A Nossa Presença Digital no Brasil",
                map_subtitle: "Selecione um dos estados destacados no mapa para ver as marcas e organizações que confiam em nós em cada região do país.",
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
                vision_p2: "Sem custos fixos. Sem escritórios. Apenas capital intelectual internacional dedicado a alavancar a sua operação nacional.",
                mission_p1: "Nascemos de uma observação simples: a maioria das agências tradicionais lucra com a complexidade e prazos prolongados. Operamos na lógica inversa.",
                mission_p2: "Somos uma <strong className=\"text-white font-normal\">unidade digital global</strong> — um coletivo de elite composto pelos melhores estrategistas e especialistas, sem as barreiras e custos de uma sede física.",
                mission_p3: "Atuamos com transparência radical e execução cirúrgica. Não construímos apenas sites; projetamos a infraestrutura digital onde o futuro dos negócios acontece."
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
                wa_template: "Olá! Chamo-me {name}{company}.\nPreenchi o formulário do site e o meu projeto é: {project}.\nOrçamento considerado: {budget}.\n{msg}",
                wa_company_part: " e represento a {company}",
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
                title: "Desenvolvimento Web Corporativo",
                view_inventory: "Inventário Completo"
            },
            selected_works: {
                tag: "/ Trabalhos Selecionados",
                title: "Projetos",
                title_italic: "Selecionados.",
                view_archive: "Ver Arquivo",
                case_study: "Estudo de Caso"
            },
            dashboards: {
                tag: "/ Análise de Impacto",
                title_1: "SEO e",
                title_2: "Crescimento Digital.",
                description: "Implementamos sistemas de rastreio e automação de alta fidelidade que transformam dados brutos em estratégia executável.",
                feature_1: { title: "Visibilidade em Tempo Real", desc: "Veja toda a sua operação num único painel." },
                feature_2: { title: "Modelos Preditivos", desc: "Preveja a procura e a receita com precisão algorítmica." },
                feature_3: { title: "Escala Automatizada", desc: "Sistemas que se expandem autonomamente à medida que cresce." }
            },
                        services_items: {
                saas: {
                    title: "Projetos e Arquitetura",
                    desc: "Modelamos a arquitetura de software e a engenharia de infraestruturas complexas na nuvem, garantindo a entrega de projetos digitais escaláveis, seguros e de alta performance.",
                    caps: ["Arquitetura Cloud", "Engenharia de Software", "Projetos Sob Medida", "Segurança de Dados"]
                },
                design: {
                    title: "Design UI/UX",
                    desc: "Criamos interfaces de utilizador (UI/UX) exclusivas e design systems modulares de alta performance, focados na usabilidade, autoridade de marca e taxas de conversão de leads.",
                    caps: ["Design de Produto", "Design Systems", "Prototypagem", "Design de Interação"]
                },
                dev: {
                    title: "Desenvolvimento Web",
                    desc: "Desenvolvemos websites institucionais e portais rápidos com Next.js, React e Tailwind CSS v4, garantindo nota máxima no Lighthouse e carregamento em menos de 1 segundo.",
                    caps: ["Next.js / React", "Websites", "SSG/SSR Dinâmico", "Auditoria Lighthouse"]
                },
                ai: {
                    title: "Engenharia de IA",
                    desc: "Desenvolvemos agentes de IA integrados ao ChatGPT, Claude, Gemini e sistemas empresariais para automatizar atendimento, vendas, suporte e operações.",
                    caps: ["Integração de LLM", "Agentes de IA", "Sistemas RAG", "Fluxos de Trabalho IA"]
                },
                automation: {
                    title: "Automação de Processos",
                    desc: "Conectamos e automatizamos fluxos operacionais integrando ferramentas e APIs via n8n e Make para substituir tarefas repetitivas por fluxos inteligentes de dados.",
                    caps: ["n8n & Make", "Integração de APIs", "Automações com IA", "Otimização de Processos"]
                },
                geo: {
                    title: "GEO e SEO de IA",
                    desc: "Otimizamos o conteúdo de websites corporativos com JSON-LD Schema.org e resumos TL;DR para garantir que a sua marca seja recomendada em buscas do ChatGPT, Gemini e Perplexity.",
                    caps: ["Otimização para IA", "Estratégia de GEO", "Dados Semânticos", "Core Web Vitals"]
                },
                commerce: {
                    title: "Headless Commerce",
                    desc: "Desenvolvemos plataformas de e-commerce headless e portais B2B de alta performance, integrando Shopify Plus, VTEX e APIs personalizadas para garantir estabilidade e sincronização de stock em tempo real.",
                    caps: ["E-commerce Customizado", "Portal B2B Atacado", "Shopify / VTEX", "Subscrições"]
                }
            },
            projects_items: {
                grendene: { title: "Arquitetura de Ecossistema Digital", desc: "Migração de plataforma de uma gigante global de calçado para mais de 50 mercados." },
                hardrock: { title: "Comércio de Experiência", desc: "Digitalizando a lendária experiência gastronómica do rock & roll." },
                besni: { title: "Núcleo de Retalho Omnichannel", desc: "Ligando mais de 40 lojas físicas com e-commerce de alta velocidade." }
            },
            not_found: {
                title: "Página Não Encontrada",
                subtitle: "A página que procura foi movida ou não existe.",
                back_home: "Voltar ao Início"
            },
            editorial: {
                tag: "/ Editorial Técnico",
                title: "Engenharia de Sistemas Digitais de Alta Performance & Infraestrutura de IA",
                subtitle: "Como projetamos plataformas web sob medida, fluxos de automação de dados e integrações cognitivas de inteligência artificial.",
                sections: [
                    {
                        title: "01 / Engenharia Web & Performance Desacoplada",
                        content: `As arquiteturas tradicionais de websites monolíticos, como os setups clássicos do WordPress ou construtores de arrastar e soltar visuais, introduziram uma sobrecarga de código significativa e ninhos excessivamente profundos de divs (DOM bloating). Para organizações B2B de escala corporativa, essa ineficiência prejudica diretamente a indexabilidade orgânica e as taxas de conversão de leads de negócios. Na GHWD, eliminamos esses pontos de fricção desenvolvendo arquiteturas frontend estáticas e altamente modulares usando Next.js, React e Tailwind CSS v4. Ao gerar páginas estáticas otimizadas (SSG) e distribuí-las globalmente através de CDNs na Edge, entregamos tempos de carregamento instantâneos com LCP (Largest Contentful Paint) abaixo de 1.0 segundo e INP (Interaction to Next Paint) inferior a 50 milissegundos. Este nível de execução técnica garante nota máxima de 100/100 em auditorias de desempenho do Google Lighthouse, maximizando a retenção de utilizadores e a aquisição orgânica de novos leads.`
                    },
                    {
                        title: "02 / Integração de IA Cognitiva & Arquiteturas RAG Seguras",
                        content: `A Inteligência Artificial generativa está a transformar as operações de negócios, deixando de ser apenas um widget de chat básico para se tornar um sistema integrado ao fluxo de trabalho corporativo. Desenvolvemos agentes cognitivos seguros e personalizados alimentados por modelos de linguagem robustos como GPT-4, Claude e Google Gemini, configurados com pipelines de RAG (Retrieval-Augmented Generation). Esses agentes inteligentes ligam-se de forma segura a bases de dados privadas, ERPs legados e CRMs, permitindo consultas em linguagem natural sem expor credenciais ou chaves confidenciais. As nossas arquiteturas de orquestração de IA realizam tarefas como consultas de suporte a clientes com leitura do ERP em tempo real, redação automática de propostas comerciais de vendas personalizadas baseadas no histórico do lead, e compilação de relatórios analíticos de faturação a partir de comandos simples em linguagem natural.`
                    },
                    {
                        title: "03 / Automação de Processos & Fluxos de Dados Integrados",
                        content: `Tarefas manuais como redigitação de informações de clientes, atrasos na emissão de faturas de vendas e planilhas de stock desconectadas geram gargalos que barram o crescimento escalável das empresas. A GHWD desenha e implementa fluxos automatizados de processos corporativos que integram plataformas de CRM (Salesforce, HubSpot, RD Station), sistemas de ERP (SAP, TOTVS, Bling), bases de dados e canais de atendimento (WhatsApp, Slack, Email). Utilizando camadas modernas de integração como n8n e Make ou microsserviços personalizados em Node.js, construímos fluxos de dados confiáveis onde faturamentos, atualizações e roteamento de contactos ocorrem em menos de 3 segundos, reduzindo os custos operacionais em até 80% e libertando a equipa interna para atividades estratégicas.`
                    },
                    {
                        title: "04 / Headless Commerce & Canais de Venda B2B por Atacado",
                        content: `As arquiteturas desacopladas representam o futuro das transações comerciais digitais. Ao separar a camada de apresentação visual (frontend) do banco de dados transacional traseiro (como VTEX ou Shopify Plus), o headless commerce entrega flexibilidade total de design, segurança robusta e capacidade de processar altos volumes de transações simultâneas sem lentidão. Somos especialistas na construção de experiências de compra sob medida e portais de venda B2B por atacado (Wholesale OS) que suportam tabelas de preços complexas, compras repetidas em lote por planilhas, validações de limites de crédito financeiro e atualizações automáticas de stock de produtos, fornecendo uma jornada sem atritos para distribuidores e consumidores finais.`
                    },
                    {
                        title: "05 / GEO (Generative Engine Optimization) & Busca Semântica de IA",
                        content: `O SEO tradicional focava principalmente em posicionar palavras-chave específicas em páginas web para subir no ranking de resultados do Google. Na era da Inteligência Artificial generativa, os utilizadores recebem respostas sintetizadas e diretas de assistentes virtuais de busca (como o ChatGPT Search, Gemini e Perplexity). Para que a sua empresa seja a fonte citada e recomendada nesses resumos cognitivos, os websites precisam de ser otimizados com estratégias de GEO. Injetamos metadados estruturados (grafo de Schemas.org em JSON-LD) diretamente no HTML pré-renderizado, formatamos conteúdos com resumos diretos baseados em factos (seções TL;DR) fáceis de serem digitalizados por motores RAG, e estruturamos textos focados em responder à real intenção de pesquisa do utilizador corporativo.`
                    }
                ]
            }
},
        legal: {
            updated: "Última Atualização",
            last_update_date: "Abril de 2026",
            version: "Versão",
            status: "Estado",
            active: "Vigente",
            privacy: {
                title: "Política de Privacidade",
                subtitle: "O nosso compromisso com a proteção dos dados que impulsionam a sua transformação digital.",
                intro: "A GHWD Global Digital Partner está comprometida com a sua privacidade. Esta política detalha o processamento de dados em conformidade com o Regulamento Geral sobre a Proteção de Dados (RGPD).",
                sections: [
                    {
                        title: "1. Recolha de Informações",
                        content: "Recolhemos informações para fornecer melhores serviços a todos os nossos utilizadores. Isto inclui informações que você fornece (nome, e-mail, empresa) e dados de navegação (IP, browser, cookies) recolhidos sob conformidade com o RGPD."
                    },
                    {
                        title: "2. Finalidade do Tratamento",
                        content: "Utilizamos os dados para operar os nossos serviços digitais, personalizar experiências e para melhoria contínua de performance. Não comercializamos dados de utilizadores para terceiros."
                    },
                    {
                        title: "3. Partilha de Dados",
                        content: "Operamos globalmente. Os dados podem ser partilhados com parceiros de infraestrutura (AWS, Vercel) sob estritos acordos de confidencialidade e segurança, apenas conforme necessário para prestação de nossos serviços."
                    },
                    {
                        title: "4. Segurança de Dados",
                        content: "Implementamos medidas de segurança técnicas e organizativas robustas para proteger os seus dados contra acesso não autorizado, alteração ou divulgação."
                    },
                    {
                        title: "5. Os Seus Direitos (RGPD)",
                        content: "Tem o direito de aceder, retificar, apagar ou limitar o tratamento dos seus dados pessoais. Contacte o nosso DPO em legal@ghwd.com.br para exercer estes direitos."
                    }
                ]
            },
            terms: {
                title: "Termos de Serviço",
                subtitle: "As regras que regem a nossa parceria digital e a utilização das nossas plataformas.",
                intro: "Ao aceder aos nossos serviços, concorda com estes termos. O uso da nossa PI e tecnologia obedece a licenças comerciais específicas.",
                sections: [
                    {
                        title: "1. Propriedade Intelectual",
                        content: "Todo código, design, e a metodologia proprietária da GHWD são protegidos. Os nossos assets visuais e implementações técnicas são propriedade exclusiva."
                    },
                    {
                        title: "2. Limitação de Responsabilidade",
                        content: "Os nossos serviços são prestados com excelência técnica, mas não garantimos resultados de terceiros. A responsabilidade limita-se ao valor do contrato estabelecido."
                    },
                    {
                        title: "3. Foro",
                        content: "Estes termos são regidos pelas leis brasileiras. Quaisquer disputas serão resolvidas no foro da Comarca de São Paulo/SP, Brasil."
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
        },
                faq: {
            header: {
                tag: "/ Inteligência",
                title: "Perguntas Frequentes.",
                subtitle: "Tudo o que precisa de saber sobre a nossa engenharia de alta performance, metodologia de trabalho e faixas de investimento."
            },
            author_section: {
                author_title: "Curadoria de",
                author_name: "Gustavo Hipólito",
                author_role: "Lead Software Architect",
                last_updated: "Última atualização"
            },
            questions: [
                {
                    q: "O que é a GHWD e em que tipos de projetos a agência se especializa?",
                    a: `A GHWD é um estúdio de engenharia de software de alta performance e design digital. Somos especializados no desenvolvimento de websites institucionais ultra-rápidos com Next.js, arquitetura de plataformas de software SaaS escaláveis, soluções avançadas de automação empresarial e engenharia de Inteligência Artificial integrando modelos de linguagem (LLMs) como o ChatGPT, Gemini e Claude aos sistemas legados de empresas brasileiras e multinacionais. O nosso principal diferencial é a eliminação de gargalos técnicos (DOM bloating) e a entrega de velocidade extrema com nota máxima de 100/100 no Google Lighthouse, garantindo conversão de leads e máxima indexação orgânica em canais de SEO tradicional e motores de resposta de IA (GEO).

**Resposta Curta:** A GHWD é um estúdio especializado em engenharia de software Next.js, design UI/UX, automações via APIs e integração de agentes de IA, entregando performance extrema com nota máxima no Lighthouse e conformidade com o RGPD/LGPD.`
                },
                {
                    q: "O que é a automação empresarial e como ela optimiza processos corporativos?",
                    a: `A automação empresarial consiste no uso de tecnologias de software para integrar sistemas isolados e automatizar tarefas repetitivas que tradicionalmente demandam intervenção humana manual. Na GHWD, desenhamos e implementamos fluxos automatizados que conectam plataformas como CRMs (Salesforce, HubSpot, RD Station), ERPs (SAP, TOTVS, Bling), bases de dados e ferramentas de comunicação (Slack, WhatsApp, E-mail) por meio de plataformas de integração modernas como n8n, Make e APIs personalizadas. O objetivo central é a eliminação de erros operacionais de redigitação, atrasos de processamento e gargalos burocráticos. Com a automação estruturada, processos como faturamento de notas fiscais, atualização de stock em tempo real e distribuição de leads de marketing são executados em menos de 3 segundos, reduzindo custos operacionais em até 80% e libertando equipas internas para focar em tarefas de planeamento estratégico.

**Resposta Curta:** Automação empresarial é a ligação de sistemas distintos (CRM, ERP, bases de dados) para executar fluxos automáticos de dados sem atrito humano, reduzindo custos operacionais em até 80% e eliminando erros manuais.`
                },
                {
                    q: "Como funciona a integração de modelos de IA como o ChatGPT a sistemas de ERP e CRM?",
                    a: `A integração de modelos generativos de Inteligência Artificial (como o GPT-4 do ChatGPT, o Claude da Anthropic e o Gemini da Google) a sistemas de gestão empresarial (ERP e CRM) é feita através de chamadas seguras de APIs e pipelines de orquestração de dados. Na GHWD, criamos agentes inteligentes cognitivos estruturados sobre arquiteturas RAG (Retrieval-Augmented Generation). O agente de IA é ligado de forma isolada e segura à base de dados interna ou CRM da empresa, sendo programado para ler e processar o contexto de negócios respeitando as regras de privacidade e segurança. Na prática, isto permite que a IA execute tarefas complexas, como responder a dúvidas de clientes sobre o estado de encomendas consultando o ERP em tempo real, criar rascunhos de propostas de vendas personalizadas analisando o histórico do lead no CRM, ou gerar relatórios analíticos de faturação a partir de perguntas simples feitas pelos gestores.

**Resposta Curta:** A integração de IA ao ERP/CRM é realizada via APIs de LLMs sob arquiteturas RAG seguras, permitindo que agentes de IA façam consultas à base de dados, atendam suporte técnico e automatizem relatórios de forma contextualizada.`
                },
                {
                    q: "Quanto custa desenvolver um projeto de software ou site personalizado com a GHWD?",
                    a: `O custo de desenvolvimento com a GHWD é estruturado com total transparência com base no escopo e complexidade de entrega do projeto. Os nossos projetos de websites institucionais e páginas de conversão (Landing Pages) de altíssima performance Next.js iniciam na faixa de R$ 4.000 a R$ 8.000. Projetos de automação de média complexidade (integrando múltiplos sistemas via APIs e n8n) variam de R$ 6.000 a R$ 12.000. Projetos mais complexos envolvendo a criação de plataformas SaaS sob medida de alta escalabilidade na nuvem ou a integração e treino de agentes cognitivos de IA e RAG personalizados iniciam na faixa de R$ 15.000 a R$ 30.000+, dependendo da profundidade da integração com sistemas legados da empresa. Fornecemos propostas transparentes baseadas em valor de negócios gerado, com detalhe de entregas técnicas e roadmaps realistas de implantação.

**Resposta Curta:** Projetos de Landing Pages e websites rápidos Next.js iniciam em R$ 4.000, automações de sistemas via APIs custam a partir de R$ 6.000, e sistemas SaaS ou implementações completas de IA iniciam na faixa de R$ 15.000.`
                },
                {
                    q: "Qual é o tempo médio para o desenvolvimento de um site ou sistema sob medida?",
                    a: `O prazo médio para desenvolvimento e lançamento de um projeto varia conforme a sua complexidade estrutural e amplitude de integrações solicitadas. Projetos rápidos, como páginas de alta conversão de leads (Landing Pages), são entregues e publicados num período médio de 2 a 3 semanas. Websites institucionais completos com CMS headless integrado demandam de 4 a 6 semanas de engenharia. Sistemas sob medida mais robustos, portais de Headless Commerce (Shopify/VTEX) ou painéis corporativos de média complexidade levam de 6 a 9 semanas para serem concluídos. Projetos de grande porte corporativo, como a migração de plataforma de legados industriais, desenvolvimento de plataformas SaaS do zero ou fluxos complexos de automação e IA integrados a ERPs exigem um cronograma detalhado de 8 a 12 semanas. Seguimos a metodologia de desenvolvimento ágil com entregas incrementais a cada ciclo de 2 semanas, permitindo validação contínua.

**Resposta Curta:** O prazo médio para Landing Pages é de 2 a 3 semanas, websites corporativos levam de 4 a 6 semanas, e sistemas SaaS complexos, e-commerce ou integrações de IA demandam entre 8 a 12 semanas de engenharia.`
                },
                {
                    q: "Como a GHWD garante a segurança e privacidade dos dados nos sistemas desenvolvidos?",
                    a: `Sim. A segurança da informação e a conformidade legal perante a LGPD e o RGPD europeu são pilares fundamentais da engenharia executada pela GHWD. Em todos os projetos de software, sites Next.js e automações de fluxos de dados, aplicamos protocolos rígidos de encriptação (em trânsito e em repouso), autenticação e autorização seguras baseadas em OAuth2/OpenID, controlo granular de acesso às chaves de API e isolamento lógico de bases de dados. Além disso, as nossas arquiteturas estáticas SSG e serverless eliminam vetores de ataque comuns na Edge (como SQL Injection e Cross-Site Scripting). Projetamos formulários de recolha de leads e consentimento de cookies em conformidade total com a lei, fornecendo transparência ao utilizador final e protegendo legal e reputacionalmente a marca corporativa dos nossos clientes.

**Resposta Curta:** Sim, implementamos encriptação avançada, autenticação segura e segurança serverless na Edge, garantindo total conformidade legal dos fluxos de dados e bases de dados corporativos perante a LGPD e RGPD.`
                }
            ]
        },
        kb: {
            pretitle: "/ Centro de IA e Engenharia",
            title: "KB.",
            subtitle: "Artigos técnicos, guias de engenharia e referências detalhadas sobre inteligência artificial corporativa, RAG, protocolo MCP e automações B2B.",
            back_to_directory: "Voltar para a Base de Conhecimento",
            read_time: "de leitura",
            technical_author: "Autor Técnico",
            related_topics: "Tópicos Relacionados",
            faq_title: "Dúvidas Frequentes do Tema",
            cta_title: "Quer implementar IA na sua empresa?",
            cta_desc: "Agende um diagnóstico gratuito e entenda o potencial de automação do seu negócio.",
            cta_button: "Falar com Especialista",
            not_found: "Artigo Não Encontrado",
            back_home: "Voltar ao Início"
        },
        glossary: {
            pretitle: "/ Referências Técnicas",
            title: "GLOSSÁRIO.",
            subtitle: "Dicionário semântico e referências rápidas contendo os principais conceitos de inteligência artificial, integrações RAG, protocolo MCP, desenvolvimento Next.js e Core Web Vitals.",
            schema_name: "Glossário Técnico GHWD - IA e Engenharia",
            schema_desc: "Dicionário de termos técnicos contendo conceitos fundamentais sobre inteligência artificial, desenvolvimento Next.js e automação corporativa.",
            search_placeholder: "Buscar termo técnico ou definição...",
            all_letters: "Todos",
            no_terms: "Nenhum termo técnico localizado para a busca atual.",
            terms_structure: "Estrutura de Termos",
            back_to_kb: "Voltar para o KB"
        }
    },
    es: {
        nav: {
            clients: 'Socios',
            products: 'Productos',
            services: 'Expertise',
            about: 'Sobre',
            contact: 'Contacto',
            start: "Iniciar",
            home: "Home",
            start_project: "Hablar con Especialista",
            faq: "FAQ",
            kb: "Conocimiento",
            glossary: "Glosario"
        },
        hero: {
            tagline: 'Talento Global. Foco en Brasil.',
            we_build: 'NOSOTROS CREAMOS',
            results: 'RESULTADOS.',
            description: "Accedemos al top 1% de la ingeniería y diseño mundial para construir el futuro digital de las empresas brasileñas más ambiciosas.",
            start_project: 'HABLAR CON ESPECIALISTA',
            view_work: 'VER PROYECTOS',
            scroll: 'Desplazarse para Explorar',
            headline_html: 'Desarrollo Web, <br /><span className="text-zinc-500">IA y Automatización</span> <br />para Empresas.'
        },
        footer: {
            title_1: "Automatización con IA",
            title_2: "& Integración de Sistemas.",
            tagline: 'Transformando la visión estratégica en dominio digital.',
            compliance: 'Legal',
            legal: 'Legal',
            privacy: 'Política de Privacidad',
            terms: 'Términos de Servicio',
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
                tag: "/ Socios",
                title: "Alianzas de Valor.",
                subtitle: "Una curaduría de empresas que confían en nosotros para construir su futuro digital."
            },
            client_index: {
                tag: "/ Índice de Socios",
                title: "Confiado por Líderes",
                map_title: "Nuestra Presencia Digital en Brasil",
                map_subtitle: "Seleccione uno de los estados destacados en el mapa para ver las marcas y organizaciones que confían en nosotros en cada región del país.",
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
                title: "Desarrollo Web Corporativo",
                view_inventory: "Inventario Completo"
            },
            selected_works: {
                tag: "/ Trabajos Seleccionados",
                title: "Proyectos",
                title_italic: "Seleccionados.",
                view_archive: "Ver Archivo",
                case_study: "Estudio de Caso"
            },
            dashboards: {
                tag: "/ Análisis de Impacto",
                title_1: "SEO y",
                title_2: "Crecimiento Digital.",
                description: "Implementamos sistemas de seguimiento y automatización de alta fidelidad que convierten los datos brutos en estrategia ejecutable.",
                feature_1: { title: "Visibilidad en Tiempo Real", desc: "Vea toda su operación en un solo panel." },
                feature_2: { title: "Modelos Predictivos", desc: "Prevea la demanda y los ingresos con precisión algorítmica." },
                feature_3: { title: "Escala Automatizada", desc: "Sistemas que se expanden de forma autónoma a medida que crece." }
            },
                        services_items: {
                saas: {
                    title: "Arquitectura y Proyectos",
                    desc: "Modelamos la arquitectura de software y la ingeniería de infraestructuras complejas en la nube, garantizando la entrega de proyectos digitales escalables, seguros y de alto rendimiento.",
                    caps: ["Arquitectura Cloud", "Ingeniería de Software", "Proyectos a Medida", "Seguridad de Datos"]
                },
                design: {
                    title: "Diseño UI/UX",
                    desc: "Creamos interfaces de usuario (UI/UX) exclusivas y sistemas de diseño modulares de alto rendimiento, enfocado en usabilidad, autoridad de marca y tasas de conversión de leads.",
                    caps: ["Diseño de Producto", "Sistemas de Diseño", "Prototypado", "Diseño de Interacción"]
                },
                dev: {
                    title: "Desarrollo Web",
                    desc: "Desarrollamos sitios web institucionales y portales rápidos con Next.js, React y Tailwind CSS v4, garantizando una puntuación máxima en Lighthouse y tiempos de carga de menos de 1 segundo.",
                    caps: ["Next.js / React", "Sitios Web", "SSG/SSR Dinámico", "Auditoría Lighthouse"]
                },
                ai: {
                    title: "Ingeniería de IA",
                    desc: "Desarrollamos agentes de IA integrados a ChatGPT, Claude, Gemini y sistemas empresariales para automatizar atención, ventas, soporte y operaciones.",
                    caps: ["Integración de LLM", "Agentes de IA", "Sistemas RAG", "Flujos de Trabajo IA"]
                },
                automation: {
                    title: "Automatización de Procesos",
                    desc: "Conectamos y automatizamos flujos de procesos integrando herramientas operacionales y APIs a través de n8n y Make para reemplazar tareas repetitivas con flujos de datos inteligentes.",
                    caps: ["n8n & Make", "Integración de APIs", "Automatizaciones con IA", "Optimización de Procesos"]
                },
                geo: {
                    title: "GEO y SEO de IA",
                    desc: "Optimizamos el contenido de sitios web con JSON-LD Schema.org y resumen TL;DR para asegurar que su marca sea recomendada en búsquedas de ChatGPT, Gemini y Perplexity.",
                    caps: ["Optimización para IA", "Estratégia de GEO", "Datos Semánticos", "Core Web Vitals"]
                },
                commerce: {
                    title: "Headless Commerce",
                    desc: "Desplegamos plataformas de comercio electrónico headless y portales B2B integrando Shopify Plus, VTEX y APIs a medida para ventas robustas y stock sincronizado en tiempo real.",
                    caps: ["E-commerce a Medida", "Portal B2B Mayorista", "Shopify / VTEX", "Suscripciones"]
                }
            },
            projects_items: {
                grendene: { title: "Arquitectura de Ecosistema Digital", desc: "Migración de plataforma de un gigante mundial del calzado para más de 50 mercados." },
                hardrock: { title: "Commerce de Experiencia", desc: "Digitalizando la legendaria experiencia gastronómica del rock & roll." },
                besni: { title: "Núcleo de Venta Omnicanal", desc: "Conectando más de 40 tiendas físicas con comercio electrónico de alta velocidad." }
            },
            not_found: {
                title: "Página No Encontrada",
                subtitle: "La página que buscas ha sido movida o no existe.",
                back_home: "Volver al Inicio"
            },
            editorial: {
                tag: "/ Editorial Técnico",
                title: "Ingeniería de Sistemas Digitales de Alto Rendimiento e Infraestructura de IA",
                subtitle: "Cómo diseñamos plataformas web a medida, flujos automatizados de datos e integraciones cognitivas de inteligencia artificial.",
                sections: [
                    {
                        title: "01 / Ingeniería Web & Rendimiento Desacoplado",
                        content: `Las arquitecturas tradicionales de sitios web monolíticos, como las configuraciones clásicas de WordPress o los constructores visuales de arrastrar y soltar, han introducido una sobrecarga de código significativa y nidos excesivamente profundos de divs (DOM bloating). Para organizaciones B2B de escala corporativa, esta ineficiencia perjudica directamente la indexabilidad orgánica y las tasas de conversión de clientes potenciales. En GHWD, eliminamos estos puntos de fricción desarrollando frontend estáticos y altamente modulares utilizando Next.js, React y Tailwind CSS v4. Al generar páginas estáticas optimizadas (SSG) y distribuirlas globalmente a través de CDNs en Edge, entregamos tiempos de carga instantáneos con LCP (Largest Contentful Paint) por debajo de 1.0 segundo e INP (Interaction to Next Paint) inferior a 50 milisegundos. Este nivel de ejecución técnica garantiza una puntuación de 100/100 en las auditorías de rendimiento de Google Lighthouse, maximizando la retención de usuarios y la adquisición orgánica de nuevos leads.`
                    },
                    {
                        title: "02 / Integración de IA Cognitiva & Arquitecturas RAG Seguras",
                        content: `La Inteligencia Artificial generativa está transformando las operaciones comerciales, dejando de ser un simple widget de chat para convertirse en un sistema integrado en el flujo de trabajo corporativo. Desarrollamos agentes cognitivos seguros y personalizados alimentados por modelos de lenguaje robustos como GPT-4, Claude y Google Gemini, configurados con pipelines de RAG (Retrieval-Augmented Generation). Estos agentes inteligentes se conectan de forma segura a bases de datos privadas, ERPs heredados y CRMs, lo que permite realizar consultas en lenguaje natural sin exponer credenciales ni claves confidenciales. Nuestras arquitecturas de orquestación de IA realizan tareas como consultas de soporte a clientes con lectura del ERP en tiempo real, redacción automática de propuestas comerciales personalizadas basadas en el historial del lead, y generación de informes analíticos de facturación.`
                    },
                    {
                        title: "03 / Automatización de Procesos & Flujos de Datos Integrados",
                        content: `Las tareas manuales como la reescritura de información de los clientes, los retrasos en la facturación y las hojas de inventario desconectadas generan cuellos de botella que frenan el crecimiento escalable de las empresas. En GHWD diseñamos e implementamos flujos automatizados de procesos corporativos que integran plataformas de CRM (Salesforce, HubSpot, RD Station), sistemas de ERP (SAP, TOTVS, Bling), bases de datos y canales de atención (WhatsApp, Slack, Correo). Utilizando capas modernas de integración como n8n y Make o microservicios personalizados en Node.js, construimos flujos de datos confiables donde la facturación, las actualizaciones y el enrutamiento de contactos ocurren en menos de 3 segundos, reduciendo los costos operativos en hasta un 80% y liberando al equipo interno para actividades estratégicas.`
                    },
                    {
                        title: "04 / Headless Commerce & Canales de Venta B2B por Mayor",
                        content: `Las arquitecturas desacopladas representan el futuro de las transacciones comerciales digitales. Al separar la capa de presentación visual (frontend) de la base de datos transaccional trasera (como VTEX o Shopify Plus), el headless commerce entrega flexibilidad total de diseño, seguridad robusta y capacidad de procesar altos volúmenes de transacciones simultáneas sin ralentizaciones. Somos especialistas en la construcción de experiencias de compra a medida y portales de venta B2B por mayor (Wholesale OS) que soportan tablas de precios complejas, compras repetidas en lote, validaciones de límites de crédito financiero y actualizaciones automáticas de stock de productos, proporcionando una jornada sin fricciones para distribuidores y consumidores finales.`
                    },
                    {
                        title: "05 / GEO (Generative Engine Optimization) & Búsqueda Semántica de IA",
                        content: `El SEO tradicional se centraba principalmente en posicionar palabras clave específicas en páginas web para subir en los resultados de Google. En la era de la IA generativa, los usuarios reciben respuestas sintetizadas y directas de asistentes virtuales de búsqueda (como ChatGPT Search, Gemini y Perplexity). Para que su empresa sea la fuente citada y recomendada en estos resúmenes cognitivos, los sitios web deben optimizarse con estrategias de GEO. Inyectamos metadados estructurados (grafo de Schemas.org en JSON-LD) directamente en el HTML prerenderizado, formateamos contenidos con resúmenes directos basados en hechos (secciones TL;DR) fáciles de escanear por motores RAG, y estructuramos textos enfocados en responder a la real intención de búsqueda del usuario corporativo.`
                    }
                ]
            }
},
        legal: {
            updated: "Última Actualización",
            last_update_date: "Abril de 2026",
            version: "Versión",
            status: "Estado",
            active: "Vigente",
            privacy: {
                title: "Política de Privacidad",
                subtitle: "Nuestro compromiso con la protección de los datos que impulsan su transformación digital.",
                intro: "GHWD Global Digital Partner está comprometida con su privacidad. Esta política explica cómo procesamos los datos en cumplimiento con GDPR y normas internacionales.",
                sections: [
                    {
                        title: "1. Recopilación de Información",
                        content: "Recopilamos información para brindar mejores servicios a todos nuestros usuarios. Esto incluye información que usted proporciona (nombre, correo electrónico, empresa) y datos de navegación (IP, navegador, cookies) recopilados en cumplimiento con la LGPD/GDPR."
                    },
                    {
                        title: "2. Finalidad del Tratamiento",
                        content: "Utilizamos los datos para operar nuestros servicios digitales, personalizar experiencias y para la mejora continua del rendimiento. No comercializamos datos de usuarios con terceros."
                    },
                    {
                        title: "3. Intercambio de Datos",
                        content: "Operamos globalmente. Los datos pueden compartirse con socios de infraestructura (AWS, Vercel) bajo estrictos acuerdos de confidencialidad y seguridad, solo según sea necesario para la prestación de nuestros servicios."
                    },
                    {
                        title: "4. Seguridad de Datos",
                        content: "Implementamos medidas de seguridad técnicas y organizativas robustas para proteger sus datos contra el acceso no autorizado, la alteración o la divulgación."
                    },
                    {
                        title: "5. Sus Derechos (LGPD/GDPR)",
                        content: "Tiene derecho a acceder, corregir, eliminar o limitar el tratamiento de sus datos personales. Comuníquese con nuestro DPO en legal@ghwd.com.br para ejercer estos derechos."
                    }
                ]
            },
            terms: {
                title: "Términos de Servicio",
                subtitle: "Las reglas que rigen nuestra asociación digital y el uso de nuestras plataformas.",
                intro: "Al acceder a nuestros servicios, usted acepta estos términos. El uso de nuestra PI y tecnología está sujeto a licencias comerciales específicas.",
                sections: [
                    {
                        title: "1. Propiedad Intelectual",
                        content: "Todo el código, diseño y la metodología propiedad de GHWD están protegidos. Nuestros activos visuales e implementaciones técnicas son propiedad exclusiva."
                    },
                    {
                        title: "2. Limitación de Responsabilidad",
                        content: "Nuestros servicios se brindan con excelencia técnica, pero no garantizamos resultados de terceros. La responsabilidad se limita al valor del contrato establecido."
                    },
                    {
                        title: "3. Jurisdicción",
                        content: "Estos términos se rigen por las leyes brasileñas. Cualquier disputa se resolverá en los tribunais de São Paulo/SP, Brasil."
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
        },
                faq: {
            header: {
                tag: "/ Inteligencia",
                title: "Preguntas Frecuentes.",
                subtitle: "Todo lo que necesita saber sobre nuestra ingeniería de software de alto rendimiento, metodología de trabajo y rangos de inversión."
            },
            author_section: {
                author_title: "Curado por",
                author_name: "Gustavo Hipólito",
                author_role: "Lead Software Architect",
                last_updated: "Última actualización"
            },
            questions: [
                {
                    q: "¿Qué es GHWD y en qué tipos de proyectos se especializa la agencia?",
                    a: `GHWD es un estudio de ingeniería de software de alto rendimiento y diseño digital. Nos especializamos en el desarrollo de sitios web institucionales ultra rápidos con Next.js, arquitectura de plataformas de software SaaS escalables, soluciones avanzadas de automatización empresarial y desarrollo de Inteligencia Artificial integrando modelos de lenguaje (LLM) como ChatGPT, Claude y Gemini con las bases de datos heredadas de empresas multinacionales y locales. Nuestra ventaja competitiva radica en eliminar la sobrecarga de código (DOM bloating) y garantizar un rendimiento extremo con puntuación de 100/100 en Google Lighthouse, impulsando la conversión de leads e indexación en buscadores tradicionales (SEO) y motores de respuesta de IA (GEO).

**Respuesta Corta:** GHWD es un estudio especializado en ingeniería de software con Next.js, diseño UI/UX, automatización mediante APIs e integración de agentes cognitivos de IA, garantizando un rendimiento óptimo en Lighthouse y total conformidad con leyes de protección de datos.`
                },
                {
                    q: "¿Qué es la automatización empresarial y cómo optimiza los procesos corporativos?",
                    a: `La automatización empresarial es el uso de tecnologías de software para conectar sistemas aislados y automatizar tareas repetitivas que tradicionalmente requieren intervención humana manual. En GHWD, diseñamos y construimos flujos automatizados que conectan plataformas como CRMs (Salesforce, HubSpot, RD Station), ERPs (SAP, TOTVS, Bling), bases de datos y canales de comunicación (Slack, WhatsApp, Correo) mediante n8n, Make y APIs a medida. El objetivo principal es eliminar errores de digitación manual, retrasos de procesamiento y cuellos de botella administrativos. Con un flujo automatizado, operaciones clave como facturación, sincronización de inventario en tiempo real y asignación de leads de marketing se ejecutan en menos de 3 segundos, reduciendo costos operativos hasta en un 80%.

**Respuesta Corta:** La automatización empresarial es la conexión de sistemas separados (CRM, ERP, bases de datos) para ejecutar flujos automáticos de datos sin intervención manual, reduciendo costos operativos hasta en un 80% y eliminando errores manuales.`
                },
                {
                    q: "¿Cómo funciona la integración de modelos de IA como ChatGPT con sistemas ERP y CRM?",
                    a: `La integración de modelos de Inteligencia Artificial generativa (como GPT-4 de ChatGPT, Claude de Anthropic y Gemini de Google) con los sistemas de gestión empresarial (ERP y CRM) se realiza a través de llamadas seguras de APIs y pipelines de orquestación de datos. En GHWD, creamos agentes cognitivos de IA estructurados sobre arquitecturas RAG (Retrieval-Augmented Generation). El agente de IA se conecta de forma segura y aislada a la base de datos interna o CRM, procesando el contexto comercial respetando la privacidad. Esto permite al agente realizar acciones complejas, como resolver consultas de soporte al cliente leyendo el estado de pedidos en el ERP en tiempo real, redactar propuestas personalizadas analizando el CRM, o generar reportes analíticos de facturación.

**Respuesta Corta:** La integración de IA con ERP/CRM se realiza mediante APIs de LLM y arquitectura RAG segura, permitiendo que agentes cognitivos realicen consultas seguras a bases de datos privadas, atiendan soporte y automaticen reportes de forma contextual.`
                },
                {
                    q: "¿Cuánto cuesta el desarrollo de un proyecto de software o implementación de IA con GHWD?",
                    a: `El costo de desarrollo con GHWD se calcula con total transparencia sobre el alcance y la complejidad del proyecto. Los sitios web institucionales y landing pages de alto rendimiento con Next.js comienzan en el rango de R$ 4.000 a R$ 8.000. Los proyectos de automatización de mediana complejidad (conectando múltiples sistemas vía APIs y n8n) varían de R$ 6.000 a R$ 12.000. Los proyectos complejos que involucran el desarrollo de plataformas SaaS escalables o la implementación y entrenamiento de agentes de IA y bases de datos vectoriales (RAG) inician en el rango de R$ 15.000 a R$ 30.000+, según la complejidad legacy. Ofrecemos propuestas transparentes basadas en el valor de negocio generado.

**Respuesta Corta:** Las Landing Pages y sitios web Next.js rápidos inician en R$ 4.000, los flujos de automatización mediante APIs inician en R$ 6.000, y los desarrollos SaaS a medida o integraciones de IA inician en la escala de R$ 15.000.`
                },
                {
                    q: "¿Cuál es el tiempo promedio para desarrollar y lanzar un sistema o sitio web a medida?",
                    a: `El plazo promedio de desarrollo varía según la complejidad técnica y el volumen de integraciones. Las páginas de alta conversión (Landing Pages) se publican en 2 a 3 semanas. Los sitios web corporativos completos con headless CMS requieren de 4 a 6 semanas de ingeniería. Aplicaciones web complejas, portales headless commerce (Shopify/VTEX) o paneles integrados toman de 6 a 9 semanas. Los desarrollos corporativos a gran escala, como migrar plataformas de infraestructuras legadas, construir plataformas SaaS desde cero o implementar flujos complejos de IA integrados a ERPs requieren de 8 a 12 semanas. Usamos sprints ágiles con entregas cada 2 semanas para garantizar validación continua.

**Respuesta Corta:** Las Landing Pages toman de 2 a 3 semanas, los sitios web corporativos de 4 a 6 semanas, y el software SaaS complejo, comercio electrónico o implementaciones completas de IA requieren de 8 a 12 semanas de desarrollo.`
                },
                {
                    q: "¿Garantiza GHWD la seguridad de los datos y el cumplimiento de la LGPD y el GDPR?",
                    a: `Sí. La seguridad de la información y la conformidad con normativas como LGPD y GDPR son pilares fundamentales de la ingeniería desarrollada por GHWD. En cada desarrollo de software, sitio web Next.js y automatización de datos, aplicamos estrictos protocolos que incluyen cifrado de datos (en tránsito y en reposo), autenticación robusta mediante OAuth2/OpenID, control granular de claves de API y aislamiento lógico de base de datos. Además, nuestras arquitecturas estáticas SSG y serverless previenen vulnerabilidades en la Edge (como SQL Injection y XSS). Diseñamos políticas de consentimiento e interfaces de cookies conformes a la ley, garantizando la privacidad y resguardando la reputación de nuestros clientes.

**Respuesta Corta:** Sí, implementamos cifrado avanzado, autenticación segura y seguridad serverless en la Edge, garantizando total cumplimiento de los flujos de datos y bases de datos con la LGPD y el GDPR.`
                }
            ]
        },
        kb: {
            pretitle: "/ Centro de IA e Ingeniería",
            title: "KB.",
            subtitle: "Artículos técnicos, guías de ingeniería y referencias detalladas sobre inteligencia artificial corporativa, RAG, protocolo MCP y automatizaciones B2B.",
            back_to_directory: "Volver a la Base de Conocimiento",
            read_time: "de lectura",
            technical_author: "Autor Técnico",
            related_topics: "Temas Relacionados",
            faq_title: "Preguntas Frecuentes del Tema",
            cta_title: "¿Quiere implementar IA en su empresa?",
            cta_desc: "Programe un diagnóstico gratuito y comprenda el potencial de automatización de su negocio.",
            cta_button: "Hablar con Especialista",
            not_found: "Artículo No Encontrado",
            back_home: "Volver al Inicio"
        },
        glossary: {
            pretitle: "/ Referencias Técnicas",
            title: "GLOSARIO.",
            subtitle: "Diccionario semántico y referencias rápidas con los conceptos clave de inteligencia artificial, integración RAG, protocolo MCP, desarrollo Next.js y Core Web Vitals.",
            schema_name: "Glosario Técnico GHWD - IA e Ingeniería",
            schema_desc: "Diccionario de términos técnicos con conceptos fundamentales sobre inteligencia artificial, desarrollo Next.js y automatización corporativa.",
            search_placeholder: "Buscar término técnico o definición...",
            all_letters: "Todos",
            no_terms: "Ningún término técnico localizado para la búsqueda actual.",
            terms_structure: "Estructura de Términos",
            back_to_kb: "Volver al KB"
        }
    }
};
