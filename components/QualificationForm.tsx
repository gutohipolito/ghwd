"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowRight, Check } from "lucide-react";

type Option = {
    label: string;
    value: string;
    points: number;
    badge?: string;
};

type Step = {
    title: string;
    hint: string;
    options: Option[];
};

const steps: Step[] = [
    {
        title: "O que você precisa?",
        hint: "Selecione a opção que melhor descreve seu projeto.",
        options: [
            { label: "Landing page / Página de vendas", value: "landing", points: 1 },
            { label: "Site institucional (apresentar meu negócio)", value: "site", points: 1 },
            { label: "Loja virtual / E-commerce", value: "ecommerce", points: 2, badge: "Popular" },
            { label: "Reformular / melhorar site que já tenho", value: "redesign", points: 2 },
            { label: "Outro / Não sei ainda", value: "outro", points: 0 },
        ],
    },
    {
        title: "Seu negócio já está ativo?",
        hint: "Isso nos ajuda a entender o contexto do projeto.",
        options: [
            { label: "Sim, já estou vendendo ou prestando serviços", value: "ativo", points: 2, badge: "Ativo" },
            { label: "Estou abrindo agora / Em fase de lançamento", value: "abrindo", points: 1, badge: "Novo" },
            { label: "Ainda é uma ideia, estou pesquisando", value: "ideia", points: 0, badge: "Explorando" },
        ],
    },
    {
        title: "Qual é o seu prazo para o projeto?",
        hint: "Nos ajuda a priorizar e encaixar o projeto no nosso calendário.",
        options: [
            { label: "Urgente — preciso o quanto antes", value: "urgente", points: 2, badge: "Urgente" },
            { label: "Nos próximos 1 a 2 meses", value: "1-2meses", points: 2, badge: "Em breve" },
            { label: "Sem pressa, quero planejar bem", value: "sempressa", points: 0 },
        ],
    },
    {
        title: "Qual faixa de investimento você considera?",
        hint: "Sem compromisso — serve só para te apresentarmos as opções certas.",
        options: [
            { label: "Até R$1.500", value: "ate1500", points: 0 },
            { label: "R$1.500 a R$4.000", value: "1500-4000", points: 1 },
            { label: "R$4.000 a R$8.000", value: "4000-8000", points: 2, badge: "Recomendado" },
            { label: "Acima de R$8.000", value: "acima8000", points: 2, badge: "Premium" },
            { label: "Não sei ainda / Quero um orçamento", value: "naoseibudget", points: 1 },
        ],
    },
    {
        title: "Como prefere ser contatado?",
        hint: "Vamos te chamar no canal de sua preferência.",
        options: [
            { label: "WhatsApp — rápido e prático", value: "whatsapp", points: 1 },
            { label: "E-mail — prefiro por escrito", value: "email", points: 1 },
            { label: "Videochamada — quero conversar direto", value: "videocall", points: 2, badge: "Top ⭐" },
        ],
    },
];

