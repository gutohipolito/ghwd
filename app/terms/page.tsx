"use client";

import { LegalLayout } from "@/components/LegalLayout";
import { useLanguage } from "@/lib/i18n-context";

export default function TermsOfService() {
    const { t } = useLanguage();
    return (
        <LegalLayout
            title={t('legal.terms.title')}
            subtitle={t('legal.terms.subtitle')}
            lastUpdated={t('legal.last_update_date')}
        >
            <p>
                Bem-vindo à <strong>GHWD Global Digital Partner</strong>. Ao acessar nosso site ou contratar nossos serviços, você concorda em cumprir estes Termos de Serviço. Se você não concordar com alguma parte destes termos, não deverá acessar o serviço.
            </p>

            <h3>1. Uso do Serviço</h3>
            <p>
                Você concorda em usar nosso site e serviços apenas para fins legais e de uma maneira que não infrinja os direitos de terceiros, nem restrinja ou iniba o uso e usufruto do serviço por qualquer outra pessoa.
            </p>
            <p>
                Proibições incluem, mas não se limitam a: comportamento ilegal, assédio, transmissão de conteúdo obsceno ou ofensivo e interrupção do fluxo normal de diálogo dentro do nosso serviço.
            </p>

            <h3>2. Propriedade Intelectual (IP)</h3>
            <p>
                Todo o conteúdo presente neste site, incluindo textos, gráficos, logotipos, ícones, imagens e software, é propriedade da GHWD ou de seus fornecedores de conteúdo e está protegido pelas leis internacionais de direitos autorais.
            </p>
            <p>
                <strong>"Autoridade forjada em código"</strong>: Os códigos, sistemas e metodologias desenvolvidos pela GHWD são ativos proprietários. Salvo acordo em contrário por escrito (ex: contrato de desenvolvimento de software), a GHWD retém todos os direitos sobre sua tecnologia base e frameworks.
            </p>

            <h3>3. Limitação de Responsabilidade</h3>
            <p>
                Em nenhuma circunstância a GHWD, seus diretores, funcionários, parceiros ou agentes serão responsáveis por quaisquer danos diretos, indiretos, incidentais, especiais ou consequentes resultantes de:
            </p>
            <ul>
                <li>Uso ou incapacidade de usar o serviço;</li>
                <li>Acesso não autorizado ou alteração de suas transmissões ou dados;</li>
                <li>Declarações ou conduta de terceiros no serviço.</li>
            </ul>

            <h3>4. Links para Outros Sites</h3>
            <p>
                Nosso serviço pode conter links para sites de terceiros que não são de propriedade ou controlados pela GHWD. Não temos controle sobre, e não assumimos responsabilidade pelo conteúdo, políticas de privacidade ou práticas de quaisquer sites ou serviços de terceiros.
            </p>

            <h3>5. Rescisão</h3>
            <p>
                Podemos encerrar ou suspender seu acesso imediatamente, sem aviso prévio ou responsabilidade, por qualquer motivo, inclusive se você violar os Termos.
            </p>

            <h3>6. Lei Aplicável</h3>
            <p>
                Estes Termos serão regidos e interpretados de acordo com as leis do Brasil, sem levar em conta suas disposições sobre conflitos de leis.
            </p>

            <h3>7. Alterações</h3>
            <p>
                Reservamo-nos o direito, a nosso exclusivo critério, de modificar ou substituir estes Termos a qualquer momento. O uso continuado do serviço após tais alterações constitui sua aceitação dos novos Termos.
            </p>

            <h3>8. Contato</h3>
            <p>
                Para quaisquer questões sobre estes Termos de Serviço, por favor contacte-nos em legal@ghwd.digital.
            </p>
        </LegalLayout>
    );
}
