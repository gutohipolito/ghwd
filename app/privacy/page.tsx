"use client";

import { LegalLayout } from "@/components/LegalLayout";

export default function PrivacyPolicy() {
    return (
        <LegalLayout
            title="Política de Privacidade"
            subtitle="Nosso compromisso com a proteção dos dados que impulsionam sua transformação digital."
            lastUpdated="17 de Fevereiro de 2026"
        >
            <p>
                A <strong>GHWD Global Digital Partner</strong> ("nós", "nosso" ou "GHWD") está comprometida em proteger a sua privacidade. Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações quando você visita nosso site ou utiliza nossos serviços.
            </p>

            <h3>1. Coleta de Informações</h3>
            <p>
                Coletamos informações para fornecer serviços melhores a todos os nossos usuários. As informações coletadas podem incluir:
            </p>
            <ul>
                <li><strong>Informações fornecidas por você:</strong> Nome, endereço de e-mail, número de telefone e nome da empresa quando você preenche formulários de contato ou solicita uma proposta.</li>
                <li><strong>Informações de navegação:</strong> Dados sobre como você interage com nosso site, incluindo endereço IP, tipo de navegador, páginas visitadas e tempo gasto em cada página.</li>
                <li><strong>Cookies e tecnologias similares:</strong> Utilizamos cookies para melhorar a experiência do usuário e analisar o tráfego do site. Consulte nossa Política de Cookies para mais detalhes.</li>
            </ul>

            <h3>2. Uso das Informações</h3>
            <p>
                Utilizamos as informações coletadas para:
            </p>
            <ul>
                <li>Fornecer, operar e manter nossos serviços digitais.</li>
                <li>Melhorar, personalizar e expandir nosso site e ofertas.</li>
                <li>Entender e analisar como você utiliza nossos serviços para otimização de performance.</li>
                <li>Desenvolver novos produtos, serviços, recursos e funcionalidades.</li>
                <li>Comunicar com você, seja diretamente ou através de um de nossos parceiros, inclusive para atendimento ao cliente, atualizações e fins de marketing.</li>
            </ul>

            <h3>3. Compartilhamento de Dados</h3>
            <p>
                A GHWD não vende suas informações pessoais. Podemos compartilhar seus dados nas seguintes circunstâncias:
            </p>
            <ul>
                <li><strong>Provedores de Serviço:</strong> Com parceiros confiáveis que nos auxiliam na operação do nosso negócio (ex: hospedagem, análise de dados), sob obrigações de confidencialidade.</li>
                <li><strong>Requisitos Legais:</strong> Quando exigido por lei ou para responder a processos legais válidos.</li>
                <li><strong>Fusões e Aquisições:</strong> Se a GHWD estiver envolvida em uma fusão, aquisição ou venda de ativos, seus dados podem ser transferidos como parte dessa transação.</li>
            </ul>

            <h3>4. Segurança de Dados</h3>
            <p>
                Implementamos medidas de segurança técnicas e organizacionais robustas para proteger seus dados contra acesso não autorizado, alteração, divulgação ou destruição. No entanto, nenhum método de transmissão pela Internet ou armazenamento eletrônico é 100% seguro.
            </p>

            <h3>5. Seus Direitos (LGPD/GDPR)</h3>
            <p>
                Dependendo de sua localização, você pode ter os seguintes direitos em relação aos seus dados pessoais:
            </p>
            <ul>
                <li>O direito de acessar, atualizar ou excluir as informações que temos sobre você.</li>
                <li>O direito de retificação se as informações estiverem imprecisas.</li>
                <li>O direito de oposição ao processamento de seus dados.</li>
                <li>O direito à portabilidade de dados.</li>
                <li>O direito de retirar o consentimento a qualquer momento.</li>
            </ul>

            <h3>6. Contato</h3>
            <p>
                Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco através de:
                <br />
                <strong>E-mail:</strong> legal@ghwd.digital
            </p>
        </LegalLayout>
    );
}