export function QualificationForm() {
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<Record<number, Option>>({});
    const [formData, setFormData] = useState({
        nome: "",
        tel: "",
        email: "",
        negocio: ""
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSelect = (option: Option) => {
        setAnswers({ ...answers, [currentStep]: option });
    };

    const nextStep = () => {
        if (currentStep < steps.length) {
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const calculateScore = () => {
        return Object.values(answers).reduce((acc, curr) => acc + curr.points, 0);
    };

    const getResult = () => {
        const score = calculateScore();
        const firstName = formData.nome.split(" ")[0];
        
        if (score >= 7) {
            return {
                tier: "hot",
                title: `Perfeito, ${firstName}!`,
                desc: "Suas respostas mostram que você tem um projeto claro e está pronto para avançar. Vamos entrar em contato em até 24 horas para marcar uma conversa.",
                waMsg: "Estou animado para começar!"
            };
        } else if (score >= 4) {
            return {
                tier: "warm",
                title: `Ótimo, ${firstName}!`,
                desc: "Você tem um projeto interessante. Vamos te mandar mais informações e conversamos sobre como podemos ajudar no momento certo para você.",
                waMsg: "Gostaria de saber mais sobre os serviços."
            };
        } else {
            return {
                tier: "cold",
                title: `Olá, ${firstName}!`,
                desc: "Parece que você ainda está explorando suas opções — e tudo bem! Vamos te enviar conteúdo útil para quando o momento for certo.",
                waMsg: "Ainda estou pesquisando, mas gostaria de entender melhor."
            };
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        const result = getResult();
        const waLink = `https://wa.me/5554999221230?text=${encodeURIComponent(
            `Olá! Me chamo ${formData.nome}${formData.negocio ? ` e represento ${formData.negocio}` : ""}.\n` +
            `Preenchi o formulário do site e meu projeto é: ${answers[0]?.label || "-"}.\n` +
            `Budget considerado: ${answers[3]?.label || "-"}.\n` +
            `${result.waMsg}`
        )}`;

        return (
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-zinc-900/50 border border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-xl max-w-2xl mx-auto text-center"
            >
                <div className={cn(
                    "w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 text-3xl border-2",
                    result.tier === 'hot' ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-500" :
                    result.tier === 'warm' ? "bg-amber-500/10 border-amber-500/30 text-amber-500" :
                    "bg-zinc-500/10 border-zinc-500/30 text-zinc-500"
                )}>
                    {result.tier === 'hot' ? '🔥' : result.tier === 'warm' ? '✨' : '👋'}
                </div>
                <h2 className="text-3xl md:text-4xl font-serif mb-4">{result.title}</h2>
                <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                    {result.desc}
                </p>

                <div className="bg-white/5 border border-white/5 rounded-2xl p-6 text-left space-y-4 mb-8">
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-zinc-500">Projeto</span>
                        <span className="text-white font-medium">{answers[0]?.label}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-zinc-500">Prazo</span>
                        <span className="text-white font-medium">{answers[2]?.label}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-zinc-500">Investimento</span>
                        <span className="text-white font-medium">{answers[3]?.label}</span>
                    </div>
                </div>

                {result.tier !== 'cold' ? (
                    <a 
                        href={waLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-emerald-500 text-black px-10 py-4 rounded-full font-bold hover:bg-white transition-all duration-300"
                    >
                        Falar agora no WhatsApp
                        <ArrowRight className="w-5 h-5" />
                    </a>
                ) : (
                    <p className="text-zinc-500 text-sm">
                        Entraremos em contato via e-mail em breve.
                    </p>
                )}
            </motion.div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto w-full">
            {/* Progress */}
            <div className="flex items-center gap-2 mb-12">
                {[0, 1, 2, 3, 4, 5].map((s) => (
                    <div 
                        key={s}
                        className={cn(
                            "h-1.5 transition-all duration-500 rounded-full",
                            s < currentStep ? "bg-emerald-500 w-8" :
                            s === currentStep ? "bg-white w-12" : "bg-white/10 w-4"
                        )}
                    />
                ))}
                <span className="ml-auto text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                    Passo {currentStep + 1} de 6
                </span>
            </div>

            <AnimatePresence mode="wait">
                {currentStep < steps.length ? (
                    <motion.div
                        key={currentStep}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.4 }}
                        className="bg-zinc-900/50 border border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-xl"
                    >
                        <span className="text-[10px] font-mono text-emerald-500 uppercase tracking-[0.2em] mb-4 block">
                            Pergunta 0{currentStep + 1}
                        </span>
                        <h2 className="text-2xl md:text-3xl font-serif mb-2">{steps[currentStep].title}</h2>
                        <p className="text-zinc-500 text-sm mb-8">{steps[currentStep].hint}</p>

                        <div className="space-y-3">
                            {steps[currentStep].options.map((option) => (
                                <button
                                    key={option.value}
                                    onClick={() => handleSelect(option)}
                                    className={cn(
                                        "w-full flex items-center justify-between p-5 rounded-2xl border transition-all duration-300 text-left group",
                                        answers[currentStep]?.value === option.value
                                            ? "bg-emerald-500/10 border-emerald-500/50 text-white"
                                            : "bg-white/5 border-white/5 hover:border-white/20 text-zinc-400"
                                    )}
                                >
                                    <div className="flex items-center gap-4">
                                        <span className="text-base font-medium">{option.label}</span>
                                        {option.badge && (
                                            <span className="text-[9px] uppercase tracking-widest bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded-md font-bold">
                                                {option.badge}
                                            </span>
                                        )}
                                    </div>
                                    <div className={cn(
                                        "w-5 h-5 rounded-full border flex items-center justify-center transition-all",
                                        answers[currentStep]?.value === option.value
                                            ? "bg-emerald-500 border-emerald-500"
                                            : "border-white/20 group-hover:border-white/40"
                                    )}>
                                        {answers[currentStep]?.value === option.value && <Check className="w-3 h-3 text-black stroke-[3]" />}
                                    </div>
                                </button>
                            ))}
                        </div>

                        <div className="flex items-center justify-between mt-12 pt-8 border-t border-white/5">
                            <button 
                                onClick={prevStep}
                                className={cn(
                                    "text-zinc-500 hover:text-white transition-colors text-sm font-medium",
                                    currentStep === 0 && "opacity-0 pointer-events-none"
                                )}
                            >
                                ← Voltar
                            </button>
                            <button 
                                onClick={nextStep}
                                disabled={!answers[currentStep]}
                                className="flex items-center gap-2 bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-emerald-500 hover:text-white transition-all disabled:opacity-30"
                            >
                                Continuar
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="contact-data"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-zinc-900/50 border border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-xl"
                    >
                        <span className="text-[10px] font-mono text-emerald-500 uppercase tracking-[0.2em] mb-4 block">
                            Última etapa 🎉
                        </span>
                        <h2 className="text-2xl md:text-3xl font-serif mb-2">Seus dados de contato</h2>
                        <p className="text-zinc-500 text-sm mb-8">Promessa: zero spam. Vamos usar isso só para te retornar sobre o projeto.</p>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest text-zinc-500 ml-1">Nome completo *</label>
                                <input 
                                    required
                                    type="text" 
                                    value={formData.nome}
                                    onChange={(e) => setFormData({...formData, nome: e.target.value})}
                                    placeholder="Como prefere ser chamado?"
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-emerald-500 transition-colors"
                                />
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-zinc-500 ml-1">WhatsApp *</label>
                                    <input 
                                        required
                                        type="tel" 
                                        value={formData.tel}
                                        onChange={(e) => setFormData({...formData, tel: e.target.value})}
                                        placeholder="(11) 99999-9999"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-emerald-500 transition-colors"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-zinc-500 ml-1">E-mail *</label>
                                    <input 
                                        required
                                        type="email" 
                                        value={formData.email}
                                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                                        placeholder="seu@email.com"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-emerald-500 transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest text-zinc-500 ml-1">Nome do seu negócio (opcional)</label>
                                <input 
                                    type="text" 
                                    value={formData.negocio}
                                    onChange={(e) => setFormData({...formData, negocio: e.target.value})}
                                    placeholder="Ex: Minha Empresa Inc."
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-emerald-500 transition-colors"
                                />
                            </div>

                            <div className="flex items-center justify-between mt-12 pt-8 border-t border-white/5">
                                <button 
                                    type="button"
                                    onClick={prevStep}
                                    className="text-zinc-500 hover:text-white transition-colors text-sm font-medium"
                                >
                                    ← Voltar
                                </button>
                                <button 
                                    type="submit"
                                    className="flex items-center gap-2 bg-emerald-500 text-black px-8 py-3 rounded-full font-bold hover:bg-white transition-all shadow-lg shadow-emerald-500/20"
                                >
                                    Enviar & Ver resultado
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
